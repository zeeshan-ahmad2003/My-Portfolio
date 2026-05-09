import React, { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; speed: number; size: number; char: string }[] = [];
    const chars = "01".split("");

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.5 + Math.random() * 2,
        size: 10 + Math.random() * 14,
        char: chars[Math.floor(Math.random() * chars.length)]
      });
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 15, 0.1)"; // Fade effect
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(6, 182, 212, 0.4)"; // Cyan color
      ctx.font = "14px 'Fira Code', monospace";

      particles.forEach(p => {
        ctx.fillText(p.char, p.x, p.y);
        p.y += p.speed;

        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * width;
          p.char = chars[Math.floor(Math.random() * chars.length)];
        }
        
        // Randomly change chars to make it matrix-like
        if (Math.random() > 0.98) {
          p.char = chars[Math.floor(Math.random() * chars.length)];
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
}
