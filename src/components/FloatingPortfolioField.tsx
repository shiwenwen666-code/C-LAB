import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, type CSSProperties } from "react";

type FragmentLayer = "background" | "mid" | "foreground";

type FloatingFragment = {
  id: string;
  x: number;
  y: number;
  width: number;
  ratio: number;
  depth: number;
  speed: number;
  driftX: number;
  opacityBase: number;
  scaleBase: number;
  blurBase: number;
  rotate: number;
  layer: FragmentLayer;
  palette: number;
};

type FragmentStyle = CSSProperties & {
  "--fragment-bg": string;
  "--fragment-ratio": string;
};

const realImageModules = import.meta.glob("../assets/floating/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const realImages = Object.entries(realImageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 36);

const fallbackImages = [
  "/images/works/work-01.svg",
  "/images/works/work-02.svg",
  "/images/works/work-03.svg",
  "/images/works/work-04.svg",
  "/images/works/work-05.svg",
  "/images/works/work-06.svg",
];

const placeholders = [
  "linear-gradient(135deg, #e9e2d5 0%, #bfc9c8 42%, #51636b 100%)",
  "linear-gradient(150deg, #182022 0%, #4f6570 48%, #d6ded6 100%)",
  "linear-gradient(135deg, #f0eadf 0%, #d3ded8 36%, #7c9da7 100%)",
  "linear-gradient(145deg, #22282b 0%, #6a7d80 52%, #efe9d8 100%)",
  "linear-gradient(135deg, #d8e5e2 0%, #b7bfb6 48%, #354147 100%)",
  "linear-gradient(145deg, #f4eee4 0%, #c8d1c9 42%, #718995 100%)",
  "linear-gradient(135deg, #121716 0%, #475960 50%, #cbd7d2 100%)",
  "linear-gradient(150deg, #e5dccf 0%, #95aeb5 44%, #263038 100%)",
];

const fragments: FloatingFragment[] = [
  { id: "f01", x: 6, y: -48, width: 12, ratio: 1, depth: 0.55, speed: 0.62, driftX: -26, opacityBase: 0.2, scaleBase: 0.82, blurBase: 2.6, rotate: -3, layer: "background", palette: 0 },
  { id: "f02", x: 18, y: -22, width: 10, ratio: 0.8, depth: 0.72, speed: 0.8, driftX: 18, opacityBase: 0.34, scaleBase: 0.9, blurBase: 2.1, rotate: 2, layer: "mid", palette: 1 },
  { id: "f03", x: 39, y: -56, width: 8, ratio: 1.5, depth: 0.44, speed: 0.58, driftX: -18, opacityBase: 0.18, scaleBase: 0.78, blurBase: 3, rotate: -2, layer: "background", palette: 2 },
  { id: "f04", x: 61, y: -18, width: 13, ratio: 1, depth: 0.92, speed: 1.02, driftX: 24, opacityBase: 0.5, scaleBase: 0.98, blurBase: 1.2, rotate: -4, layer: "foreground", palette: 3 },
  { id: "f05", x: 82, y: -38, width: 9, ratio: 1.78, depth: 0.56, speed: 0.7, driftX: -20, opacityBase: 0.24, scaleBase: 0.82, blurBase: 2.5, rotate: 3, layer: "background", palette: 4 },
  { id: "f06", x: 101, y: -12, width: 12, ratio: 1, depth: 0.78, speed: 0.86, driftX: -22, opacityBase: 0.38, scaleBase: 0.9, blurBase: 1.7, rotate: -2, layer: "mid", palette: 5 },
  { id: "f07", x: -4, y: 12, width: 15, ratio: 1.5, depth: 1.08, speed: 1.14, driftX: 28, opacityBase: 0.56, scaleBase: 0.98, blurBase: 0.8, rotate: 2, layer: "foreground", palette: 6 },
  { id: "f08", x: 27, y: 20, width: 7, ratio: 0.67, depth: 0.42, speed: 0.54, driftX: 12, opacityBase: 0.16, scaleBase: 0.76, blurBase: 3, rotate: 4, layer: "background", palette: 7 },
  { id: "f09", x: 47, y: 12, width: 10, ratio: 1, depth: 0.7, speed: 0.76, driftX: -16, opacityBase: 0.34, scaleBase: 0.86, blurBase: 2, rotate: -2, layer: "mid", palette: 0 },
  { id: "f10", x: 74, y: 28, width: 8, ratio: 0.8, depth: 0.54, speed: 0.64, driftX: 18, opacityBase: 0.2, scaleBase: 0.8, blurBase: 2.8, rotate: 3, layer: "background", palette: 1 },
  { id: "f11", x: 90, y: 16, width: 13, ratio: 1, depth: 0.86, speed: 0.94, driftX: -20, opacityBase: 0.44, scaleBase: 0.94, blurBase: 1.4, rotate: -3, layer: "mid", palette: 2 },
  { id: "f12", x: 13, y: 52, width: 9, ratio: 1.78, depth: 0.5, speed: 0.66, driftX: -14, opacityBase: 0.2, scaleBase: 0.8, blurBase: 2.8, rotate: -2, layer: "background", palette: 3 },
  { id: "f13", x: 32, y: 58, width: 14, ratio: 1, depth: 1.12, speed: 1.18, driftX: 24, opacityBase: 0.6, scaleBase: 1, blurBase: 0.6, rotate: 3, layer: "foreground", palette: 4 },
  { id: "f14", x: 57, y: 48, width: 8, ratio: 0.67, depth: 0.46, speed: 0.56, driftX: -12, opacityBase: 0.18, scaleBase: 0.78, blurBase: 3, rotate: -4, layer: "background", palette: 5 },
  { id: "f15", x: 70, y: 61, width: 11, ratio: 1.5, depth: 0.78, speed: 0.88, driftX: 16, opacityBase: 0.4, scaleBase: 0.9, blurBase: 1.6, rotate: 2, layer: "mid", palette: 6 },
  { id: "f16", x: 99, y: 54, width: 9, ratio: 0.8, depth: 0.58, speed: 0.7, driftX: -18, opacityBase: 0.24, scaleBase: 0.82, blurBase: 2.5, rotate: -2, layer: "background", palette: 7 },
  { id: "f17", x: 4, y: 86, width: 11, ratio: 1, depth: 0.66, speed: 0.74, driftX: 18, opacityBase: 0.3, scaleBase: 0.86, blurBase: 2.1, rotate: 2, layer: "mid", palette: 0 },
  { id: "f18", x: 23, y: 102, width: 8, ratio: 1.5, depth: 0.4, speed: 0.52, driftX: -16, opacityBase: 0.16, scaleBase: 0.74, blurBase: 3.2, rotate: -3, layer: "background", palette: 1 },
  { id: "f19", x: 45, y: 92, width: 12, ratio: 0.8, depth: 0.82, speed: 0.96, driftX: 20, opacityBase: 0.44, scaleBase: 0.92, blurBase: 1.5, rotate: 2, layer: "mid", palette: 2 },
  { id: "f20", x: 62, y: 108, width: 16, ratio: 1, depth: 1.16, speed: 1.24, driftX: -26, opacityBase: 0.62, scaleBase: 1.02, blurBase: 0.5, rotate: -3, layer: "foreground", palette: 3 },
  { id: "f21", x: 84, y: 94, width: 7, ratio: 1, depth: 0.38, speed: 0.5, driftX: 12, opacityBase: 0.16, scaleBase: 0.74, blurBase: 3.2, rotate: 4, layer: "background", palette: 4 },
  { id: "f22", x: 108, y: 104, width: 13, ratio: 1.78, depth: 0.74, speed: 0.82, driftX: -22, opacityBase: 0.32, scaleBase: 0.88, blurBase: 1.9, rotate: 2, layer: "mid", palette: 5 },
  { id: "f23", x: 15, y: 136, width: 14, ratio: 1, depth: 1.04, speed: 1.08, driftX: -22, opacityBase: 0.54, scaleBase: 0.96, blurBase: 0.9, rotate: -2, layer: "foreground", palette: 6 },
  { id: "f24", x: 38, y: 130, width: 7, ratio: 0.67, depth: 0.42, speed: 0.54, driftX: 14, opacityBase: 0.16, scaleBase: 0.76, blurBase: 3, rotate: 3, layer: "background", palette: 7 },
  { id: "f25", x: 76, y: 144, width: 10, ratio: 1.5, depth: 0.66, speed: 0.74, driftX: 16, opacityBase: 0.28, scaleBase: 0.84, blurBase: 2.2, rotate: -2, layer: "mid", palette: 0 },
  { id: "f26", x: 94, y: 132, width: 8, ratio: 1, depth: 0.44, speed: 0.58, driftX: -12, opacityBase: 0.18, scaleBase: 0.78, blurBase: 3, rotate: 4, layer: "background", palette: 1 },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function wrap(value: number, min: number, max: number) {
  const span = max - min;
  return ((((value - min) % span) + span) % span) + min;
}

function FloatingFragmentCard({
  fragment,
  index,
  register,
}: {
  fragment: FloatingFragment;
  index: number;
  register: (index: number, node: HTMLElement | null) => void;
}) {
  const sourceImages = realImages.length > 0 ? realImages : fallbackImages;
  const imageSrc = sourceImages[index % sourceImages.length];
  const background = imageSrc
    ? `linear-gradient(180deg, rgba(13,15,14,0.03), rgba(13,15,14,0.16)), url("${imageSrc}")`
    : placeholders[fragment.palette % placeholders.length];

  return (
    <figure
      ref={(node) => register(index, node)}
      className={`floating-fragment floating-fragment-${fragment.layer}`}
      style={{
        "--fragment-bg": background,
        "--fragment-ratio": `${fragment.ratio}`,
      } as FragmentStyle}
      data-fragment-id={fragment.id}
    >
      <span aria-hidden="true" />
    </figure>
  );
}

export function FloatingPortfolioField() {
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const nodesRef = useRef<Array<HTMLElement | null>>([]);

  const sortedFragments = useMemo(
    () => [...fragments].sort((a, b) => a.depth - b.depth),
    [],
  );

  useEffect(() => {
    let rafId = 0;
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let virtualScroll = 0;
    let direction = 1;

    function render(now: number) {
      const field = fieldRef.current;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const dt = Math.min((now - lastTime) / 16.67, 2.2);
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;

      if (Math.abs(scrollDelta) > 0.2) {
        direction = scrollDelta > 0 ? 1 : -1;
      }

      virtualScroll += direction * 0.82 * dt + scrollDelta * 0.34;
      lastScrollY = scrollY;
      lastTime = now;

      if (field) {
        field.dataset.direction = direction > 0 ? "down" : "up";
      }

      const margin = viewportHeight * 0.34;
      const minY = -margin;
      const maxY = viewportHeight + margin;

      sortedFragments.forEach((fragment, index) => {
        const node = nodesRef.current[index];
        if (!node) return;

        const width = clamp((fragment.width / 100) * viewportWidth, 72, 260);
        const height = width / fragment.ratio;
        const baseX = (fragment.x / 100) * viewportWidth;
        const baseY = (fragment.y / 100) * viewportHeight;
        const flowY = wrap(baseY + virtualScroll * fragment.speed * fragment.depth, minY - height, maxY);
        const wave = Math.sin((flowY / viewportHeight) * Math.PI * 2 + fragment.depth * 5.2);
        const x = baseX + wave * fragment.driftX * fragment.depth;
        const distanceToCenter = Math.abs(flowY - viewportHeight / 2);
        const focus = 1 - clamp(distanceToCenter / (viewportHeight * 0.65), 0, 1);
        const opacity = clamp(fragment.opacityBase + focus * 0.72, 0.12, fragment.layer === "foreground" ? 0.98 : 0.82);
        const scale = fragment.scaleBase + focus * 0.22;
        const blur = Math.max((1 - focus) * fragment.blurBase, fragment.layer === "foreground" ? 0 : 0.2);
        const zIndex = Math.round(fragment.depth * 100 + focus * 80);

        node.style.width = `${width}px`;
        node.style.height = `${height}px`;
        node.style.opacity = opacity.toFixed(3);
        node.style.filter = `blur(${blur.toFixed(2)}px) saturate(${(0.82 + focus * 0.24).toFixed(2)})`;
        node.style.zIndex = `${zIndex}`;
        node.style.transform = `translate3d(${x.toFixed(2)}px, ${flowY.toFixed(2)}px, 0) translate(-50%, -50%) rotate(${fragment.rotate}deg) scale(${scale.toFixed(3)})`;
      });

      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [sortedFragments]);

  function register(index: number, node: HTMLElement | null) {
    nodesRef.current[index] = node;
  }

  return (
    <section className="floating-portfolio-section" aria-labelledby="floating-portfolio-title">
      <div className="floating-portfolio-sticky">
        <div ref={fieldRef} className="floating-fragment-field" aria-hidden="true">
          {sortedFragments.map((fragment, index) => (
            <FloatingFragmentCard fragment={fragment} index={index} register={register} key={fragment.id} />
          ))}
        </div>

        <motion.h2
          id="floating-portfolio-title"
          className="floating-portfolio-title"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-18%" }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Stay curious.</span>
          <span>Become infinite.</span>
        </motion.h2>
      </div>
    </section>
  );
}
