import { AestheticSectionHeader } from "./AestheticSectionHeader";

type AestheticOriginProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  insight: string;
};

export function AestheticOrigin({ eyebrow, title, description, steps, insight }: AestheticOriginProps) {
  return (
    <section className="aesthetic-section aesthetic-origin-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-origin-panel">
          <div className="aesthetic-origin-chain">
            {steps.map((step, index) => (
              <div className="aesthetic-origin-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <p>{insight}</p>
        </div>
      </div>
    </section>
  );
}
