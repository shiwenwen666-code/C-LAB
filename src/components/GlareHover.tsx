import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type GlareHoverProps = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
};

export function GlareHover({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.48)",
}: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds || !containerRef.current) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    containerRef.current.style.setProperty("--glare-x", `${x}%`);
    containerRef.current.style.setProperty("--glare-y", `${y}%`);
  };

  return (
    <div
      ref={containerRef}
      className={`glare-hover ${className}`}
      style={{ "--glare-color": glareColor } as CSSProperties}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
