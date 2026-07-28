import { AestheticSectionHeader } from "./AestheticSectionHeader";

export type ContentLine = {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  lab?: boolean;
};

type ContentLinesProps = {
  eyebrow: string;
  title: string;
  description: string;
  lines: ContentLine[];
};

export function ContentLines({ eyebrow, title, description, lines }: ContentLinesProps) {
  return (
    <section className="aesthetic-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-lines-grid">
          {lines.map((line) => (
            <article className={`aesthetic-line-card ${line.lab ? "is-lab" : ""}`} key={line.code}>
              <p>{line.code}</p>
              <h3>{line.title}</h3>
              <span>{line.subtitle}</span>
              <strong>{line.description}</strong>
              <div>
                {line.topics.map((topic) => (
                  <em key={topic}>{topic}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
