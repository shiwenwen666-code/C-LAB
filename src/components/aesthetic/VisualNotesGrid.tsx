import { AestheticSectionHeader } from "./AestheticSectionHeader";

export type VisualNote = {
  index: string;
  title: string;
  subtitle: string;
  tone: string;
};

type VisualNotesGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  notes: VisualNote[];
};

export function VisualNotesGrid({ id, eyebrow, title, description, notes }: VisualNotesGridProps) {
  return (
    <section className="aesthetic-section" id={id}>
      <div className="aesthetic-inner">
        <AestheticSectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="aesthetic-note-grid">
          {notes.map((note) => (
            <article className="aesthetic-note-card" data-tone={note.tone} key={note.index}>
              <div className="aesthetic-note-media">
                <span>{note.index}</span>
              </div>
              <div className="aesthetic-card-copy">
                <p>{note.index}</p>
                <h3>{note.title}</h3>
                <span>{note.subtitle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
