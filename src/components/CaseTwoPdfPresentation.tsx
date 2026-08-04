import "./CaseTwoPdfPresentation.css";

const CASE_TWO_PRESENTATION_IMAGE =
  "/images/works/new-power-awards/presentation/case02-presentation-full.png";

const CASE_TWO_GIFS = {
  hero: "/images/works/new-power-awards/gifs/1.gif",
  portrait: "/images/works/new-power-awards/gifs/2.gif",
  projectionBottom: "/images/works/new-power-awards/gifs/3.gif",
  projectionTop: "/images/works/new-power-awards/gifs/4.gif",
};

export function CaseTwoPdfPresentation() {
  return (
    <article
      className="case-two-pdf-presentation"
      aria-label="阿里国际站数字外贸真牛奖 2025 项目完整展示"
    >
      <div className="case-two-pdf-presentation__stage">
        <img
          className="case-two-pdf-presentation__image"
          src={CASE_TWO_PRESENTATION_IMAGE}
          alt="阿里国际站数字外贸真牛奖 2025 项目完整展示"
          decoding="async"
          fetchPriority="high"
        />

        <img
          className="case-two-pdf-presentation__gif is-hero"
          src={CASE_TWO_GIFS.hero}
          alt="真牛奖主视觉动态展示"
          decoding="async"
        />
        <img
          className="case-two-pdf-presentation__gif is-portrait"
          src={CASE_TWO_GIFS.portrait}
          alt="AI 数字人物动态展示"
          loading="lazy"
          decoding="async"
        />
        <img
          className="case-two-pdf-presentation__gif is-projection-top"
          src={CASE_TWO_GIFS.projectionTop}
          alt="真牛奖投屏动画展示一"
          loading="lazy"
          decoding="async"
        />
        <img
          className="case-two-pdf-presentation__gif is-projection-bottom"
          src={CASE_TWO_GIFS.projectionBottom}
          alt="真牛奖投屏动画展示二"
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  );
}
