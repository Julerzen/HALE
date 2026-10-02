export const SESSION_SECONDS: 300;
export const RHYTHM_START: 90;
export const RHYTHM_END: 226;
export type SessionClock = { elapsedMs: number; startedAtMs: number | null };
export function createClock(): SessionClock;
export function elapsedAt(clock: SessionClock, nowMs: number, durationMs?: number): number;
export function resumeClock(clock: SessionClock, nowMs: number): SessionClock;
export function pauseClock(clock: SessionClock, nowMs: number): SessionClock;
export function sessionFrame(seconds: number, calm?: boolean): {
  elapsed: number; guided: boolean; phase: "Einatmen" | "Ausatmen";
  expansion: number; chapter: string; cue: string;
};
