import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  timeout: 30000,
  expect: { timeout: 6000 },
  retries: 0,
  reporter: "list",
  use: { baseURL: process.env.HALE_TEST_BASE_URL ?? "http://127.0.0.1:3000" },
  projects: [
    { name: "chromium-mobile", use: { ...devices["Pixel 7"] } },
    { name: "webkit-iphone", use: { ...devices["iPhone 13"] } },
  ],
  webServer: process.env.HALE_TEST_BASE_URL ? undefined : { command: "npm run start -- --hostname 127.0.0.1", url: "http://127.0.0.1:3000", reuseExistingServer: false },
});
