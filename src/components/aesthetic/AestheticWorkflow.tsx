import { AestheticSectionHeader } from "./AestheticSectionHeader";

export type AestheticWorkflowStep = {
  number: string;
  title: string;
  subtitle: string;
};

type AestheticWorkflowProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: AestheticWorkflowStep[];
};

export function AestheticWorkflow({ eyebrow, title, description, steps }: AestheticWorkflowProps) {
  return (
    <section className="aesthetic-section aesthetic-workflow-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-workflow-orbit">
          <div className="aesthetic-workflow-core">
            <span>System</span>
            <strong>审美判断</strong>
          </div>
          {steps.map((step, index) => (
            <article className="aesthetic-workflow-node" data-index={index} key={step.number}>
              <p>{step.number}</p>
              <h3>{step.title}</h3>
              <span>{step.subtitle}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
