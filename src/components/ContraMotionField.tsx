import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const nodes = [
  { x: "18%", y: "58%", size: 5, delay: 0.1 },
  { x: "38%", y: "22%", size: 7, delay: 0.35 },
  { x: "68%", y: "32%", size: 4, delay: 0.7 },
  { x: "82%", y: "60%", size: 8, delay: 0.25 },
  { x: "54%", y: "78%", size: 5, delay: 0.55 },
];

export function ContraMotionField() {
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 80, damping: 24, mass: 0.7 });
  const mouseY = useSpring(rawY, { stiffness: 80, damping: 24, mass: 0.7 });
  const { scrollYProgress } = useScroll({ target: fieldRef, offset: ["start start", "end start"] });

  const fieldX = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const fieldY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["24%", "78%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["30%", "70%"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const opacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.78, 0.24]);

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
      className="contra-motion-field"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <motion.div className="contra-glow" style={{ left: glowX, top: glowY, opacity }} />
      <motion.div
        className="contra-system-layer"
        style={{
          x: prefersReducedMotion ? 0 : fieldX,
          y: prefersReducedMotion ? 0 : fieldY,
          opacity,
        }}
      >
        <motion.svg
          className="contra-lines"
          viewBox="0 0 1200 720"
          preserveAspectRatio="xMidYMid slice"
          style={{ y: prefersReducedMotion ? 0 : y }}
        >
          <motion.path
            d="M92 484 C 236 276, 414 326, 566 222 S 872 106, 1088 238"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.24, ease }}
          />
          <motion.path
            d="M180 242 C 352 398, 512 196, 674 356 S 910 612, 1074 442"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.05, delay: 0.38, ease }}
          />
        </motion.svg>

        <motion.div
          className="contra-infinity"
          animate={prefersReducedMotion ? undefined : { rotate: [0, 2, -2, 0], scale: [1, 1.035, 1] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ∞
        </motion.div>

        {nodes.map((node) => (
          <motion.span
            key={`${node.x}-${node.y}`}
            className="contra-node"
            style={{ left: node.x, top: node.y, width: node.size, height: node.size }}
            initial={{ opacity: 0, scale: 0.72 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.7, scale: 1 }
                : { opacity: [0.32, 0.86, 0.32], scale: [1, 1.45, 1], y: [0, -10, 0] }
            }
            transition={{
              duration: prefersReducedMotion ? 0.4 : 4.8,
              delay: 0.45 + node.delay,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
