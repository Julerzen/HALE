type HaleApertureProps = {
  className?: string;
  isPlaying?: boolean;
  isCoherencePrototype?: boolean;
  expansion?: number;
  phase?: "Einatmen" | "Ausatmen";
};

export function HaleAperture({
  className = "",
  isPlaying = true,
  isCoherencePrototype = false,
  phase = "Einatmen",
  expansion,
}: HaleApertureProps) {
  const classes = ["hale-aperture", className].filter(Boolean).join(" ");

  const amount = expansion === undefined ? undefined : Math.min(1, Math.max(0, expansion));

  return (
    <div
      className={classes}
      data-playing={isPlaying}
      data-coherence={isCoherencePrototype}
      data-phase={phase}
      aria-hidden="true"
    >
      <span className="aperture-side aperture-left" style={amount === undefined ? undefined : { transform: `translateX(${8 - 16 * amount}px) scaleX(${0.92 + 0.16 * amount})` }} />
      <span className="aperture-core" style={amount === undefined ? undefined : { opacity: 0.58 + 0.42 * amount, transform: `scaleY(${0.84 + 0.16 * amount})` }} />
      <span className="aperture-side aperture-right" style={amount === undefined ? undefined : { transform: `translateX(${-8 + 16 * amount}px) scaleX(${0.92 + 0.16 * amount})` }} />
    </div>
  );
}
