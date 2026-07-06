import { useEffect, useRef } from "react";

type Particle = {
  seed: number;
  theta: number;
  phi: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

function readVar(name: string, fallback: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export function VisualDustField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const stage = canvas;
    const context = ctx;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const pointer = { x: -9999, y: -9999, active: false };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let tick = 0;
    let sphereRadius = 260;

    function resize() {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      sphereRadius = Math.min(width * 0.34, height * 0.42, 430);

      stage.width = Math.max(1, Math.floor(width * dpr));
      stage.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = reduceMotion ? 300 : coarse || width < 768 ? 620 : 1680;
      particles = Array.from({ length: count }, (_, index) => {
        const golden = Math.PI * (3 - Math.sqrt(5));
        const y = 1 - (index / (count - 1)) * 2;
        const radius = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = golden * index;
        const phi = Math.asin(y);
        const baseX = width * 0.5 + Math.cos(theta) * radius * sphereRadius;
        const baseY = height * 0.48 + y * sphereRadius;

        return {
          seed: index * 0.137,
          theta,
          phi,
          x: baseX,
          y: baseY,
          vx: 0,
          vy: 0,
          size: 0.72 + ((index * 11) % 10) * 0.055,
        };
      });
    }

    function move(event: PointerEvent) {
      pointer.x = event.offsetX;
      pointer.y = event.offsetY;
      pointer.active = true;
    }

    function leave() {
      pointer.active = false;
    }

    function draw() {
      tick += reduceMotion ? 0.001 : 0.0026;
      context.clearRect(0, 0, width, height);

      const particleColor = readVar("--particle", "rgba(17,17,17,.62)");
      const cx = width * 0.5;
      const cy = height * 0.48;
      const focal = sphereRadius * 2.8;
      const attractRadius = coarse ? 96 : 180;

      particles.forEach((particle, index) => {
        const theta = particle.theta + tick * 0.36 + Math.sin(tick + particle.seed) * 0.006;
        const phi = particle.phi + Math.sin(tick * 0.54 + particle.seed) * 0.01;

        const sx = Math.cos(phi) * Math.cos(theta);
        const sy = Math.sin(phi);
        const sz = Math.cos(phi) * Math.sin(theta);
        const depth = (sz + 1) * 0.5;
        const perspective = focal / (focal - sz * sphereRadius * 0.78);

        let targetX = cx + sx * sphereRadius * perspective;
        let targetY = cy + sy * sphereRadius * perspective;

        if (pointer.active && !reduceMotion) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const dist = Math.hypot(dx, dy);
          if (dist < attractRadius) {
            const strength = (1 - dist / attractRadius) ** 1.9;
            const pull = 82 * strength;
            const drag = 18 * strength;
            targetX += (dx / Math.max(dist, 1)) * pull + (pointer.x - cx) * 0.055 * strength;
            targetY += (dy / Math.max(dist, 1)) * pull + (pointer.y - cy) * 0.055 * strength;
            particle.vx += (dx / Math.max(dist, 1)) * drag * 0.006;
            particle.vy += (dy / Math.max(dist, 1)) * drag * 0.006;
          }
        }

        particle.vx += (targetX - particle.x) * 0.022;
        particle.vy += (targetY - particle.y) * 0.022;
        particle.vx *= 0.88;
        particle.vy *= 0.88;
        particle.x += particle.vx;
        particle.y += particle.vy;

        context.beginPath();
        context.fillStyle = particleColor;
        context.globalAlpha = 0.22 + depth * 0.76;
        context.arc(particle.x, particle.y, particle.size * (0.68 + depth * 0.9), 0, Math.PI * 2);
        context.fill();

        if (index % 17 === 0 && depth > 0.56) {
          context.globalAlpha = 0.05 + depth * 0.08;
          context.fillRect(particle.x - 0.35, particle.y - 0.35, 0.7, 0.7);
        }
      });

      raf = window.requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={canvasRef} className="visual-dust-field" aria-hidden="true" />;
}
