import "./CaseFourPdfPresentation.css";

const CASE_FOUR_PRESENTATION_IMAGE =
  "/images/works/aesthetic-intelligence-bureau/presentation/case04-presentation-full.png";

const AESTHETIC_SKILL_REPOSITORY =
  "https://github.com/shiwenwen666-code/visual-dictionary";

export function CaseFourPdfPresentation() {
  return (
    <section
      className="case-four-pdf-presentation"
      id="visual-notes"
      aria-label="审美情报局项目完整静态展示"
    >
      <div className="case-four-pdf-presentation__canvas">
        <img
          className="case-four-pdf-presentation__image"
          src={CASE_FOUR_PRESENTATION_IMAGE}
          alt="审美情报局项目完整静态展示"
          decoding="async"
          loading="lazy"
        />
        <a
          className="case-four-pdf-presentation__skill-link"
          href={AESTHETIC_SKILL_REPOSITORY}
          target="_blank"
          rel="noreferrer"
          aria-label="前往 GitHub 查看审美情报局 Skill"
          title="在 GitHub 查看审美情报局 Skill"
        >
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
