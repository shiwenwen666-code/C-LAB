import "./CaseThreePdfPresentation.css";

const CASE_THREE_PRESENTATION_IMAGE =
  "/images/works/aigc-advertising/presentation/case03-presentation-full.webp";

const CASE_THREE_GIFS = {
  hero: "/images/works/aigc-advertising/gifs/1.webp",
  productScene: "/images/works/aigc-advertising/gifs/2.webp",
};

export function CaseThreePdfPresentation() {
  return (
    <article
      className="case-three-pdf-presentation"
      aria-label="AIGC advertising project presentation"
    >
      <div className="case-three-pdf-presentation__stage">
        <img
          className="case-three-pdf-presentation__image"
          src={CASE_THREE_PRESENTATION_IMAGE}
          alt="AIGC advertising project presentation"
          decoding="async"
          fetchPriority="high"
        />

        <img
          className="case-three-pdf-presentation__gif is-hero"
          src={CASE_THREE_GIFS.hero}
          alt="AIGC 广告首页动态展示"
          decoding="async"
        />
        <img
          className="case-three-pdf-presentation__gif is-product-scene"
          src={CASE_THREE_GIFS.productScene}
          alt="AIGC 工具箱产品场景动态展示"
          loading="lazy"
          decoding="async"
        />

        <a
          className="case-three-pdf-presentation__tool-link is-cyan-lab"
          href="https://shiwenwen666-code.github.io/Cyan-lab/"
          target="_blank"
          rel="noreferrer"
          aria-label="打开 Cyan Lab 在线工具"
        >
          <span>LIVE TOOL</span>
        </a>
        <a
          className="case-three-pdf-presentation__tool-link is-visual-qa"
          href="https://github.com/shiwenwen666-code/Visual-QA-Board"
          target="_blank"
          rel="noreferrer"
          aria-label="打开 Visual QA Board GitHub 项目"
        >
          <span>LIVE TOOL</span>
        </a>
      </div>
    </article>
  );
}
