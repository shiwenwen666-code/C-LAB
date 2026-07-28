import { AestheticSectionHeader } from "./AestheticSectionHeader";

export type AestheticShort = {
  episode: string;
  title: string;
  caption: string;
};

type ShortsGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  shorts: AestheticShort[];
};

export function ShortsGrid({ eyebrow, title, description, shorts }: ShortsGridProps) {
  return (
    <section className="aesthetic-section">
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-shorts-grid">
          {shorts.map((short) => (
            <article className="aesthetic-short-card" key={short.episode}>
              <div className="aesthetic-short-thumb">
                <span>{short.episode}</span>
                <i aria-hidden="true">play</i>
              </div>
              <div>
                <h3>{short.title}</h3>
                <p>{short.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
