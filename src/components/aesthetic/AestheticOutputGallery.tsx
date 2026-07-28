import { AestheticSectionHeader } from "./AestheticSectionHeader";

type AestheticOutput = {
  type: string;
  title: string;
  description: string;
  ratio: string;
};

type AestheticOutputGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  outputs: AestheticOutput[];
};

export function AestheticOutputGallery({ eyebrow, title, description, outputs }: AestheticOutputGalleryProps) {
  return (
    <section className="aesthetic-section aesthetic-output-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-output-grid">
          {outputs.map((output) => (
            <article className="aesthetic-output-card" data-ratio={output.ratio} key={output.title}>
              <div className="aesthetic-output-media">
                <span>{output.type}</span>
              </div>
              <div>
                <p>{output.type}</p>
                <h3>{output.title}</h3>
                <span>{output.description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
