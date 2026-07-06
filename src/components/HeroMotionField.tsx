import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const dots = [
  { x: "62%", y: "24%", size: 7, delay: 0 },
  { x: "78%", y: "38%", size: 4, delay: 0.4 },
  { x: "54%", y: "58%", size: 5, delay: 0.8 },
  { x: "86%", y: "68%", size: 8, delay: 1.1 },
  { x: "42%", y: "72%", size: 3, delay: 0.2 },
  { x: "72%", y: "80%", size: 5, delay: 0.7 },
];

export function HeroMotionField() {
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 90, damping: 24, mass: 0.7 });
  const mouseY = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.7 });
  const { scrollYProgress } = useScroll({ target: fieldRef, offset: ["start start", "end start"] });

  const fieldX = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const fieldY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["52%", "78%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["22%", "66%"]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.72, 0.18]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={fieldRef}
      className="hero-motion-field subtle-motion-field"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.1, ease: smoothEase }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <motion.div
        className="motion-glow"
        style={{ left: glowX, top: glowY, opacity: prefersReducedMotion ? 0.42 : scrollOpacity }}
      />

      <motion.div
        className="motion-system"
        style={{
          x: prefersReducedMotion ? 0 : fieldX,
          y: prefersReducedMotion ? 0 : fieldY,
          opacity: scrollOpacity,
        }}
      >
        <motion.svg
          className="motion-lines"
          viewBox="0 0 900 620"
          style={{ y: prefersReducedMotion ? 0 : scrollY }}
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M100 442 C 236 350, 338 380, 456 284 S 706 136, 824 196"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.3, ease: smoothEase }}
          />
          <motion.path
            d="M238 156 C 326 230, 438 198, 536 286 S 682 464, 790 390"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.78, delay: 0.42, ease: smoothEase }}
          />
          <motion.path
            d="M520 84 C 486 210, 588 302, 548 428 S 414 558, 306 516"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.72, delay: 0.5, ease: smoothEase }}
          />
        </motion.svg>

        {dots.map((dot) => (
          <motion.span
            key={`${dot.x}-${dot.y}`}
            className="motion-dot"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
            }}
            initial={{ opacity: 0, scale: 0.65 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.74, scale: 1 }
                : {
                    opacity: [0.42, 0.9, 0.42],
                    scale: [1, 1.35, 1],
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: prefersReducedMotion ? 0.4 : 4.6,
              delay: 0.34 + dot.delay,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
