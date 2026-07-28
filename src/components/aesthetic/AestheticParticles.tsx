import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  baseSize: number;
  twinkle: number;
  driftPhase: number;
  driftRadius: number;
  driftSpeed: number;
};

const particleCount = 72;

export function AestheticParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const activeCanvas = canvas;
    const activeContext = context;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    function resize() {
      const ratio = window.devicePixelRatio || 1;
      const rect = activeCanvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      activeCanvas.width = width * ratio;
      activeCanvas.height = height * ratio;
      activeContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: particleCount }, () => {
        const homeX = Math.random() * width;
        const homeY = Math.random() * height;

        return {
          x: homeX,
          y: homeY,
          homeX,
          homeY,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          baseSize: Math.random() * 1.4 + 0.7,
          twinkle: Math.random() * Math.PI * 2,
          driftPhase: Math.random() * Math.PI * 2,
          driftRadius: Math.random() * 18 + 8,
          driftSpeed: Math.random() * 0.45 + 0.25,
        };
      });
    }

    function draw() {
      frame += 0.012;
      activeContext.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        const floatingHomeX =
          particle.homeX + Math.cos(frame * particle.driftSpeed + particle.driftPhase) * particle.driftRadius;
        const floatingHomeY =
          particle.homeY + Math.sin(frame * particle.driftSpeed * 0.82 + particle.driftPhase) * particle.driftRadius;
        const homeDx = floatingHomeX - particle.x;
        const homeDy = floatingHomeY - particle.y;

        if (pointerRef.current.active) {
          const dx = pointerRef.current.x - particle.x;
          const dy = pointerRef.current.y - particle.y;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          if (distance < 260) {
            const pull = (1 - distance / 260) ** 2.2;
            const gatherLimit = Math.max(distance - 42, 0) / distance;
            particle.vx += dx * pull * gatherLimit * 0.011;
            particle.vy += dy * pull * gatherLimit * 0.011;
          }
          particle.vx += homeDx * 0.0016;
          particle.vy += homeDy * 0.0016;
        } else {
          particle.vx += homeDx * 0.009;
          particle.vy += homeDy * 0.009;
        }

        particle.vx += (Math.random() - 0.5) * 0.006;
        particle.vy += (Math.random() - 0.5) * 0.006;
        particle.vx *= pointerRef.current.active ? 0.9 : 0.94;
        particle.vy *= pointerRef.current.active ? 0.9 : 0.94;
        particle.x += particle.vx;
        particle.y += particle.vy;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
          if (distance < 118) {
            const opacity = (1 - distance / 118) * 0.16;
            activeContext.strokeStyle = `rgba(212, 168, 83, ${opacity})`;
            activeContext.lineWidth = 0.55;
            activeContext.beginPath();
            activeContext.moveTo(particle.x, particle.y);
            activeContext.lineTo(next.x, next.y);
            activeContext.stroke();
          }
        }

        const pulse = 0.45 + Math.sin(frame * 6 + particle.twinkle) * 0.25;
        const size = particle.baseSize + pulse * 0.8;
        activeContext.fillStyle = `rgba(226, 191, 116, ${0.38 + pulse * 0.45})`;
        activeContext.beginPath();
        activeContext.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        activeContext.fill();
      });

      animationId = window.requestAnimationFrame(draw);
    }

    function handlePointerMove(event: PointerEvent) {
      const rect = activeCanvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    }

    function handlePointerLeave() {
      pointerRef.current.active = false;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    activeCanvas.addEventListener("pointermove", handlePointerMove);
    activeCanvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      activeCanvas.removeEventListener("pointermove", handlePointerMove);
      activeCanvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="aesthetic-particles" aria-hidden="true" />;
}
