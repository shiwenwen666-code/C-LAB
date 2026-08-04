import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { useAppSettings } from "../App";
import { awardCards, type AwardCard } from "../data/awards";

function AwardImage({ award, large = false }: { award: AwardCard; large?: boolean }) {
  const { locale } = useAppSettings();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={large ? "award-modal-placeholder" : "award-card-placeholder"}>
        <span>{locale === "en" ? "Certificate image" : "证书图片"}</span>
      </div>
    );
  }

  return (
    <img
      src={award.image}
      alt={award.title[locale]}
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

export function AwardsSection() {
  const { locale } = useAppSettings();
  const [selectedAward, setSelectedAward] = useState<AwardCard | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const isPointerDownRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragMovedRef = useRef(false);
  const pendingClickAwardRef = useRef<AwardCard | null>(null);
  const suppressClickRef = useRef(false);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);

  useEffect(() => {
    if (!selectedAward) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedAward(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAward]);

  useEffect(() => {
    function normalizeOffset(value: number) {
      const loopWidth = loopWidthRef.current;

      if (loopWidth <= 0) {
        return 0;
      }

      return ((value % loopWidth) + loopWidth) % loopWidth;
    }

    function applyOffset(value: number) {
      const nextOffset = normalizeOffset(value);
      offsetRef.current = nextOffset;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
      }

      if (progressRef.current && loopWidthRef.current > 0) {
        progressRef.current.style.transform = `scaleX(${Math.max(0.035, nextOffset / loopWidthRef.current)})`;
      }
    }

    function measureLoop() {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      loopWidthRef.current = track.scrollWidth / 2;
      applyOffset(offsetRef.current);
    }

    measureLoop();

    const resizeObserver = new ResizeObserver(measureLoop);

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", measureLoop);

    let frameId = 0;
    let lastTime = performance.now();
    const speed = 52;

    function tick(time: number) {
      const elapsed = time - lastTime;
      lastTime = time;

      if (!isPointerDownRef.current && !selectedAward) {
        applyOffset(offsetRef.current + (elapsed / 1000) * speed);
      }

      frameId = window.requestAnimationFrame(tick);
    }

    frameId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", measureLoop);
      resizeObserver.disconnect();
    };
  }, [selectedAward]);

  function applyDragOffset(distance: number) {
    const loopWidth = loopWidthRef.current;
    const nextOffset = loopWidth > 0
      ? ((dragStartOffsetRef.current - distance) % loopWidth + loopWidth) % loopWidth
      : 0;

    offsetRef.current = nextOffset;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
    }

    if (progressRef.current && loopWidth > 0) {
      progressRef.current.style.transform = `scaleX(${Math.max(0.035, nextOffset / loopWidth)})`;
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) {
      return;
    }

    isPointerDownRef.current = true;
    dragMovedRef.current = false;
    pendingClickAwardRef.current = getAwardFromPointerTarget(event.target);
    suppressClickRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isPointerDownRef.current) {
      return;
    }

    const distance = event.clientX - dragStartXRef.current;

    if (Math.abs(distance) > 4) {
      dragMovedRef.current = true;
      pendingClickAwardRef.current = null;
      suppressClickRef.current = true;
    }

    applyDragOffset(distance);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!isPointerDownRef.current) {
      return;
    }

    isPointerDownRef.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!dragMovedRef.current) {
      const award = pendingClickAwardRef.current ?? getAwardFromPointerTarget(event.target);
      pendingClickAwardRef.current = null;
      suppressClickRef.current = false;
      if (award) {
        window.setTimeout(() => setSelectedAward(award), 0);
      }
      return;
    }

    pendingClickAwardRef.current = null;
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 120);
  }

  function getAwardFromPointerTarget(target: EventTarget | null) {
    if (!(target instanceof Element)) {
      return null;
    }

    const card = target.closest<HTMLButtonElement>("[data-award-id]");

    if (!card) {
      return null;
    }

    return awardCards.find((award) => award.id === card.dataset.awardId) ?? null;
  }

  function openAward(award: AwardCard) {
    if (suppressClickRef.current) {
      return;
    }

    setSelectedAward(award);
  }

  function handleAwardMouseMove(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--award-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--award-y", `${event.clientY - rect.top}px`);
  }

  return (
    <section className="awards-section" id="awards" aria-labelledby="awards-title">
      <div className="awards-head">
        <div>
          <p className="awards-eyebrow">Recognition</p>
          <h2 className="awards-title" id="awards-title">
            {locale === "en" ? "Awards & Certificates" : "获奖与证书"}
          </h2>
        </div>
        <p className="awards-description">
          {locale === "en"
            ? "A quiet archive of selected awards, certificates and recognitions."
            : "一些获奖证书与阶段性认可的安静陈列。"}
        </p>
      </div>

      <div
        className={`awards-viewport ${isDragging ? "is-dragging" : ""}`}
        aria-label={locale === "en" ? "Awards carousel" : "获奖证书横向列表"}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="awards-track" ref={trackRef}>
          {[0, 1].map((setIndex) =>
            awardCards.map((award) => (
              <button
                className={`award-card is-${award.orientation}`}
                type="button"
                key={`${setIndex}-${award.id}`}
                data-award-id={award.id}
                onMouseMove={handleAwardMouseMove}
                onClick={() => openAward(award)}
                aria-label={`${award.title[locale]}, ${award.year}`}
              >
                <span className="award-image-frame">
                  <AwardImage award={award} />
                </span>
                <span className="award-card-meta">
                  <span>{award.category[locale]}</span>
                  <strong>{award.title[locale]}</strong>
                  <em>{award.year}</em>
                </span>
              </button>
            )),
          )}
        </div>
      </div>

      <div className="awards-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <AnimatePresence>
        {selectedAward ? (
          <motion.div
            className="award-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              className={`award-modal-panel is-${selectedAward.orientation}`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="award-modal-close"
                aria-label={locale === "en" ? "Close preview" : "关闭预览"}
                onClick={() => setSelectedAward(null)}
              >
                <X size={18} />
              </button>
              <div className="award-modal-image">
                <AwardImage award={selectedAward} large />
              </div>
              <div className="award-modal-caption">
                <span>{selectedAward.category[locale]}</span>
                <strong>{selectedAward.title[locale]}</strong>
                <em>{selectedAward.year}</em>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
