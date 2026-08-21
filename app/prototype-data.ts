export type DirectionId = "calm" | "clarity" | "activation" | "connection" | "observe";

export type Direction = {
  id: DirectionId;
  label: string;
  eyebrow: string;
  description: string;
  intention: string;
};

export const directions: Direction[] = [
  {
    id: "calm",
    label: "Ruhe",
    eyebrow: "Leiser werden",
    description: "Ich möchte Spannung abgeben und den Tag ausklingen lassen.",
    intention: "sanft regulieren",
  },
  {
    id: "clarity",
    label: "Klarheit",
    eyebrow: "Sortieren",
    description: "Ich möchte wieder wahrnehmen, was jetzt wirklich zählt.",
    intention: "Orientierung finden",
  },
  {
    id: "activation",
    label: "Aktivierung",
    eyebrow: "Wach werden",
    description: "Ich möchte präsent und mit neuer Energie in den Abend gehen.",
    intention: "Energie mobilisieren",
  },
  {
    id: "connection",
    label: "Verbindung",
    eyebrow: "Nähe spüren",
    description: "Ich möchte wieder mehr bei mir und anderen ankommen.",
    intention: "Kontakt ermöglichen",
  },
  {
    id: "observe",
    label: "Nur wahrnehmen",
    eyebrow: "Offen bleiben",
    description: "Ich muss nichts verändern. Ich möchte kurz bemerken, was da ist.",
    intention: "ohne Ziel beobachten",
  },
];

export const svacDimensions = [
  { key: "safety", short: "S", label: "Sicherheit", low: "wenig sicher", high: "sehr sicher" },
  { key: "vitality", short: "V", label: "Vitalität", low: "wenig lebendig", high: "sehr lebendig" },
  { key: "autonomy", short: "A", label: "Autonomie", low: "wenig selbstbestimmt", high: "sehr selbstbestimmt" },
  { key: "connectedness", short: "C", label: "Verbundenheit", low: "wenig verbunden", high: "sehr verbunden" },
] as const;

export type SvacKey = (typeof svacDimensions)[number]["key"];
export type SvacValues = Record<SvacKey, number>;

export const initialSvac: SvacValues = {
  safety: 5,
  vitality: 5,
  autonomy: 5,
  connectedness: 5,
};

export const reflections = ["Etwas ruhiger", "Etwas klarer", "Mehr bei mir", "Unverändert"];

export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}
