import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ background: "#050a0e" }}>
      <div className="flex flex-col items-center gap-8">

        {/* Label */}
        <p style={{ color: "rgba(6,220,130,0.7)", fontFamily: "monospace", fontSize: 13 }}>
          // share button — hero section
        </p>

        {/* The button itself */}
        <button
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 24px",
            borderRadius: 8,
            border: copied ? "1px solid rgba(6,220,130,0.8)" : "1px solid rgba(6,220,130,0.35)",
            background: copied ? "rgba(6,220,130,0.15)" : "rgba(6,220,130,0.07)",
            color: copied ? "rgba(6,220,130,1)" : "rgba(6,220,130,0.8)",
            fontFamily: "monospace",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: copied ? "0 0 18px rgba(6,220,130,0.3)" : "none",
          }}
        >
          {copied ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Portfolio Link
            </>
          )}
        </button>

        {/* Context — shows it next to the existing buttons */}
        <div style={{ opacity: 0.4, fontFamily: "monospace", fontSize: 12, color: "#aaa", textAlign: "center" }}>
          Sits alongside your existing hero buttons
        </div>

        <div style={{ display: "flex", gap: 12, opacity: 0.35 }}>
          <div style={{ padding: "10px 20px", borderRadius: 8, background: "rgba(6,220,130,0.9)", color: "#050a0e", fontFamily: "monospace", fontSize: 13, fontWeight: 700 }}>
            &gt;_ Initialize Contact
          </div>
          <div style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", color: "#aaa", fontFamily: "monospace", fontSize: 13 }}>
            GitHub Logs
          </div>
          <div style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(6,220,130,0.35)", color: "rgba(6,220,130,0.8)", fontFamily: "monospace", fontSize: 13 }}>
            Copy Link
          </div>
        </div>

      </div>
    </div>
  );
}
