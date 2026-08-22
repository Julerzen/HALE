import Image from "next/image";
import { formatTime, type Direction } from "../prototype-data";
import { HaleAperture } from "./hale-aperture";

type PracticePlayerProps = {
  direction: Direction;
  minutes: number;
  remainingSeconds: number;
  isPlaying: boolean;
  isCoherencePrototype: boolean;
  breathPhase: "Einatmen" | "Ausatmen";
  onTogglePlaying: () => void;
  onFinish: () => void;
};

export function PracticePlayer({
  direction,
  minutes,
  remainingSeconds,
  isPlaying,
  isCoherencePrototype,
  breathPhase,
  onTogglePlaying,
  onFinish,
}: PracticePlayerProps) {
  const totalSeconds = minutes * 60;
  const elapsedSeconds = Math.max(0, totalSeconds - remainingSeconds);
  const progress = Math.min(100, Math.round((elapsedSeconds / totalSeconds) * 100));
  const phaseLabel = isCoherencePrototype ? breathPhase : "Natürlich atmen";
  const methodTitle = isCoherencePrototype ? "Kohärenz · 4 ein / 4 aus" : "Methodik noch offen";

  return (
    <div className="screen practice-screen" data-playing={isPlaying}>
      <h1 className="sr-only">Zwischenraum</h1>
      <Image
        className="practice-background"
        src="/images/hale-evening-threshold-v1.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 520px) 100vw, 430px"
        aria-hidden="true"
      />

      <div className="practice-topbar">
        <button className="icon-action" type="button" onClick={onFinish} aria-label="Session schließen">
          <span aria-hidden="true">×</span>
        </button>
        <div className="practice-topbar-status">
          <strong>HALE</strong>
          <span aria-label={`${formatTime(remainingSeconds)} verbleibend`}>{formatTime(remainingSeconds)}</span>
        </div>
        <span className="practice-session-index" aria-hidden="true">01 / 01</span>
      </div>

      <div className="practice-hero">
        <div className="practice-pulse-field" aria-hidden="true"><i /><i /><i /></div>
        <HaleAperture
          className="practice-hale-aperture"
          isPlaying={isPlaying}
          isCoherencePrototype={isCoherencePrototype}
          phase={breathPhase}
        />
        <p className="practice-phase" aria-live="polite" aria-atomic="true">{phaseLabel}</p>
      </div>

      <div className="practice-controls">
        <button
          className="round-control"
          type="button"
          onClick={onTogglePlaying}
          aria-label={isPlaying ? "Pausieren" : "Fortsetzen"}
        >
          <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        </button>
        <button className="practice-finish" type="button" onClick={onFinish}>Beenden</button>
      </div>

      <div className="practice-information">
        <div className="practice-readout" aria-label="Sessionstatus">
          <span><small>Methode</small><strong>{methodTitle}</strong></span>
          <span><small>Status</small><strong>{isPlaying ? "Spielt" : "Pausiert"}</strong></span>
        </div>

        <div
          className="practice-progress"
          role="progressbar"
          aria-label="Sessionfortschritt"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <details className="practice-disclosure">
          <summary>Über diese Session <span aria-hidden="true">＋</span></summary>
          <div className="practice-disclosure-copy">
            <p className="practice-kicker">Geführter Übergang · {direction.label}</p>
            <h2>Zwischenraum</h2>
            <p>
              {isCoherencePrototype
                ? "Ein ruhiger Rhythmus zwischen Arbeit und Abend. Atme nur so tief, wie es angenehm ist."
                : `Dieser Raum testet Atmosphäre und Ablauf für ${direction.label}. Die passende Atemmethode legen wir erst nach der Abnahme fest.`}
            </p>
            <p className="practice-method-note">
              {isCoherencePrototype
                ? "Die 4-ein/4-aus-Kohärenz ist ausschließlich für Ruhe ein vorläufiger Prototyp. Pausiere oder atme natürlich weiter, sobald sich etwas unangenehm anfühlt."
                : "Für diese Richtung ist noch keine Methode freigegeben. Die Preview behauptet deshalb keine spezifische Atemwirkung. Es wird noch kein Audio abgespielt und nichts gespeichert."}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
