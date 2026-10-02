"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { StateScale, SvacCheckIn } from "./components/check-in";
import { HaleAperture } from "./components/hale-aperture";
import { PracticePlayer } from "./components/practice-player";
import { SessionPlayer } from "./components/session-player";
import { ActivationValenceMatrix, SvacRadar } from "./components/state-visuals";
import {
  directions,
  initialSvac,
  reflections,
  type DirectionId,
  type SvacKey,
  type SvacValues,
} from "./prototype-data";

type Stage =
  | "opening"
  | "checkin-intro"
  | "activation"
  | "valence"
  | "svac"
  | "snapshot"
  | "direction"
  | "overview"
  | "player"
  | "practice"
  | "reflection";

const progressByStage: Partial<Record<Stage, number>> = {
  activation: 1,
  valence: 2,
  svac: 3,
  snapshot: 4,
};

export default function Home() {
  const [stage, setStage] = useState<Stage>("opening");
  const [showPrelude, setShowPrelude] = useState(true);
  const [openingLeaving, setOpeningLeaving] = useState(false);
  const [activation, setActivation] = useState(5);
  const [valence, setValence] = useState(5);
  const [svac, setSvac] = useState<SvacValues>(initialSvac);
  const [checkInCompleted, setCheckInCompleted] = useState(false);
  const [direction, setDirection] = useState<DirectionId>("calm");
  const minutes = 5;
  const deviceRef = useRef<HTMLElement>(null);
  const [reflection, setReflection] = useState<string | null>(null);

  const activeDirection = useMemo(
    () => directions.find((item) => item.id === direction) ?? directions[0],
    [direction],
  );
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const preludeTimer = window.setTimeout(
      () => setShowPrelude(false),
      reducedMotion ? 650 : 3400,
    );

    return () => window.clearTimeout(preludeTimer);
  }, []);

  useEffect(() => {
    if (showPrelude) return;
    const heading = deviceRef.current?.querySelector<HTMLElement>("h1");
    heading?.focus({ preventScroll: true });
    deviceRef.current?.querySelector(".screen")?.scrollTo(0, 0);
  }, [stage, showPrelude]);

  function enterPrototype() {
    setOpeningLeaving(true);
    window.setTimeout(() => {
      setStage("checkin-intro");
      setOpeningLeaving(false);
    }, 650);
  }

  function updateSvac(key: SvacKey, value: number) {
    setSvac((current) => ({ ...current, [key]: value }));
  }

  function completeCheckIn() {
    setCheckInCompleted(true);
    setStage("snapshot");
  }

  function skipCheckIn() {
    setCheckInCompleted(false);
    setActivation(5);
    setValence(5);
    setSvac({ ...initialSvac });
    setStage("direction");
  }

  function beginPractice() {
    setReflection(null);
    setStage("practice");
  }

  function finishPractice() {
    setStage("reflection");
  }

  function restart() {
    setStage("opening");
    setOpeningLeaving(false);
    setActivation(5);
    setValence(5);
    setSvac({ ...initialSvac });
    setCheckInCompleted(false);
    setDirection("calm");
    setReflection(null);
  }

  const progress = progressByStage[stage];

  return (
    <main className="prototype-shell">
      <section ref={deviceRef} className="device" aria-label="HALE Work to Evening Prototyp v0.3.1">
        {stage !== "opening" && stage !== "player" && stage !== "practice" && (
          <header className="topbar">
            <button className="wordmark" type="button" onClick={restart} aria-label="HALE Startseite">HALE</button>
            <span className="prototype-badge">Prototype 0.3.1</span>
          </header>
        )}

        {stage === "opening" && (
          <div
            className="opening-screen"
            data-leaving={openingLeaving}
            aria-hidden={showPrelude ? true : undefined}
          >
            <div className="opening-atmosphere" aria-hidden="true">
              <span className="atmosphere-field field-one" />
              <span className="atmosphere-field field-two" />
              <span className="atmosphere-grain" />
            </div>
            <div className="opening-brand">
              <p>17:00 · Zwischen den Rollen</p>
              <h1 tabIndex={-1}>HALE</h1>
            </div>
            <div className="aperture-space">
              <div className="pulse-field" aria-hidden="true"><i /><i /><i /></div>
              <HaleAperture />
              <p>Einatmen. Ausatmen.<br />Dazwischen beginnt dein Abend.</p>
            </div>
            <div className="opening-entry">
              <button type="button" onClick={enterPrototype} disabled={openingLeaving || showPrelude}>
                {openingLeaving ? "Der Raum öffnet sich" : "In den Zwischenraum"}<span aria-hidden="true">→</span>
              </button>
              <small>Original Sound Atmosphere folgt</small>
            </div>
          </div>
        )}

        {stage === "opening" && showPrelude && (
          <div className="prelude-screen" role="status" aria-live="polite">
            <span className="sr-only">HALE öffnet sich.</span>
            <div className="prelude-architecture" aria-hidden="true">
              <span className="prelude-plane prelude-plane-left" />
              <span className="prelude-plane prelude-plane-right" />
              <span className="prelude-horizon" />
              <span className="prelude-floor" />
            </div>
            <div className="prelude-camera" aria-hidden="true">
              <HaleAperture className="prelude-hale-aperture" />
            </div>
          </div>
        )}

        {stage === "checkin-intro" && (
          <div className="screen checkin-intro-screen">
            <div className="material-orbit" aria-hidden="true"><span /><i /></div>
            <p className="kicker">Optionaler Check-in · ca. 45 Sek.</p>
            <h1 tabIndex={-1}>Wo bist du gerade?</h1>
            <p className="lead">Eine kurze Momentaufnahme kann dir helfen, die passende Richtung zu wählen. Sie bewertet nichts und wird nicht gespeichert.</p>
            <div className="privacy-note">
              <span aria-hidden="true">◎</span>
              <p><strong>Nur für diesen Moment</strong>Deine Angaben bleiben nur in diesem Durchlauf. Neustart oder Neuladen verwirft sie.</p>
            </div>
            <div className="screen-actions push-bottom">
              <button className="primary-action" type="button" onClick={() => setStage("activation")}>Zustand einordnen <span aria-hidden="true">→</span></button>
              <button className="text-action" type="button" onClick={skipCheckIn}>Ohne Check-in weiter</button>
            </div>
          </div>
        )}

        {progress && (
          <div className="checkin-progress" aria-label={`Check-in Schritt ${progress} von 4`}>
            <div>{[1, 2, 3, 4].map((step) => <span key={step} data-active={step <= progress} />)}</div>
            <small>{progress}/4</small>
          </div>
        )}

        {stage === "activation" && (
          <div className="screen scale-screen">
            <p className="kicker">Activation</p>
            <h1 tabIndex={-1}>Wie viel Energie ist gerade da?</h1>
            <p className="lead">Nicht gut oder schlecht – nur wenig oder viel Aktivierung in diesem Moment.</p>
            <div className="single-scale-wrap">
              <StateScale id="activation" label="Aktivierung" low="sehr wenig" high="sehr viel" value={activation} onChange={setActivation} />
            </div>
            <div className="screen-actions push-bottom split-actions">
              <button className="secondary-action" type="button" onClick={() => setStage("checkin-intro")}>Zurück</button>
              <button className="primary-action" type="button" onClick={() => setStage("valence")}>Weiter <span aria-hidden="true">→</span></button>
            </div>
            <button className="text-action" type="button" onClick={skipCheckIn}>Check-in überspringen</button>
          </div>
        )}

        {stage === "valence" && (
          <div className="screen scale-screen">
            <p className="kicker">Valence</p>
            <h1 tabIndex={-1}>Wie fühlt sich dieser Moment an?</h1>
            <p className="lead">Auch hier gibt es keine richtige Antwort. Ordne nur dein gegenwärtiges Erleben ein.</p>
            <div className="single-scale-wrap">
              <StateScale id="valence" label="Erleben" low="sehr unangenehm" high="sehr angenehm" value={valence} onChange={setValence} />
            </div>
            <div className="screen-actions push-bottom split-actions">
              <button className="secondary-action" type="button" onClick={() => setStage("activation")}>Zurück</button>
              <button className="primary-action" type="button" onClick={() => setStage("svac")}>Weiter <span aria-hidden="true">→</span></button>
            </div>
            <button className="text-action" type="button" onClick={skipCheckIn}>Check-in überspringen</button>
          </div>
        )}

        {stage === "svac" && (
          <div className="screen svac-screen">
            <p className="kicker">SVAC · vier Perspektiven</p>
            <h1 tabIndex={-1}>Was ist gerade spürbar?</h1>
            <p className="lead">Eine grobe Einschätzung reicht. Du kannst jede Angabe jederzeit verändern.</p>
            <SvacCheckIn values={svac} onChange={updateSvac} />
            <div className="screen-actions split-actions">
              <button className="secondary-action" type="button" onClick={() => setStage("valence")}>Zurück</button>
              <button className="primary-action" type="button" onClick={completeCheckIn}>Moment ansehen <span aria-hidden="true">→</span></button>
            </div>
            <button className="text-action" type="button" onClick={skipCheckIn}>Check-in überspringen</button>
          </div>
        )}

        {stage === "snapshot" && (
          <div className="screen snapshot-screen">
            <p className="kicker">Dein Check-in</p>
            <h1 tabIndex={-1}>So ist es gerade.</h1>
            <p className="lead">Keine Diagnose und kein Ergebnis. Zwei Ansichten auf denselben Moment.</p>
            <div className="visual-stack">
              <ActivationValenceMatrix activation={activation} valence={valence} />
              <SvacRadar values={svac} />
            </div>
            <div className="screen-actions split-actions">
              <button className="secondary-action" type="button" onClick={() => setStage("svac")}>Anpassen</button>
              <button className="primary-action" type="button" onClick={() => setStage("direction")}>Richtung wählen <span aria-hidden="true">→</span></button>
            </div>
          </div>
        )}

        {stage === "direction" && (
          <div className="screen direction-screen">
            <p className="kicker">Deine Richtung</p>
            <h1 tabIndex={-1}>Wie möchtest du in den Abend gehen?</h1>
            <p className="lead">Wähle eine Absicht, nicht die „richtige“ Lösung.</p>
            {checkInCompleted && <button className="snapshot-link" type="button" onClick={() => setStage("snapshot")}><span>Deine Momentaufnahme</span><strong>{activation}/10 Energie · {valence}/10 Erleben</strong><i aria-hidden="true">↗</i></button>}
            <div className="direction-list" role="group" aria-label="Gewünschte Richtung">
              {directions.map((item, index) => (
                <button key={item.id} type="button" data-selected={direction === item.id} aria-pressed={direction === item.id} onClick={() => setDirection(item.id)}>
                  <span className="direction-index">0{index + 1}</span>
                  <span><small>{item.eyebrow}</small><strong>{item.label}</strong><span className="direction-description">{item.description}</span></span>
                  <i aria-hidden="true">{direction === item.id ? "●" : "○"}</i>
                </button>
              ))}
            </div>
            <button className="primary-action" type="button" onClick={() => setStage("overview")}>Passende Räume ansehen <span aria-hidden="true">→</span></button>
          </div>
        )}

        {stage === "overview" && (
          <div className="screen overview-screen">
            <div className="overview-heading">
              <div><p className="kicker">Für deinen Übergang</p><h1 tabIndex={-1}>Ein Raum für {activeDirection.label}.</h1></div>
              <button className="text-action" type="button" onClick={() => setStage("direction")}>Ändern</button>
            </div>
            <button className="featured-session" type="button" onClick={() => setStage("player")}>
              <span className="session-art" aria-hidden="true"><i /><i /><i /></span>
              <span className="session-card-copy">
                <small>HALE Original · {minutes} Min.</small>
                <strong>Zwischenraum</strong>
                <span className="session-description">Vom Arbeitsmodus in einen offenen Abend.</span>
                <span>{activeDirection.intention}<i aria-hidden="true">→</i></span>
              </span>
            </button>
            <section className="curation-note">
              <p className="kicker">Warum dieser Raum?</p>
              <h2>Deine Richtung gibt den Ton an.</h2>
              <p>{direction === "calm" ? "Für Ruhe testen wir eine gleichmäßige Kohärenz-Atmung als vorläufige Methode." : `Für ${activeDirection.label} ist die spezifische Methode bewusst noch offen. In dieser Version prüfen wir gemeinsam Navigation, Atmosphäre und Player.`}</p>
            </section>
            <div className="availability-row"><span>Jetzt verfügbar</span><strong>1 Prototyp-Session</strong><small>Weitere Räume folgen erst nach deiner Abnahme.</small></div>
          </div>
        )}

        {stage === "player" && (
          <SessionPlayer direction={activeDirection} minutes={minutes} onBack={() => setStage("overview")} onStart={beginPractice} />
        )}

        {stage === "practice" && (
          <PracticePlayer
            direction={activeDirection}
            minutes={minutes}
            onFinish={finishPractice}
          />
        )}

        {stage === "reflection" && (
          <div className="screen reflection-screen">
            <div className="completion-mark" aria-hidden="true"><span /></div>
            <p className="kicker">Der Abend beginnt</p>
            <h1 tabIndex={-1}>Was ist jetzt anders?</h1>
            <p className="lead">Es gibt keine richtige Antwort. Nimm nur kurz wahr, was gerade da ist.</p>
            <div className="reflection-grid" role="group" aria-label="Veränderung auswählen">
              {reflections.map((item) => <button type="button" key={item} data-selected={reflection === item} aria-pressed={reflection === item} onClick={() => setReflection(item)}>{item}</button>)}
            </div>
            <div className="closing-note"><span>Für jetzt</span><p>Du musst den Abend nicht optimieren. Du kannst ihn wahrnehmen und dann entscheiden.</p></div>
            <button className="primary-action" type="button" onClick={restart}>Abend beginnen <span aria-hidden="true">→</span></button>
          </div>
        )}

        {stage !== "opening" && stage !== "player" && stage !== "practice" && (
          <footer className="bottom-note"><span>HALE / 2026</span><span>Feel what follows.</span></footer>
        )}
      </section>
    </main>
  );
}
