import "./CaseTwoPdfPresentation.css";

const CASE_TWO_PRESENTATION_IMAGE =
  "/images/works/new-power-awards/presentation/case02-presentation-full.png";

export function CaseTwoPdfPresentation() {
  return (
    <article
      className="case-two-pdf-presentation"
      aria-label="阿里国际站数字外贸真牛奖 2025 项目完整展示"
    >
      <img
        className="case-two-pdf-presentation__image"
        src={CASE_TWO_PRESENTATION_IMAGE}
        alt="阿里国际站数字外贸真牛奖 2025 项目完整展示"
        decoding="async"
        fetchPriority="high"
      />
    </article>
  );
}
