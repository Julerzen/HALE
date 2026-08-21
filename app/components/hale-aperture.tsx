type HaleApertureProps = {
  className?: string;
  isPlaying?: boolean;
  isCoherencePrototype?: boolean;
  phase?: "Einatmen" | "Ausatmen";
};

export function HaleAperture({
  className = "",
  isPlaying = true,
  isCoherencePrototype = false,
  phase = "Einatmen",
}: HaleApertureProps) {
  const classes = ["hale-aperture", className].filter(Boolean).join(" ");

  return (
    <div
      className={classes}
      data-playing={isPlaying}
      data-coherence={isCoherencePrototype}
      data-phase={phase}
      aria-hidden="true"
    >
      <span className="aperture-side aperture-left" />
      <span className="aperture-core" />
      <span className="aperture-side aperture-right" />
    </div>
  );
}
