export function PhotoDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "#050a0e" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 48,
        background: "rgba(6,220,130,0.04)",
        border: "1px solid rgba(6,220,130,0.15)",
        borderRadius: 16, padding: "40px 48px",
        maxWidth: 640, width: "100%"
      }}>

        {/* Photo slot */}
        <div style={{ flexShrink: 0, position: "relative" }}>
          <div style={{
            width: 140, height: 140, borderRadius: "50%",
            border: "3px solid rgba(6,220,130,0.6)",
            boxShadow: "0 0 30px rgba(6,220,130,0.25), inset 0 0 20px rgba(6,220,130,0.05)",
            background: "rgba(6,220,130,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", position: "relative"
          }}>
            {/* Placeholder avatar */}
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="rgba(6,220,130,0.4)" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="rgba(6,220,130,0.25)" />
            </svg>
            {/* Scanning line effect */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(6,220,130,0.8), transparent)",
              animation: "scan 2s linear infinite"
            }} />
          </div>
          {/* Online dot */}
          <div style={{
            position: "absolute", bottom: 8, right: 8,
            width: 16, height: 16, borderRadius: "50%",
            background: "rgba(6,220,130,1)",
            border: "2px solid #050a0e",
            boxShadow: "0 0 8px rgba(6,220,130,0.8)"
          }} />
        </div>

        {/* Info */}
        <div>
          <p style={{ color: "rgba(6,220,130,0.6)", fontFamily: "monospace", fontSize: 12, marginBottom: 6 }}>
            // your photo here
          </p>
          <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 900, margin: "0 0 4px" }}>
            Zeeshan Ahmad
          </h2>
          <p style={{ color: "rgba(6,220,130,0.8)", fontFamily: "monospace", fontSize: 14, margin: "0 0 12px" }}>
            &lt;AI_Engineer /&gt;
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            BCS Student · AWKUM · 2023–2027<br />
            CGPA 3.25 · Seeking AI Internship
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
