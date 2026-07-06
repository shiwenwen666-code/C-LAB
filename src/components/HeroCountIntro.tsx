import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const countDurationMs = 2000;
const slowTailStart = 0.78;
const captionDelayMs = 240;
const captionHoldMs = 1280;
const fadeDurationMs = 980;

function easeInOutCubic(value: number) {
  return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function getDisplayCount(progress: number) {
  if (progress < slowTailStart) {
    return Math.round((progress / slowTailStart) * 90);
  }

  const tailProgress = (progress - slowTailStart) / (1 - slowTailStart);
  return 90 + Math.round(easeInOutCubic(tailProgress) * 10);
}

export function HeroCountIntro({
  onRevealHero,
  onComplete,
}: {
  onRevealHero: () => void;
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const [showCaption, setShowCaption] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(100);
      setShowCaption(true);
      onRevealHero();
      setIsComplete(true);
      const timeoutId = window.setTimeout(onComplete, fadeDurationMs);
      return () => window.clearTimeout(timeoutId);
    }

    let frameId = 0;
    let captionTimeoutId = 0;
    let revealTimeoutId = 0;
    let fadeTimeoutId = 0;
    let completionTimeoutId = 0;
    const startTime = performance.now();

    function update(now: number) {
      const progress = Math.min((now - startTime) / countDurationMs, 1);
      setCount(getDisplayCount(progress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
        return;
      }

      setCount(100);
      captionTimeoutId = window.setTimeout(() => setShowCaption(true), captionDelayMs);
      revealTimeoutId = window.setTimeout(onRevealHero, captionDelayMs + captionHoldMs);
      fadeTimeoutId = window.setTimeout(() => setIsComplete(true), captionDelayMs + captionHoldMs + 120);
      completionTimeoutId = window.setTimeout(onComplete, captionDelayMs + captionHoldMs + fadeDurationMs);
    }

    frameId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(captionTimeoutId);
      window.clearTimeout(revealTimeoutId);
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(completionTimeoutId);
    };
  }, [onComplete, onRevealHero, prefersReducedMotion]);

  return (
    <motion.div
      className="hero-count-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: isComplete ? 0.82 : 0.32, ease: [0.22, 1, 0.36, 1] }}
      aria-live="polite"
    >
      <motion.div
        className="hero-count-inner"
        initial={{ y: 10, filter: "blur(8px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hero-count-number">{count}</span>
        {showCaption ? (
          <motion.span
            className="hero-count-caption"
            initial={{ opacity: 0, y: 10, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            Please fasten your seat belt.
          </motion.span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
