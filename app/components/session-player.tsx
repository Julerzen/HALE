import { useState } from "react";
import type { Direction } from "../prototype-data";

type SessionPlayerProps = {
  direction: Direction;
  minutes: number;
  onMinutesChange: (minutes: number) => void;
  onBack: () => void;
  onStart: () => void;
};

export function SessionPlayer({ direction, minutes, onMinutesChange, onBack, onStart }: SessionPlayerProps) {
  const isCoherencePrototype = direction.id === "calm";
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="screen player-screen">
      <div className="player-nav">
        <button type="button" className="icon-action" onClick={onBack} aria-label="Zur Übersicht zurück">←</button>
        <span>Work → Evening</span>
        <button
          type="button"
          className="icon-action"
          aria-label="Weitere Informationen"
          aria-expanded={detailsOpen}
          aria-controls="player-details"
          onClick={() => setDetailsOpen((current) => !current)}
        >
          ···
        </button>
      </div>

      <div className="player-art" aria-hidden="true">
        <span className="player-haze haze-one" />
        <span className="player-haze haze-two" />
        <span className="player-aperture"><i /><i /></span>
        <small>HALE / 001</small>
      </div>

      <div className="player-copy">
        <p className="kicker">Geführter Übergang · {direction.label}</p>
        <h1>Zwischenraum</h1>
        <p>Ein stiller Schnitt zwischen Arbeit und Abend. Ohne Leistungsziel.</p>
      </div>

      <div className="player-method" data-ready={isCoherencePrototype}>
        <span>{isCoherencePrototype ? "Methoden-Prototyp" : "Player-Prototyp"}</span>
        <strong>{isCoherencePrototype ? "Kohärenz · 4 ein / 4 aus" : "Methode wird gemeinsam festgelegt"}</strong>
        <small>
          {isCoherencePrototype
            ? "Nur für Ruhe als vorläufige Testmethode. Atme jederzeit natürlich weiter."
            : "Diese Preview prüft Ablauf und Player – sie behauptet noch keine passende Atemmethode."}
        </small>
      </div>

      {detailsOpen && (
        <div className="player-details" id="player-details">
          <strong>Über diesen Prototyp</strong>
          <p>Check-in, Auswahl und Player sind interaktiv. Es wird noch kein Audio abgespielt und nichts gespeichert.</p>
        </div>
      )}

      <div className="player-options">
        <span>Dauer</span>
        <div className="segmented segmented-dark" aria-label="Dauer auswählen">
          {[5, 10].map((duration) => (
            <button
              key={duration}
              type="button"
              data-selected={minutes === duration}
              aria-pressed={minutes === duration}
              onClick={() => onMinutesChange(duration)}
            >
              {duration} Min
            </button>
          ))}
        </div>
      </div>

      <button className="player-start" type="button" onClick={onStart}>
        <span className="play-symbol" aria-hidden="true">▶</span>
        <span><strong>Session starten</strong><small>Original Sound in Entwicklung</small></span>
        <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
