import Link from "next/link";
import ClubMap from "@/components/ClubMap";
import { clubs } from "@/lib/clubs";

export default function HomePage() {
  const countries = new Set(clubs.map((c) => c.country)).size;
  const borderWidth = "2px"; // Change this value to adjust border width consistently across all blocks
  const borderColor = "var(--color-black, #000000)";

  return (
    <div className="wrap">
      {/* Hero Section - Split equally into 2 columns */}
      <div
        className="grid-shell hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: `${borderWidth} solid ${borderColor}`,
          boxSizing: "border-box",
        }}
      >
        {/* Left Hero Block */}
        <div
          className="block"
          style={{
            padding: "32px",
            borderRight: `${borderWidth} solid ${borderColor}`,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#FFD500",
          }}
        >
          <h1 style={{ margin: 0 }}>
            The International Geography Club Coalition.
          </h1>
          <p style={{ marginTop: 24, fontSize: "1.1rem" }}>
            Proudly connecting school geography clubs around the world to foster a global appreciation and benefit from geography.
            Existing to serve as a connective tool across the world's Geography Clubs, we host the annual Geography Club Conference,
            giving a platform for clubs to showcase their projects and learn from others in our joint love of Geography.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/conference" className="btn btn--primary">
              See this year&apos;s conference
            </Link>
            <Link href="/signup" className="btn" style={{ borderColor: borderColor }}>
              Sign up your club
            </Link>
          </div>
        </div>

        {/* Right Block - Map */}
        <div
          className="block"
          style={{
            padding: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: "400px",
            boxSizing: "border-box",
          }}
        >
          <div className="map-shell" style={{ width: "100%", height: "100%", flex: 1 }}>
            <ClubMap clubs={clubs} />
          </div>
        </div>
      </div>

      {/* Banner Section directly below Hero */}
      <div className="grid-shell" style={{ marginTop: "-2px" }}>
        <div
          className="block block--red"
          style={{
            border: `${borderWidth} solid ${borderColor}`,
            padding: "24px 32px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            boxSizing: "border-box",
          }}
        >
          <div className="stat" style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span className="n">{clubs.length}</span>
            <span className="l">member club{clubs.length === 1 ? "" : "s"}</span>
          </div>
          <div className="stat" style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span className="n">{countries}</span>
            <span className="l">countr{countries === 1 ? "y" : "ies"}</span>
          </div>
          <p className="section-label">Member clubs</p>
        </div>
        <ul className="club-list">
          {clubs.map((club) => (
            <li key={club.id}>
              <span className="name">
                {club.name}
                <span style={{ fontWeight: 400 }}> — {club.school}</span>
              </span>
              <span className="place">{club.country}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Footer Block */}
      <div className="grid-shell">
        <div
          className="block block--black"
          style={{
            border: `${borderWidth} solid ${borderColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            padding: "32px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>Don&apos;t see your club here yet?</h2>
            <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.85 }}>
              If your school has a geography club, or are trying to start one, then this coalition is for you.
            </p>
          </div>
          <Link href="/signup" className="btn btn--on-black">
            Sign up your club
          </Link>
        </div>
      </div>
    </div>
  );
}