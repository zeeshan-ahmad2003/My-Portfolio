export function PhotoPro() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "#050a0e" }}
    >
      <div style={{
        display: "flex", alignItems: "center", gap: 52,
        background: "rgba(6,220,130,0.04)",
        border: "1px solid rgba(6,220,130,0.18)",
        borderRadius: 20, padding: "44px 52px",
        maxWidth: 660, width: "100%",
        boxShadow: "0 0 60px rgba(6,220,130,0.06)",
      }}>

        {/* Photo */}
        <div style={{ flexShrink: 0, position: "relative" }}>
          {/* Outer glow ring */}
          <div style={{
            position: "absolute", inset: -6,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, rgba(6,220,130,0.8), rgba(0,200,255,0.4), rgba(6,220,130,0.8))",
            filter: "blur(6px)",
            animation: "spin 6s linear infinite",
          }} />
          {/* Photo circle */}
          <div style={{
            width: 150, height: 150, borderRadius: "50%",
            border: "3px solid rgba(6,220,130,0.7)",
            overflow: "hidden", position: "relative",
            background: "linear-gradient(135deg, #0a1a14, #050a0e)",
            boxShadow: "0 0 30px rgba(6,220,130,0.3)",
          }}>
            <img
              src="/zeeshan-photo.png"
              alt="Zeeshan Ahmad"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "contrast(1.08) brightness(1.05) saturate(1.1)",
              }}
            />
          </div>
          {/* Online dot */}
          <div style={{
            position: "absolute", bottom: 8, right: 8,
            width: 18, height: 18, borderRadius: "50%",
            background: "rgba(6,220,130,1)",
            border: "2.5px solid #050a0e",
            boxShadow: "0 0 10px rgba(6,220,130,0.9)",
            animation: "pulse 2s ease-in-out infinite",
          }} />
        </div>

        {/* Info */}
        <div>
          <p style={{ color: "rgba(6,220,130,0.55)", fontFamily: "monospace", fontSize: 12, marginBottom: 8, letterSpacing: 1 }}>
            // ai_engineer.profile
          </p>
          <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 4px", letterSpacing: -0.5 }}>
            Zeeshan Ahmad
          </h2>
          <p style={{ color: "rgba(6,220,130,0.85)", fontFamily: "monospace", fontSize: 14, margin: "0 0 14px" }}>
            &lt;AI_Engineer /&gt;
          </p>
          <div style={{ width: 40, height: 2, background: "rgba(6,220,130,0.5)", borderRadius: 2, marginBottom: 14 }} />
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.75, margin: 0 }}>
            BCS Student · AWKUM<br />
            2023–2027 · CGPA 3.25<br />
            Seeking AI Internship
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(6,220,130,0.9); }
          50% { box-shadow: 0 0 20px rgba(6,220,130,1); }
        }
      `}</style>
    </div>
  );
}
