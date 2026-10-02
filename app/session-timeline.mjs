export const SESSION_SECONDS = 300;
export const RHYTHM_START = 90;
export const RHYTHM_END = 226;

export function createClock() {
  return { elapsedMs: 0, startedAtMs: null };
}

export function elapsedAt(clock, nowMs, durationMs = SESSION_SECONDS * 1000) {
  const runningMs = clock.startedAtMs === null ? 0 : Math.max(0, nowMs - clock.startedAtMs);
  return Math.min(durationMs, Math.max(0, clock.elapsedMs + runningMs));
}

export function resumeClock(clock, nowMs) {
  return clock.startedAtMs === null ? { ...clock, startedAtMs: nowMs } : clock;
}

export function pauseClock(clock, nowMs) {
  return { elapsedMs: elapsedAt(clock, nowMs), startedAtMs: null };
}

export function sessionFrame(seconds, calm = true) {
  const elapsed = Math.min(SESSION_SECONDS, Math.max(0, seconds));
  const guided = calm && elapsed >= RHYTHM_START && elapsed < RHYTHM_END;
  const position = guided ? (elapsed - RHYTHM_START) % 8 : 0;
  const phase = position < 4 ? "Einatmen" : "Ausatmen";
  const expansion = guided ? (1 - Math.cos(Math.PI * position / 4)) / 2 : 0.5;
  const chapter = !calm ? "Offene Praxis" : elapsed < RHYTHM_START ? "Ankommen"
    : elapsed < RHYTHM_END ? "Ruhiger Rhythmus" : elapsed < 270 ? "Loslassen" : "Zurückkommen";
  let cue = "Atme in deinem eigenen Rhythmus.";
  if (calm) {
    if (elapsed < 30) cue = "Mach es dir bequem. Du kannst jederzeit aufhören.";
    else if (elapsed < 75) cue = "Spüre den Kontakt zum Boden. Lass deinen Atem kommen und gehen.";
    else if (elapsed < 90) cue = "Gleich kannst du dem Licht folgen: vier Sekunden ein, vier Sekunden aus.";
    else if (elapsed < 138) cue = "Atme nur so tief, wie es angenehm ist. Das Licht gibt den Rhythmus.";
    else if (elapsed < 170) cue = "Du kannst dem Licht folgen oder natürlich weiteratmen.";
    else if (elapsed < 226) cue = "Wenn Gedanken kommen, kehre behutsam zum Atem zurück.";
    else if (elapsed < 270) cue = "Lass den Rhythmus los. Dein Atem findet seinen eigenen Weg.";
    else cue = "Nimm den Raum wahr. Dein Abend darf beginnen.";
  }
  return { elapsed, guided, phase, expansion, chapter, cue };
}
