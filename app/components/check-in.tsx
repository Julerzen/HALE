import { svacDimensions, type SvacValues } from "../prototype-data";

type ScaleProps = {
  id: string;
  label: string;
  low: string;
  high: string;
  value: number;
  onChange: (value: number) => void;
};

export function StateScale({ id, label, low, high, value, onChange }: ScaleProps) {
  return (
    <div className="state-scale">
      <div className="state-scale-heading">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id} aria-live="polite">{value}<span>/10</span></output>
      </div>
      <input
        id={id}
        type="range"
        min="0"
        max="10"
        step="1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-valuetext={`${value} von 10, zwischen ${low} und ${high}`}
      />
      <div className="scale-labels" aria-hidden="true">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}

type SvacCheckInProps = {
  values: SvacValues;
  onChange: (key: keyof SvacValues, value: number) => void;
};

export function SvacCheckIn({ values, onChange }: SvacCheckInProps) {
  return (
    <div className="svac-scales">
      {svacDimensions.map((dimension) => (
        <StateScale
          key={dimension.key}
          id={`svac-${dimension.key}`}
          label={dimension.label}
          low={dimension.low}
          high={dimension.high}
          value={values[dimension.key]}
          onChange={(value) => onChange(dimension.key, value)}
        />
      ))}
    </div>
  );
}
