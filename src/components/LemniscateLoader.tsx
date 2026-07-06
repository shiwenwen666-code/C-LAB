import { useEffect, useRef } from "react";

const SVG_NS = "http://www.w3.org/2000/svg";

const config = {
  particleCount: 91,
  trailSpan: 0.45,
  durationMs: 3000,
  pulseDurationMs: 7900,
  strokeWidth: 5.4,
  lemniscateA: 17,
  lemniscateBoost: 8.3,
};

function normalizeProgress(progress: number) {
  return ((progress % 1) + 1) % 1;
}

function getDetailScale(time: number) {
  const pulseProgress = (time % config.pulseDurationMs) / config.pulseDurationMs;
  const pulseAngle = pulseProgress * Math.PI * 2;
  return 0.52 + ((Math.sin(pulseAngle + 0.55) + 1) / 2) * 0.48;
}

function getPoint(progress: number, detailScale: number) {
  const t = progress * Math.PI * 2;
  const scale = config.lemniscateA + detailScale * config.lemniscateBoost;
  const denom = 1 + Math.sin(t) ** 2;

  return {
    x: 50 + (scale * Math.cos(t)) / denom,
    y: 50 + (scale * Math.sin(t) * Math.cos(t)) / denom,
  };
}

function buildPath(detailScale: number, steps = 320) {
  return Array.from({ length: steps + 1 }, (_, index) => {
    const point = getPoint(index / steps, detailScale);
    return `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
  }).join(" ");
}

function getParticle(index: number, progress: number, detailScale: number) {
  const tailOffset = index / (config.particleCount - 1);
  const point = getPoint(normalizeProgress(progress - tailOffset * config.trailSpan), detailScale);
  const fade = Math.pow(1 - tailOffset, 0.56);

  return {
    x: point.x,
    y: point.y,
    radius: 0.9 + fade * 2.7,
    opacity: 0.04 + fade * 0.96,
  };
}

export function LemniscateLoader() {
  const groupRef = useRef<SVGGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const particlesRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return undefined;

    particlesRef.current.forEach((particle) => particle.remove());
    particlesRef.current = Array.from({ length: config.particleCount }, () => {
      const circle = document.createElementNS(SVG_NS, "circle");
      circle.setAttribute("fill", "currentColor");
      group.appendChild(circle);
      return circle;
    });

    let frameId = 0;
    const startedAt = performance.now();

    function render(now: number) {
      const path = pathRef.current;
      const time = now - startedAt;
      const progress = (time % config.durationMs) / config.durationMs;
      const detailScale = getDetailScale(time);

      path?.setAttribute("d", buildPath(detailScale));
      particlesRef.current.forEach((node, index) => {
        const particle = getParticle(index, progress, detailScale);
        node.setAttribute("cx", particle.x.toFixed(2));
        node.setAttribute("cy", particle.y.toFixed(2));
        node.setAttribute("r", particle.radius.toFixed(2));
        node.setAttribute("opacity", particle.opacity.toFixed(3));
      });

      frameId = requestAnimationFrame(render);
    }

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      particlesRef.current.forEach((particle) => particle.remove());
      particlesRef.current = [];
    };
  }, []);

  return (
    <div className="lemniscate-loader" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none">
        <g ref={groupRef}>
          <path
            ref={pathRef}
            className="lemniscate-loader-path"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={config.strokeWidth}
            opacity="0.1"
          />
        </g>
      </svg>
    </div>
  );
}
