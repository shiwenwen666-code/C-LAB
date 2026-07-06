import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useAppSettings } from "../App";
import { ContraMotionField } from "./ContraMotionField";

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedVisualWord() {
  return (
    <span className="contra-visual-word" aria-hidden="true">
      v
      <span className="contra-i-mark">
        <motion.span
          animate={{ opacity: [1, 1, 0, 0, 1], y: [0, 0, -8, 8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          i
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, -8] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          !
        </motion.span>
      </span>
      sual
    </span>
  );
}

export function HeroContra() {
  const { locale } = useAppSettings();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -44]);

  const lines = [
    <span key="shape">Shape</span>,
    <AnimatedVisualWord key="visual" />,
    <span key="systems">systems.</span>,
  ];

  return (
    <section ref={heroRef} className="contra-hero">
      <ContraMotionField />
      <div className="contra-hero-inner">
        <motion.div className="contra-hero-title-wrap" style={{ y: titleY }}>
          <h1 className="contra-hero-title" aria-label="Shape visual systems.">
            {lines.map((line, index) => (
              <motion.span
                key={index}
                className="contra-title-line"
                initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.12, delay: 0.12 + index * 0.16, ease }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          className="contra-hero-copy"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.92, delay: 0.78, ease }}
        >
          <p>{locale === "en" ? "Commercial visuals, AI workflows, and creative tools." : "商业视觉、AI 工作流与创意工具。"}</p>
          <div className="contra-hero-meta">
            <span>GMT+8 / CN</span>
            <span>Portfolio 2026</span>
            <span>Creative Systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
