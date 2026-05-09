import React, { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width  = canvas.width  = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const CELL  = 52;
    const PULSE = "rgba(0,255,160,";
    const GLOW  = "rgba(6,220,130,";
    const DOT   = "rgba(0,240,150,";

    // Build random grid of segments
    const cols = Math.ceil(width  / CELL) + 2;
    const rows = Math.ceil(height / CELL) + 2;

    type Seg = { x1: number; y1: number; x2: number; y2: number };
    const segs: Seg[] = [];
    const nodePts: { x: number; y: number; phase: number; size: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * CELL;
        const y = r * CELL;
        let conn = 0;
        if (c + 1 < cols && Math.random() > 0.45) { segs.push({ x1: x, y1: y, x2: x + CELL, y2: y }); conn++; }
        if (r + 1 < rows && Math.random() > 0.45) { segs.push({ x1: x, y1: y, x2: x, y2: y + CELL }); conn++; }
        if (conn >= 1) nodePts.push({ x, y, phase: Math.random() * Math.PI * 2, size: conn >= 2 ? 3.5 : 2 });
      }
    }

    // Animated pulses
    type Pulse = { seg: Seg; t: number; speed: number; brightness: number };
    const pulses: Pulse[] = [];
    const MAX = 60;
    const spawnPulse = () => {
      if (pulses.length >= MAX || segs.length === 0) return;
      pulses.push({
        seg: segs[Math.floor(Math.random() * segs.length)],
        t: Math.random(),
        speed: 0.004 + Math.random() * 0.008,
        brightness: 0.65 + Math.random() * 0.35,
      });
    };
    for (let i = 0; i < 45; i++) spawnPulse();

    // CPU chip outlines (canvas)
    const drawChip = (cx: number, cy: number, s: number) => {
      const half = s / 2;
      const pins = 4;
      const pinLen = s * 0.14;
      const step = s / (pins + 1);

      ctx.save();
      ctx.strokeStyle = "rgba(6,180,120,0.55)";
      ctx.lineWidth = 1.2;

      // Outer box
      ctx.strokeRect(cx - half, cy - half, s, s);
      // Inner box
      ctx.globalAlpha = 0.3;
      ctx.strokeRect(cx - half * 0.6, cy - half * 0.6, s * 0.6, s * 0.6);
      ctx.globalAlpha = 1;

      // Pins
      for (let i = 1; i <= pins; i++) {
        const off = step * i - half;
        ctx.beginPath(); ctx.moveTo(cx + off, cy - half); ctx.lineTo(cx + off, cy - half - pinLen); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + off, cy + half); ctx.lineTo(cx + off, cy + half + pinLen); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx - half, cy + off); ctx.lineTo(cx - half - pinLen, cy + off); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + half, cy + off); ctx.lineTo(cx + half + pinLen, cy + off); ctx.stroke();
      }
      ctx.restore();
    };

    const chips = [
      { cx: width * 0.5,  cy: height * 0.5,  s: 150 },
      { cx: width * 0.1,  cy: height * 0.18, s: 75  },
      { cx: width * 0.9,  cy: height * 0.82, s: 85  },
      { cx: width * 0.82, cy: height * 0.2,  s: 60  },
      { cx: width * 0.18, cy: height * 0.8,  s: 65  },
    ];

    let frame = 0;
    let animId: number;

    const draw = () => {
      frame++;

      // Clear to transparent so CSS grid shows through
      ctx.clearRect(0, 0, width, height);

      // Draw pulsing nodes
      for (const n of nodePts) {
        n.phase += 0.018;
        const alpha = 0.2 + 0.25 * Math.sin(n.phase);
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 5);
        grd.addColorStop(0, `${DOT}${alpha})`);
        grd.addColorStop(1, `${DOT}0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `${DOT}${0.55 + 0.35 * Math.sin(n.phase)})`;
        ctx.fill();
      }

      // Draw chips
      for (const ch of chips) drawChip(ch.cx, ch.cy, ch.s);

      // Draw & advance pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t > 1) {
          pulses.splice(i, 1);
          spawnPulse();
          continue;
        }
        const px = p.seg.x1 + (p.seg.x2 - p.seg.x1) * p.t;
        const py = p.seg.y1 + (p.seg.y2 - p.seg.y1) * p.t;

        // Trail
        const trailSteps = 20;
        for (let j = 1; j < trailSteps; j++) {
          const bt = p.t - p.speed * j * 3.5;
          if (bt < 0) break;
          const tx = p.seg.x1 + (p.seg.x2 - p.seg.x1) * bt;
          const ty = p.seg.y1 + (p.seg.y2 - p.seg.y1) * bt;
          const a  = (1 - j / trailSteps) * p.brightness * 0.55;
          ctx.beginPath();
          ctx.arc(tx, ty, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `${PULSE}${a})`;
          ctx.fill();
        }

        // Glow head
        const g = ctx.createRadialGradient(px, py, 0, px, py, 10);
        g.addColorStop(0, `${PULSE}${p.brightness})`);
        g.addColorStop(1, `${PULSE}0)`);
        ctx.beginPath();
        ctx.arc(px, py, 10, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,255,220,${p.brightness})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* Static circuit board grid — CSS, shows instantly */}
      <div
        className="fixed inset-0 pointer-events-none z-[-2]"
        style={{
          backgroundColor: "#050a0e",
          backgroundImage: `
            linear-gradient(rgba(6,180,120,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,180,120,0.18) 1px, transparent 1px),
            linear-gradient(rgba(6,180,120,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,180,120,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px, 52px 52px, 13px 13px, 13px 13px",
          backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
        }}
      />
      {/* Animated canvas on top — pulses, glows, chips */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      />
    </>
  );
}
