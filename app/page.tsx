"use client";

import { useEffect, useMemo, useState } from "react";

type Stage = "arrival" | "session" | "reflection";
type Direction = "calm" | "clarity" | "energy";

const directions: Array<{
  id: Direction;
  label: string;
  eyebrow: string;
  description: string;
  rhythm: string;
  cue: string;
}> = [
  {
    id: "calm",
    label: "Ruhe",
    eyebrow: "Loslassen",
    description: "Ich möchte den Arbeitstag leiser werden lassen.",
    rhythm: "4 ein · 6 aus",
    cue: "Lass die Ausatmung etwas länger werden. Ohne Druck.",
  },
  {
    id: "clarity",
    label: "Klarheit",
    eyebrow: "Ankommen",
    description: "Ich möchte wieder wahrnehmen, was ich jetzt brauche.",
    rhythm: "4 ein · 4 aus",
    cue: "Atme gleichmäßig. Spüre den Moment zwischen den Aufgaben.",
  },
  {
    id: "energy",
    label: "Energie",
    eyebrow: "Ausrichten",
    description: "Ich möchte bewusst und wach in den Abend gehen.",
    rhythm: "4 ein · 4 aus",
    cue: "Richte dich auf. Atme ruhig, präsent und ohne zu forcieren.",
  },
];

const reflections = ["Ruhiger", "Klarer", "Verbundener", "Noch gleich"];

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

export default function Home() {
  const [stage, setStage] = useState<Stage>("arrival");
  const [direction, setDirection] = useState<Direction>("calm");
  const [minutes, setMinutes] = useState(10);
  const [remainingSeconds, setRemainingSeconds] = useState(600);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reflection, setReflection] = useState<string | null>(null);

  const activeDirection = useMemo(
    () => directions.find((item) => item.id === direction) ?? directions[0],
    [direction],
  );

  const elapsed = minutes * 60 - remainingSeconds;
  const cyclePosition = ((elapsed % 10) + 10) % 10;
  const breathPhase = cyclePosition < 4 ? "Einatmen" : "Ausatmen";

  useEffect(() => {
    if (!isPlaying || stage !== "session" || remainingSeconds <= 0) return;
    const timer = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isPlaying, remainingSeconds, stage]);

  useEffect(() => {
    if (stage === "session" && remainingSeconds === 0) {
      setIsPlaying(false);
      setStage("reflection");
    }
  }, [remainingSeconds, stage]);

  function beginSession() {
    setRemainingSeconds(minutes * 60);
    setIsPlaying(true);
    setReflection(null);
    setStage("session");
  }

  function finishSession() {
    setIsPlaying(false);
    setStage("reflection");
  }

  function restart() {
    setStage("arrival");
    setIsPlaying(false);
    setRemainingSeconds(minutes * 60);
    setReflection(null);
  }

  return (
    <main className="prototype-shell">
      <section className="device" aria-label="HALE Work to Evening Prototyp">
        <header className="topbar">
          <button className="wordmark" type="button" onClick={restart}>HALE</button>
          <span className="prototype-badge">Prototype 0.1</span>
        </header>

        {stage === "arrival" && (
          <div className="screen arrival-screen">
            <div className="intro">
              <p className="kicker">Work → Evening</p>
              <h1>Der Arbeitstag ist vorbei. Wie möchtest du in deinen Abend gehen?</h1>
              <p className="lead">Kein weiterer Punkt auf deiner Liste. Zehn Minuten zwischen dem, was war, und dem, was jetzt beginnt.</p>
            </div>

            <fieldset className="choice-group">
              <legend>Was brauchst du gerade?</legend>
              <div className="direction-grid">
                {directions.map((item, index) => (
                  <button
                    className="direction-card"
                    data-selected={direction === item.id}
                    key={item.id}
                    onClick={() => setDirection(item.id)}
                    type="button"
                    aria-pressed={direction === item.id}
                  >
                    <span className="direction-index">0{index + 1}</span>
                    <span className="direction-eyebrow">{item.eyebrow}</span>
                    <strong>{item.label}</strong>
                    <small>{item.description}</small>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="duration-row">
              <span>Zeit</span>
              <div className="segmented" aria-label="Dauer auswählen">
                {[5, 10].map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    data-selected={minutes === duration}
                    aria-pressed={minutes === duration}
                    onClick={() => setMinutes(duration)}
                  >
                    {duration} Min
                  </button>
                ))}
              </div>
            </div>

            <button className="primary-action" type="button" onClick={beginSession}>
              Übergang beginnen <span aria-hidden="true">↗</span>
            </button>
            <p className="microcopy">Atme immer angenehm. Pausiere, wenn dir unwohl oder schwindelig wird.</p>
          </div>
        )}

        {stage === "session" && (
          <div className="screen session-screen">
            <div className="session-meta">
              <div>
                <p className="kicker">Work → Evening · {activeDirection.label}</p>
                <h1>Zwischenraum</h1>
              </div>
              <span className="timer" aria-label={`${formatTime(remainingSeconds)} verbleibend`}>
                {formatTime(remainingSeconds)}
              </span>
            </div>

            <div className="breath-space" aria-live="polite">
              <div className="breath-orb" data-playing={isPlaying} data-phase={breathPhase}>
                <span>{breathPhase}</span>
              </div>
              <p className="rhythm">{activeDirection.rhythm}</p>
              <p className="breath-cue">{activeDirection.cue}</p>
            </div>

            <div className="audio-strip">
              <span className="audio-mark" aria-hidden="true"><i /><i /><i /><i /></span>
              <span><small>Audio mood</small>Original pulse · coming next</span>
              <button type="button" aria-label="Audio ist im Prototyp noch nicht verfügbar">—</button>
            </div>

            <div className="session-controls">
              <button className="secondary-action" type="button" onClick={() => setIsPlaying((current) => !current)}>
                {isPlaying ? "Pausieren" : "Fortsetzen"}
              </button>
              <button className="text-action" type="button" onClick={finishSession}>Demo abschließen</button>
            </div>
          </div>
        )}

        {stage === "reflection" && (
          <div className="screen reflection-screen">
            <div className="completion-mark" aria-hidden="true"><span /></div>
            <p className="kicker">Der Abend beginnt</p>
            <h1>Was ist jetzt anders?</h1>
            <p className="lead">Es gibt keine richtige Antwort. Nimm nur kurz wahr, was gerade da ist.</p>

            <div className="reflection-grid" role="group" aria-label="Veränderung auswählen">
              {reflections.map((item) => (
                <button
                  type="button"
                  key={item}
                  data-selected={reflection === item}
                  aria-pressed={reflection === item}
                  onClick={() => setReflection(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="closing-note">
              <span>Für jetzt</span>
              <p>Du musst den Abend nicht optimieren. Du kannst ihn wahrnehmen und dann entscheiden.</p>
            </div>

            <button className="primary-action" type="button" onClick={restart}>
              Abend beginnen <span aria-hidden="true">→</span>
            </button>
          </div>
        )}

        <footer className="bottom-note"><span>HALE / 2026</span><span>Feel what follows.</span></footer>
      </section>
    </main>
  );
}
