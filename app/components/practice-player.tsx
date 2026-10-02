import { sessionFrame } from "../session-timeline.mjs";
import { RUHE_AUDIO_SRC } from "../session-audio";
import { useSessionClock } from "./use-session-clock";
import Image from "next/image";
import { formatTime, type Direction } from "../prototype-data";
import { HaleAperture } from "./hale-aperture";

type PracticePlayerProps = {
  direction: Direction;
  minutes: number;
  onFinish: () => void;
};

export function PracticePlayer({
  direction,
  minutes,
  onFinish,
}: PracticePlayerProps) {
  const calm = direction.id === "calm";
  const { elapsedSeconds, isPlaying, notice, toggle } = useSessionClock(calm ? RUHE_AUDIO_SRC : null, onFinish);
  const frame = sessionFrame(elapsedSeconds, calm);
  const remainingSeconds = Math.max(0, Math.ceil(minutes * 60 - elapsedSeconds));
  const isCoherencePrototype = frame.guided;
  const breathPhase = frame.phase;
  const totalSeconds = minutes * 60;
  const progress = Math.min(100, Math.round((elapsedSeconds / totalSeconds) * 100));
  const phaseLabel = isCoherencePrototype ? breathPhase : "Natürlich atmen";
  const methodTitle = calm ? (frame.guided ? "4 ein / 4 aus" : "Natürlich atmen") : "Methodik noch offen";

  return (
    <div className="screen practice-screen" data-playing={isPlaying}>
      <h1 className="sr-only" tabIndex={-1}>Zwischenraum</h1>
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
          expansion={frame.expansion}
        />
        <p className="practice-phase" aria-live="off">{phaseLabel}</p>
        <p className="practice-cue" aria-live="polite" aria-atomic="true">{frame.cue}</p>
      </div>

      <div className="practice-controls">
        <button
          className="round-control"
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pausieren" : "Fortsetzen"}
        >
          <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        </button>
        <button className="practice-finish" type="button" onClick={onFinish}>Beenden</button>
      </div>

      <div className="practice-information">
        {notice && <p className="practice-notice" role="status">{notice}</p>}
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
              {calm
                ? "Ein ruhiger Rhythmus zwischen Arbeit und Abend. Atme nur so tief, wie es angenehm ist."
                : `Dieser Raum testet Atmosphäre und Ablauf für ${direction.label}. Die passende Atemmethode legen wir erst nach der Abnahme fest.`}
            </p>
            <p className="practice-method-note">
              {isCoherencePrototype
                ? "Ankommen, 17 Zyklen mit 4 Sekunden ein und 4 Sekunden aus, dann natürliches Atmen und Zurückkommen. Die Methode ist vorläufig. Pausiere oder atme natürlich weiter, sobald sich etwas unangenehm anfühlt."
                : "Für diese Richtung ist noch keine Methode freigegeben. Die Preview behauptet deshalb keine spezifische Atemwirkung. Es wird noch kein Audio abgespielt und nichts gespeichert."}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
