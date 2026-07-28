import { AestheticSectionHeader } from "./AestheticSectionHeader";

type AestheticProductionSkillProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  highlight: string;
};

export function AestheticProductionSkill({ eyebrow, title, description, steps, highlight }: AestheticProductionSkillProps) {
  return (
    <section className="aesthetic-section aesthetic-production-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-production-panel">
          <div className="aesthetic-production-flow">
            {steps.map((step, index) => (
              <div className="aesthetic-production-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <p>{highlight}</p>
        </div>
      </div>
    </section>
  );
}
