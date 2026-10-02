"use client";

import { useEffect, useRef, useState } from "react";
import { createClock, elapsedAt, pauseClock, resumeClock, SESSION_SECONDS } from "../session-timeline.mjs";

export function useSessionClock(audioSrc: string | null, onComplete: () => void) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const controls = useRef({ toggle: () => {} });
  const complete = useRef(onComplete);
  useEffect(() => { complete.current = onComplete; }, [onComplete]);

  useEffect(() => {
    let clock = createClock();
    let playing = false;
    let disposed = false;
    let pending = false;
    let request = 0;
    let frame = 0;
    let audio: HTMLAudioElement | null = audioSrc ? new Audio(audioSrc) : null;
    if (audio) audio.preload = "auto";

    const read = () => audio ? Math.min(SESSION_SECONDS, audio.currentTime) : elapsedAt(clock, performance.now()) / 1000;
    function pause(message: string | null = null) {
      request++;
      const seconds = read();
      clock = audio ? { elapsedMs: seconds * 1000, startedAtMs: null } : pauseClock(clock, performance.now());
      playing = false;
      audio?.pause();
      cancelAnimationFrame(frame);
      setElapsedSeconds(seconds);
      setIsPlaying(false);
      if (message) setNotice(message);
    }
    function tick() {
      if (disposed || !playing) return;
      const seconds = read();
      setElapsedSeconds(seconds);
      if (seconds >= SESSION_SECONDS) {
        pause();
        complete.current();
        return;
      }
      frame = requestAnimationFrame(tick);
    }
    async function resume() {
      if (disposed || playing || pending || document.hidden) return;
      pending = true;
      const ticket = ++request;
      try {
        if (audio) await audio.play();
        if (disposed || document.hidden || ticket !== request) {
          audio?.pause();
          return;
        }
        clock = resumeClock(clock, performance.now());
        playing = true;
        setIsPlaying(true);
        setNotice(null);
        frame = requestAnimationFrame(tick);
      } catch {
        if (!disposed && ticket === request) failAudio();
      } finally {
        pending = false;
      }
    }
    function failAudio() {
      pause("Die Aufnahme ist nicht verfügbar. Du kannst ohne Stimme fortsetzen.");
      if (audio) {
        audio.onended = null;
        audio.onerror = null;
        audio.onloadedmetadata = null;
        audio.pause();
        audio = null;
      }
    }
    if (audio) {
      audio.onerror = failAudio;
      audio.onloadedmetadata = () => {
        if (audio && (!Number.isFinite(audio.duration) || Math.abs(audio.duration - SESSION_SECONDS) > 1)) failAudio();
      };
      audio.onended = () => {
        pause();
        complete.current();
      };
    }
    const visibility = () => {
      if (document.hidden) pause("Pausiert, während HALE im Hintergrund war. Setze fort, wenn du bereit bist.");
    };
    const pageHide = () => pause("Die Session ist pausiert.");
    controls.current = { toggle: () => { if (playing) pause(); else void resume(); } };
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("pagehide", pageHide);
    void resume();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pagehide", pageHide);
      if (audio) {
        audio.onended = null;
        audio.onerror = null;
        audio.onloadedmetadata = null;
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
      }
      controls.current = { toggle: () => {} };
    };
  }, [audioSrc]);

  return { elapsedSeconds, isPlaying, notice, toggle: () => controls.current.toggle() };
}
