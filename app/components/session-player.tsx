import { RUHE_AUDIO_SRC } from "../session-audio";
import { useState } from "react";
import type { Direction } from "../prototype-data";

type SessionPlayerProps = {
  direction: Direction;
  minutes: number;
  onBack: () => void;
  onStart: () => void;
};

export function SessionPlayer({ direction, minutes, onBack, onStart }: SessionPlayerProps) {
  const hasVoice = direction.id === "calm" && RUHE_AUDIO_SRC !== null;
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
        <p className="kicker">Work → Evening · {direction.label}</p>
        <h1 tabIndex={-1}>Zwischenraum</h1>
        <p>Ein stiller Schnitt zwischen Arbeit und Abend. Ohne Leistungsziel.</p>
      </div>

      <div className="player-method" data-ready={isCoherencePrototype}>
        <span>{isCoherencePrototype ? "Methoden-Prototyp" : "Player-Prototyp"}</span>
        <strong>{isCoherencePrototype ? "Ankommen · 4 ein / 4 aus · Ausklang" : "Methode wird gemeinsam festgelegt"}</strong>
        <small>
          {isCoherencePrototype
            ? "90 Sekunden ankommen, 17 ruhige Atemzyklen, dann natürlich ausklingen. Du kannst jederzeit natürlich weiteratmen."
            : "Diese Preview prüft Ablauf und Player – sie behauptet noch keine passende Atemmethode."}
        </small>
      </div>

      {detailsOpen && (
        <div className="player-details" id="player-details">
          <strong>Über diesen Prototyp</strong>
          <p>Check-in, Auswahl und Player sind interaktiv. Deine Check-in-Angaben werden nicht gespeichert. {hasVoice ? "Diese Ruhe-Session verwendet Julians Aufnahme." : "Diese Version spielt ohne Stimme."}</p>
        </div>
      )}

      <p className="player-safety">Übe im Sitzen an einem sicheren Ort. Nicht beim Fahren, im Wasser oder bei Aufgaben, die deine volle Aufmerksamkeit brauchen. Atme ohne Druck oder Luftanhalten. Bei Schwindel oder Unwohlsein: aufhören und natürlich atmen. Bei gesundheitlichen Bedenken kläre die Übung vorher ärztlich.</p>
      <div className="player-options"><span>Dauer</span><strong>{minutes} Min.</strong></div>

      <button className="player-start" type="button" onClick={onStart}>
        <span className="play-symbol" aria-hidden="true">▶</span>
        <span><strong>{hasVoice ? "Mit Stimme starten" : "Ohne Stimme starten"}</strong><small>{hasVoice ? "Mit Julian" : "Dein Atem und das Licht"}</small></span>
        <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
