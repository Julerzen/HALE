import { svacDimensions, type SvacValues } from "../prototype-data";

type MatrixProps = {
  activation: number;
  valence: number;
};

export function ActivationValenceMatrix({ activation, valence }: MatrixProps) {
  const left = 8 + valence * 8.4;
  const top = 92 - activation * 8.4;
  const description = `Dein Punkt liegt bei Aktivierung ${activation} von 10 und Erleben ${valence} von 10.`;

  return (
    <figure className="matrix-card">
      <figcaption>
        <span>Activation × Valence</span>
        <strong>Momentaufnahme</strong>
      </figcaption>
      <div className="matrix" role="img" aria-label={description}>
        <span className="matrix-axis matrix-axis-x" aria-hidden="true" />
        <span className="matrix-axis matrix-axis-y" aria-hidden="true" />
        <span className="matrix-label matrix-label-top">viel Energie</span>
        <span className="matrix-label matrix-label-bottom">wenig Energie</span>
        <span className="matrix-label matrix-label-left">unangenehm</span>
        <span className="matrix-label matrix-label-right">angenehm</span>
        <span className="matrix-point" style={{ left: `${left}%`, top: `${top}%` }} aria-hidden="true">
          <i />
        </span>
      </div>
      <p>{description}</p>
    </figure>
  );
}

type RadarProps = {
  values: SvacValues;
};

const center = 100;
const radius = 68;

function pointAt(index: number, value: number) {
  const angle = (Math.PI * 2 * index) / 4 - Math.PI / 2;
  const distance = (value / 10) * radius;
  return `${center + Math.cos(angle) * distance},${center + Math.sin(angle) * distance}`;
}

function gridPoints(level: number) {
  return svacDimensions.map((_, index) => pointAt(index, level)).join(" ");
}

export function SvacRadar({ values }: RadarProps) {
  const valuePoints = svacDimensions.map((dimension, index) => pointAt(index, values[dimension.key])).join(" ");
  const description = svacDimensions.map((dimension) => `${dimension.label} ${values[dimension.key]} von 10`).join(", ");

  return (
    <figure className="radar-card">
      <figcaption>
        <span>SVAC</span>
        <strong>Wie es sich gerade anfühlt</strong>
      </figcaption>
      <svg className="radar" viewBox="0 0 200 200" role="img" aria-label={description}>
        <title>{description}</title>
        {[2.5, 5, 7.5, 10].map((level) => (
          <polygon key={level} points={gridPoints(level)} className="radar-grid" />
        ))}
        <line x1="100" y1="32" x2="100" y2="168" className="radar-axis" />
        <line x1="32" y1="100" x2="168" y2="100" className="radar-axis" />
        <polygon points={valuePoints} className="radar-shape" />
        {svacDimensions.map((dimension, index) => {
          const [x, y] = pointAt(index, values[dimension.key]).split(",");
          return <circle key={dimension.key} cx={x} cy={y} r="3.5" className="radar-point" />;
        })}
        <text x="100" y="18" textAnchor="middle">Sicherheit</text>
        <text x="184" y="104" textAnchor="end">Vitalität</text>
        <text x="100" y="190" textAnchor="middle">Autonomie</text>
        <text x="16" y="104">Verbindung</text>
      </svg>
      <ul className="radar-values" aria-hidden="true">
        {svacDimensions.map((dimension) => (
          <li key={dimension.key}><span>{dimension.short}</span>{values[dimension.key]}</li>
        ))}
      </ul>
    </figure>
  );
}
