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

    const CYAN = "rgba(6, 182, 212,";
    const GREEN = "rgba(16, 185, 129,";

    // --- Matrix columns ---
    const fontSize = 14;
    const cols = Math.floor(width / fontSize);
    const drops: number[] = Array(cols).fill(1).map(() => Math.random() * -50);
    const chars = "アイウエオカキクケコ0123456789ABCDEF<>{}[]()=>abcdefAI_ML".split("");

    // --- Neural network nodes ---
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodeCount = 55;
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 2 + Math.random() * 2,
    }));
    const CONNECTION_DIST = 160;

    let animId: number;
    let frame = 0;

    const draw = () => {
      frame++;

      // Dark fade — thicker than typical matrix so neural net stays visible
      ctx.fillStyle = "rgba(5, 7, 15, 0.18)";
      ctx.fillRect(0, 0, width, height);

      // --- Draw matrix rain ---
      ctx.font = `${fontSize}px 'Fira Code', monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (height / fontSize);
        // Head of the column is bright white-cyan, trail fades
        const alpha = 0.08 + Math.random() * 0.12;
        ctx.fillStyle = `${CYAN} ${alpha})`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Bright head
        if (Math.random() > 0.975) {
          ctx.fillStyle = `rgba(200, 255, 255, 0.85)`;
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      // --- Move nodes ---
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // --- Draw connections ---
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.35;
            // Alternate cyan / green tint by pair index
            const color = (i + j) % 3 === 0 ? GREEN : CYAN;
            ctx.strokeStyle = `${color} ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // --- Draw nodes ---
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = 0.55 + 0.45 * Math.sin(frame * 0.03 + i);
        const color = i % 3 === 0 ? GREEN : CYAN;

        // Glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        grd.addColorStop(0, `${color} ${0.35 * pulse})`);
        grd.addColorStop(1, `${color} 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `${color} ${0.8 * pulse})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
}
