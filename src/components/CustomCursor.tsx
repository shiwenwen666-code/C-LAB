import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const dot = dotRef.current;
    if (!dot) return;
    const dotEl = dot as HTMLDivElement;

    function show() {
      dotEl.classList.add("is-visible");
    }

    function hide() {
      dotEl.classList.remove("is-visible");
    }

    function move(event: PointerEvent) {
      dotEl.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      show();
    }

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />;
}
