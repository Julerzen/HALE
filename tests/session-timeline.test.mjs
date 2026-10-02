import test from "node:test";
import assert from "node:assert/strict";
import { createClock, elapsedAt, resumeClock, pauseClock, sessionFrame } from "../app/session-timeline.mjs";

test("elapsed time catches up after delayed callbacks and preserves a fractional pause", () => {
  let clock = resumeClock(createClock(), 1000);
  assert.equal(elapsedAt(clock, 9750), 8750);
  clock = pauseClock(clock, 9750);
  assert.equal(elapsedAt(clock, 40000), 8750);
  clock = resumeClock(clock, 40000);
  assert.equal(elapsedAt(clock, 41250), 10000);
  assert.equal(elapsedAt(clock, 1000000), 300000);
});

test("resuming an already running clock does not reset its anchor", () => {
  const clock = resumeClock(createClock(), 1000);
  assert.equal(resumeClock(clock, 2000), clock);
  assert.equal(elapsedAt(clock, 500), 0);
});

test("the five-minute session completes 17 whole 4/4 cycles between natural breathing", () => {
  assert.equal(sessionFrame(89.999).guided, false);
  for (let cycle = 0; cycle < 17; cycle++) {
    const start = 90 + cycle * 8;
    assert.equal(sessionFrame(start).guided, true);
    assert.equal(sessionFrame(start).phase, "Einatmen");
    assert.equal(sessionFrame(start + 4).phase, "Ausatmen");
    assert.equal(sessionFrame(start).expansion, 0);
    assert.equal(sessionFrame(start + 4).expansion, 1);
  }
  assert.equal(sessionFrame(225.999).guided, true);
  assert.equal(sessionFrame(226).guided, false);
  assert.equal(sessionFrame(270).chapter, "Zurückkommen");
  assert.equal(sessionFrame(300).elapsed, 300);
});

test("unreleased directions never acquire the calm breathing method", () => {
  for (let elapsed = 0; elapsed <= 300; elapsed++) {
    assert.equal(sessionFrame(elapsed, false).guided, false);
    assert.equal(sessionFrame(elapsed, false).cue, "Atme in deinem eigenen Rhythmus.");
  }
});
