import "./CaseOneFigmaPresentation.css";

const FIGMA_FRAME = {
  width: 1935,
  height: 17756,
  gifs: [
    {
      src: "asset-17.webp",
      x: 126,
      y: 14464,
      width: 835,
      height: 1115,
    },
    {
      src: "asset-18.webp",
      x: 1390,
      y: 13084,
      width: 430,
      height: 574,
    },
  ],
};

const asset = (name: string) => `/images/works/alibaba-social/figma/${name}`;

/**
 * Case 01 is intentionally rendered as the original full Figma composition.
 * The imported GIF is placed over the matching Figma region so the long image
 * keeps its exact visual layout while that one animated area remains live.
 */
export function CaseOneFigmaPresentation() {
  const { width, height, gifs } = FIGMA_FRAME;

  return (
    <article className="case-one-figma-presentation" aria-label="Alibaba.com social visual system presentation">
      <div className="case-one-figma-presentation__canvas">
        <img
          className="case-one-figma-presentation__long-image"
          src={asset("case01-presentation-full.jpg")}
          alt="Alibaba.com social visual system upgrade case presentation"
          decoding="async"
          fetchPriority="high"
        />

        {gifs.map((gif) => (
          <div
            key={gif.src}
            className="case-one-figma-presentation__gif-anchor"
            aria-hidden="true"
            style={{
              left: `${(gif.x / width) * 100}%`,
              top: `${(gif.y / height) * 100}%`,
              width: `${(gif.width / width) * 100}%`,
              height: `${(gif.height / height) * 100}%`,
            }}
          >
            <img src={asset(gif.src)} alt="" decoding="async" />
          </div>
        ))}
      </div>
    </article>
  );
}
