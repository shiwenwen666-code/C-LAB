import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Ability, AbilityLocale } from "../data/abilities";
import { GlareHover } from "./GlareHover";

type CardOrigin = {
  x: number;
  y: number;
};

type AbilityCardProps = {
  ability: Ability | null;
  locale: AbilityLocale;
  origin: CardOrigin | null;
  onClose: () => void;
};

export function AbilityCard({ ability, locale, origin, onClose }: AbilityCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [ability?.id]);

  useEffect(() => {
    if (!ability) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [ability, onClose]);

  const fromX = origin ? origin.x - window.innerWidth / 2 : 0;
  const fromY = origin ? origin.y - window.innerHeight / 2 : 48;

  return (
    <AnimatePresence>
      {ability ? (
        <motion.div
          className="ability-card-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.article
            aria-label={ability.title[locale]}
            className="ability-card"
            initial={{
              opacity: 1,
              x: fromX,
              y: fromY,
              rotateZ: 0,
              scale: 0.18,
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
            }}
            animate={{
              opacity: 1,
              x: [fromX, fromX * 0.16, 0],
              y: [fromY, -28, 0],
              rotateZ: [0, -2, 0],
              scale: [0.18, 1.045, 1],
              boxShadow: "0 24px 56px rgba(0, 0, 0, 0.28)",
            }}
            exit={{
              opacity: 0,
              y: 30,
              rotateZ: 0,
              scale: 0.78,
              boxShadow: "0 8px 18px rgba(0, 0, 0, 0.12)",
            }}
            transition={{ type: "spring", stiffness: 155, damping: 19, mass: 0.86 }}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div
              aria-hidden="true"
              className="ability-card-face ability-card-back"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              exit={{ rotateY: 230 }}
              transition={{ duration: 1.04, delay: 0.12, ease: [0.22, 0.8, 0.2, 1] }}
            >
              <span>CYAN LAB</span>
              <i />
            </motion.div>

            <motion.div
              className="ability-card-face ability-card-front"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 50 }}
              transition={{ duration: 1.04, delay: 0.12, ease: [0.22, 0.8, 0.2, 1] }}
            >
              <GlareHover className="ability-card-glare">
                <div className="ability-card-media">
                  <div className="ability-card-placeholder" aria-hidden="true" />
                  {!imageFailed ? (
                    <img
                      alt={ability.imageLabel[locale]}
                      className="ability-card-image"
                      onError={() => setImageFailed(true)}
                      src={ability.image}
                    />
                  ) : null}
                </div>

                <div className="ability-card-copy">
                  <span className="ability-card-tag">#{ability.tag[locale]}</span>
                </div>
              </GlareHover>
            </motion.div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
