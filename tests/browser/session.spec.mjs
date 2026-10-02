import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
const releaseVersion = JSON.parse(readFileSync("package.json", "utf8")).version;

test.beforeAll(async () => {
  if (!process.env.HALE_TEST_BASE_URL) return;
  test.setTimeout(90000);
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    const response = await fetch(process.env.HALE_TEST_BASE_URL);
    const html = await response.text();
    if (response.ok && html.includes(`HALE Work to Evening Prototyp v${releaseVersion}`)) return;
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  throw new Error(`Production has not served HALE ${releaseVersion} within 60 seconds.`);
});

async function enter(page) {
  await page.goto("/");
  await expect(page.locator("section.device")).toHaveAttribute("aria-label", `HALE Work to Evening Prototyp v${releaseVersion}`);
  await page.getByRole("button", { name: "In den Zwischenraum" }).click();
  await expect(page.getByRole("heading", { name: "Wo bist du gerade?" })).toBeFocused();
}
async function practice(page) {
  await page.getByRole("button", { name: "Ohne Check-in weiter" }).click();
  await page.getByRole("button", { name: "Passende Räume ansehen" }).click();
  await expect(page.getByRole("button", { name: "Ändern" })).toBeVisible();
  await page.getByRole("button", { name: /HALE Original/ }).click();
  await expect(page.getByText("Bei Schwindel", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: /Ohne Stimme starten/ }).click();
  await expect(page.getByRole("button", { name: "Pausieren", exact: true })).toBeVisible();
}

test("mobile pause freezes time and the aperture; resume and completion use the same clock", async ({ page }, testInfo) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await enter(page);
  await page.clock.install();
  await practice(page);
  await expect(page.locator(".practice-phase")).toHaveText("Natürlich atmen");
  await page.clock.fastForward(91000);
  await page.clock.runFor(32);
  await expect(page.locator(".practice-phase")).toHaveText("Einatmen");
  await page.getByRole("button", { name: "Pausieren", exact: true }).click();
  const time = await page.locator(".practice-topbar-status").innerText();
  const shape = await page.locator(".practice-hale-aperture .aperture-left").getAttribute("style");
  await page.clock.fastForward(60000);
  expect(await page.locator(".practice-topbar-status").innerText()).toBe(time);
  expect(await page.locator(".practice-hale-aperture .aperture-left").getAttribute("style")).toBe(shape);
  await page.getByRole("button", { name: "Fortsetzen", exact: true }).click();
  await expect(page.getByRole("button", { name: "Pausieren", exact: true })).toBeVisible();
  await page.clock.runFor(100);
  console.info(`HALE resume (${testInfo.project.name}): ${await page.locator(".practice-topbar-status").innerText()}`);
  // Stay beyond the natural-breathing boundary; exact 226s is covered by the pure timeline test.
  await page.clock.fastForward(140000);
  await page.clock.runFor(100);
  console.info(`HALE landing (${testInfo.project.name}): ${await page.locator(".practice-topbar-status").innerText()}`);
  await expect(page.locator(".practice-phase")).toHaveText("Natürlich atmen");
  await page.clock.fastForward(75000);
  await page.clock.runFor(32);
  await expect(page.getByRole("heading", { name: "Was ist jetzt anders?" })).toBeFocused();
  expect(errors).toEqual([]);
});

test("check-in supports skip, complete, return, and a fresh reset without persistence", async ({ page }) => {
  await enter(page);
  await page.getByRole("button", { name: "Zustand einordnen" }).click();
  await page.getByRole("slider", { name: "Aktivierung", exact: true }).focus();
  await page.keyboard.press("End");
  await expect(page.locator("#activation")).toHaveValue("10");
  await page.getByRole("button", { name: "Weiter", exact: true }).click();
  await page.getByRole("button", { name: "Weiter", exact: true }).click();
  for (const slider of await page.getByRole("slider").all()) {
    const box = await slider.boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(44);
  }
  await page.getByRole("button", { name: "Moment ansehen" }).click();
  await expect(page.getByRole("heading", { name: "So ist es gerade." })).toBeFocused();
  await page.getByRole("button", { name: "Richtung wählen" }).click();
  await expect(page.getByText("10/10 Energie · 5/10 Erleben")).toBeVisible();
  await page.getByRole("button", { name: "HALE Startseite" }).click();
  await page.getByRole("button", { name: "In den Zwischenraum" }).click();
  await page.getByRole("button", { name: "Zustand einordnen" }).click();
  await expect(page.locator("#activation")).toHaveValue("5");
  await page.getByRole("button", { name: "Check-in überspringen" }).click();
  await expect(page.getByRole("heading", { name: "Wie möchtest du in den Abend gehen?" })).toBeFocused();
  await expect(page.getByText("Deine Momentaufnahme")).toHaveCount(0);
  expect(await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length }))).toEqual({ local: 0, session: 0 });
});

test("other directions keep method open and reduced motion remains static on short screens", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 667 });
  await enter(page);
  await page.getByRole("button", { name: "Ohne Check-in weiter" }).click();
  await page.getByRole("button", { name: /Wach werden.*Aktivierung/ }).click();
  await page.getByRole("button", { name: "Passende Räume ansehen" }).click();
  const target = await page.getByRole("button", { name: "Ändern" }).boundingBox();
  expect(target.height).toBeGreaterThanOrEqual(44);
  await page.getByRole("button", { name: /HALE Original/ }).click();
  await page.getByRole("button", { name: /Ohne Stimme starten/ }).click();
  await expect(page.getByText("Methodik noch offen", { exact: true })).toBeVisible();
  await expect(page.locator(".practice-phase")).toHaveText("Natürlich atmen");
  expect(await page.locator(".practice-hale-aperture .aperture-left").evaluate(el => getComputedStyle(el).transform)).toBe("none");
  await page.getByRole("button", { name: "Beenden", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Was ist jetzt anders?" })).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test("hidden-document guidance pauses and stays paused when returning", async ({ page }) => {
  await enter(page);
  await page.clock.install();
  await practice(page);
  await page.clock.fastForward(29000);
  await page.clock.runFor(32);
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, get: () => true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.getByRole("button", { name: "Fortsetzen", exact: true })).toBeVisible();
  const time = await page.locator(".practice-topbar-status").innerText();
  await page.clock.fastForward(120000);
  expect(await page.locator(".practice-topbar-status").innerText()).toBe(time);
  await page.evaluate(() => {
    delete document.hidden;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(page.getByRole("button", { name: "Fortsetzen", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Fortsetzen", exact: true }).click();
  await page.clock.fastForward(1000);
  await page.clock.runFor(32);
  expect(await page.locator(".practice-topbar-status").innerText()).not.toBe(time);
  await page.getByRole("button", { name: "Beenden", exact: true }).click();
});
