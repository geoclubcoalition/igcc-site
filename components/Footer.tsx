import Link from "next/link";

export default function Footer() {
  const contactEmail = "geoclubcoalition@gmail.com";

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: "#0047AB",
        color: "#ffffff",
        padding: "24px 0",
        borderTop: "2px solid var(--color-black, #000000)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Left Info: Name & Tagline inline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>
            International Geography Club Coalition
          </span>
          <span style={{ opacity: 0.6, userSelect: "none" }}>|</span>
          <span style={{ opacity: 0.9, fontSize: "0.95rem" }}>
            Bringing the world's school geography clubs together.
          </span>
        </div>

        {/* Right Info: Clear contact link with double-underline fix */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.95rem", opacity: 0.9 }}>Get in touch:</span>
          <a
            href={`mailto:${contactEmail}`}
            style={{
              color: "#ffffff",
              textDecoration: "none", // Removes default & global pseudo-element double underlines
              borderBottom: "1px solid rgba(255, 255, 255, 0.7)", // Clean, single underline
              fontWeight: 600,
              fontSize: "0.95rem",
              boxShadow: "none", // Clears potential box-shadow text decorations from global CSS
              outline: "none",
            }}
          >
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}