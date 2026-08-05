import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type OrbitCard = {
  imageNumber: number;
  src: string;
  className: string;
  from: { x: number; y: number; rotate: number; scale: number };
  to: { x: number; y: number; rotate: number; scale: number };
  range: [number, number];
};

const orbitCards: OrbitCard[] = [
  {
    imageNumber: 1,
    src: "/images/works/work-01.svg",
    className: "is-large",
    from: { x: -20, y: 10, rotate: -3, scale: 0.18 },
    to: { x: -1260, y: 360, rotate: -11, scale: 1.08 },
    range: [0.04, 1],
  },
  {
    imageNumber: 2,
    src: "/images/works/work-02.svg",
    className: "is-wide",
    from: { x: 18, y: 8, rotate: 2, scale: 0.16 },
    to: { x: 1180, y: 210, rotate: 7, scale: 1.16 },
    range: [0.055, 1],
  },
  {
    imageNumber: 3,
    src: "/images/works/work-03.svg",
    className: "is-medium",
    from: { x: 0, y: -12, rotate: 0, scale: 0.16 },
    to: { x: 260, y: -820, rotate: 5, scale: 1.06 },
    range: [0.07, 1],
  },
  {
    imageNumber: 4,
    src: "/images/works/work-04.svg",
    className: "is-portrait",
    from: { x: -12, y: 8, rotate: 0, scale: 0.14 },
    to: { x: -560, y: -650, rotate: -8, scale: 1.02 },
    range: [0.085, 1],
  },
  {
    imageNumber: 5,
    src: "/images/works/work-05.svg",
    className: "is-tall",
    from: { x: 30, y: -10, rotate: 2, scale: 0.2 },
    to: { x: 920, y: -560, rotate: 12, scale: 1.06 },
    range: [0.1, 1],
  },
  {
    imageNumber: 6,
    src: "/images/works/work-06.svg",
    className: "is-poster",
    from: { x: 12, y: 24, rotate: 1, scale: 0.2 },
    to: { x: 620, y: 760, rotate: 10, scale: 1.1 },
    range: [0.115, 1],
  },
  {
    imageNumber: 7,
    src: "/images/works/work-01.svg",
    className: "is-medium",
    from: { x: -8, y: 18, rotate: 0, scale: 0.13 },
    to: { x: -900, y: -240, rotate: 6, scale: 0.95 },
    range: [0.13, 1],
  },
  {
    imageNumber: 8,
    src: "/images/works/work-02.svg",
    className: "is-portrait",
    from: { x: 16, y: -6, rotate: 1, scale: 0.12 },
    to: { x: 1040, y: -80, rotate: -9, scale: 0.98 },
    range: [0.145, 1],
  },
  {
    imageNumber: 9,
    src: "/images/works/work-03.svg",
    className: "is-large",
    from: { x: -16, y: -14, rotate: -1, scale: 0.15 },
    to: { x: -1420, y: -90, rotate: -4, scale: 1.12 },
    range: [0.16, 1],
  },
  {
    imageNumber: 10,
    src: "/images/works/work-04.svg",
    className: "is-wide",
    from: { x: 8, y: 10, rotate: 0, scale: 0.14 },
    to: { x: 1320, y: -430, rotate: 4, scale: 1.08 },
    range: [0.175, 1],
  },
  {
    imageNumber: 11,
    src: "/images/works/work-05.svg",
    className: "is-poster",
    from: { x: -22, y: 18, rotate: -1, scale: 0.12 },
    to: { x: -430, y: 840, rotate: -12, scale: 1.04 },
    range: [0.19, 1],
  },
  {
    imageNumber: 12,
    src: "/images/works/work-06.svg",
    className: "is-portrait",
    from: { x: 18, y: 20, rotate: 1, scale: 0.13 },
    to: { x: 1040, y: 640, rotate: 13, scale: 1.08 },
    range: [0.205, 1],
  },
  {
    imageNumber: 13,
    src: "/images/works/work-01.svg",
    className: "is-portrait",
    from: { x: 0, y: 0, rotate: 0, scale: 0.1 },
    to: { x: -160, y: -940, rotate: 7, scale: 0.92 },
    range: [0.22, 1],
  },
  {
    imageNumber: 14,
    src: "/images/works/work-02.svg",
    className: "is-medium",
    from: { x: 0, y: 0, rotate: 0, scale: 0.12 },
    to: { x: 520, y: -980, rotate: -5, scale: 0.98 },
    range: [0.235, 1],
  },
  {
    imageNumber: 15,
    src: "/images/works/work-03.svg",
    className: "is-wide",
    from: { x: -10, y: -8, rotate: 0, scale: 0.13 },
    to: { x: -1180, y: 650, rotate: 8, scale: 1.05 },
    range: [0.25, 1],
  },
  {
    imageNumber: 16,
    src: "/images/works/work-04.svg",
    className: "is-portrait",
    from: { x: 12, y: 8, rotate: 0, scale: 0.11 },
    to: { x: 1480, y: 470, rotate: -7, scale: 1.02 },
    range: [0.265, 1],
  },
  {
    imageNumber: 17,
    src: "/images/works/work-05.svg",
    className: "is-portrait",
    from: { x: -4, y: 6, rotate: 0, scale: 0.1 },
    to: { x: -760, y: -840, rotate: 14, scale: 0.9 },
    range: [0.28, 1],
  },
  {
    imageNumber: 18,
    src: "/images/works/work-06.svg",
    className: "is-large",
    from: { x: 8, y: -4, rotate: 0, scale: 0.12 },
    to: { x: 760, y: -820, rotate: -12, scale: 1.1 },
    range: [0.295, 1],
  },
  {
    imageNumber: 19,
    src: "/images/works/work-01.svg",
    className: "is-poster",
    from: { x: -12, y: 8, rotate: -1, scale: 0.12 },
    to: { x: -1510, y: 230, rotate: 5, scale: 1.08 },
    range: [0.31, 1],
  },
  {
    imageNumber: 20,
    src: "/images/works/work-02.svg",
    className: "is-medium",
    from: { x: 10, y: 12, rotate: 1, scale: 0.12 },
    to: { x: 1510, y: 40, rotate: -5, scale: 1.05 },
    range: [0.325, 1],
  },
  {
    imageNumber: 21,
    src: "/images/works/work-03.svg",
    className: "is-portrait",
    from: { x: -14, y: -4, rotate: -1, scale: 0.11 },
    to: { x: -980, y: -720, rotate: -9, scale: 1.02 },
    range: [0.34, 1],
  },
  {
    imageNumber: 22,
    src: "/images/works/work-04.svg",
    className: "is-tall",
    from: { x: 15, y: 5, rotate: 1, scale: 0.11 },
    to: { x: 1120, y: -690, rotate: 10, scale: 1.04 },
    range: [0.355, 1],
  },
  {
    imageNumber: 23,
    src: "/images/works/work-05.svg",
    className: "is-portrait",
    from: { x: -8, y: 16, rotate: 0, scale: 0.1 },
    to: { x: -1210, y: 500, rotate: 8, scale: 0.98 },
    range: [0.37, 1],
  },
  {
    imageNumber: 24,
    src: "/images/works/work-06.svg",
    className: "is-portrait",
    from: { x: 12, y: 18, rotate: 1, scale: 0.1 },
    to: { x: 1260, y: 560, rotate: -8, scale: 1.02 },
    range: [0.385, 1],
  },
  {
    imageNumber: 25,
    src: "/images/works/work-01.svg",
    className: "is-tall",
    from: { x: -2, y: -10, rotate: 0, scale: 0.11 },
    to: { x: -420, y: -1010, rotate: 12, scale: 0.96 },
    range: [0.4, 1],
  },
  {
    imageNumber: 26,
    src: "/images/works/work-02.svg",
    className: "is-portrait",
    from: { x: 4, y: -8, rotate: 0, scale: 0.11 },
    to: { x: 430, y: -1050, rotate: -11, scale: 1 },
    range: [0.415, 1],
  },
  {
    imageNumber: 27,
    src: "/images/works/work-03.svg",
    className: "is-portrait",
    from: { x: -18, y: 8, rotate: -1, scale: 0.1 },
    to: { x: -1510, y: -360, rotate: -6, scale: 1.04 },
    range: [0.43, 1],
  },
  {
    imageNumber: 28,
    src: "/images/works/work-04.svg",
    className: "is-tall",
    from: { x: 18, y: 7, rotate: 1, scale: 0.1 },
    to: { x: 1500, y: -300, rotate: 7, scale: 1.03 },
    range: [0.445, 1],
  },
  {
    imageNumber: 29,
    src: "/images/works/work-05.svg",
    className: "is-portrait",
    from: { x: -10, y: 20, rotate: -1, scale: 0.1 },
    to: { x: -820, y: 850, rotate: 11, scale: 0.98 },
    range: [0.46, 1],
  },
  {
    imageNumber: 30,
    src: "/images/works/work-06.svg",
    className: "is-portrait",
    from: { x: 11, y: 19, rotate: 1, scale: 0.1 },
    to: { x: 850, y: 880, rotate: -10, scale: 1.02 },
    range: [0.475, 1],
  },
];

const cardWaveRanges: [number, number][] = orbitCards.map((_, index) => {
  const start = 0.32 + index * 0.021;
  return [start, start + 0.064];
});

const orbitImageExtensions = ["webp", "png", "jpg", "jpeg", "gif", "avif"];

function tryNextOrbitImage(event: React.SyntheticEvent<HTMLImageElement>, fallbackSrc: string) {
  const image = event.currentTarget;
  const nextExtensionIndex = Number(image.dataset.extensionIndex ?? "0") + 1;

  if (nextExtensionIndex < orbitImageExtensions.length) {
    image.dataset.extensionIndex = String(nextExtensionIndex);
    image.src = `/images/works/orbit-showcase/${image.dataset.imageNumber}.${orbitImageExtensions[nextExtensionIndex]}`;
    return;
  }

  image.onerror = null;
  image.src = fallbackSrc;
}

function orbitPoint(progress: MotionValue<number>, cx: number, cy: number, r: number, phase: number, turns = 4.2) {
  const smoothProgress = useSpring(progress, { stiffness: 86, damping: 23, mass: 0.8 });
  const x = useTransform(smoothProgress, (value) => cx + Math.cos(value * Math.PI * 2 * turns + phase) * r);
  const y = useTransform(smoothProgress, (value) => cy + Math.sin(value * Math.PI * 2 * turns + phase) * r);
  return { x, y };
}

function OrbitDot({
  progress,
  cx,
  cy,
  r,
  phase,
}: {
  progress: MotionValue<number>;
  cx: number;
  cy: number;
  r: number;
  phase: number;
}) {
  const point = orbitPoint(progress, cx, cy, r, phase);

  return <motion.circle className="orbit-dot" r="3.2" cx={point.x} cy={point.y} />;
}

function FlyingWorkCard({ card, index, progress }: { card: OrbitCard; index: number; progress: MotionValue<number> }) {
  const [start, end] = cardWaveRanges[index] ?? card.range;
  const peak = start + (end - start) * 0.5;
  const outX = card.to.x * 1.36;
  const outY = card.to.y * 1.36;
  const previewX = card.to.x * 0.36;
  const previewY = card.to.y * 0.36;
  const previewScale = Math.max(card.to.scale * 1.45, 1.42);
  const x = useSpring(useTransform(progress, [start, peak, end], [card.from.x, previewX, outX]), { stiffness: 22, damping: 28, mass: 1.75 });
  const y = useSpring(useTransform(progress, [start, peak, end], [card.from.y, previewY, outY]), { stiffness: 22, damping: 28, mass: 1.75 });
  const rotate = useSpring(useTransform(progress, [start, peak, end], [card.from.rotate, card.to.rotate * 0.28, card.to.rotate]), { stiffness: 22, damping: 28, mass: 1.65 });
  const scale = useSpring(useTransform(progress, [start, peak, end], [card.from.scale, previewScale, card.to.scale]), { stiffness: 24, damping: 27, mass: 1.58 });
  const opacity = useSpring(useTransform(progress, [start, start + 0.006, peak, end - 0.009, end], [0, 1, 1, 0.92, 0]), { stiffness: 64, damping: 22, mass: 0.72 });

  return (
    <motion.figure
      className={`orbit-work-card ${card.className}`}
      style={{ x, y, rotate, scale, opacity }}
      transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
    >
      <img
        src={`/images/works/orbit-showcase/${card.imageNumber}.${orbitImageExtensions[0]}`}
        alt=""
        loading="lazy"
        data-extension-index="0"
        data-image-number={card.imageNumber}
        onError={(event) => tryNextOrbitImage(event, card.src)}
      />
    </motion.figure>
  );
}

export function OrbitWorksShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const cardProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 24, mass: 1.35 });
  const sloganY = useSpring(useTransform(scrollYProgress, [0, 0.28, 0.85], [120, 0, -34]), { stiffness: 48, damping: 22, mass: 1.05 });
  const sloganScale = useSpring(useTransform(scrollYProgress, [0, 0.28, 0.72], [0.76, 1, 0.94]), { stiffness: 54, damping: 21, mass: 1 });
  const sloganOpacity = useTransform(scrollYProgress, [0, 0.16], [0, 1]);
  const sloganBlur = useTransform(scrollYProgress, [0, 0.28], [18, 0]);
  const sloganFilter = useTransform(sloganBlur, (value) => `blur(${value}px)`);

  return (
    <section ref={sectionRef} className="philosophy-section">
      <div className="philosophy-sticky">
        <div className="orbit-video-layer" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.svg
          className="orbit-system"
          viewBox="0 0 1000 760"
          aria-hidden="true"
        >
          <circle className="orbit-ring" cx="500" cy="290" r="230" />
          <circle className="orbit-ring" cx="365" cy="465" r="230" />
          <circle className="orbit-ring" cx="635" cy="465" r="230" />
          <OrbitDot progress={scrollYProgress} cx={500} cy={290} r={230} phase={0.2} />
          <OrbitDot progress={scrollYProgress} cx={365} cy={465} r={230} phase={2.7} />
          <OrbitDot progress={scrollYProgress} cx={635} cy={465} r={230} phase={4.9} />
        </motion.svg>

        <div className="orbit-card-layer" aria-hidden="true">
          {orbitCards.map((card, index) => (
            <FlyingWorkCard card={card} index={index} progress={cardProgress} key={card.imageNumber} />
          ))}
        </div>

        <motion.h2 className="philosophy-slogan" style={{ y: sloganY, scale: sloganScale, opacity: sloganOpacity, filter: sloganFilter }}>
          STAY CURIOUS
          <br />
          BECOME INFINITE
        </motion.h2>
      </div>
    </section>
  );
}
