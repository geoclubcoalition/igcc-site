import Link from "next/link";
import ClubMap from "@/components/ClubMap";
import { clubs } from "@/lib/clubs";

export default function HomePage() {
  const countries = new Set(clubs.map((c) => c.country)).size;

  return (
    <div className="wrap">
      <div className="grid-shell hero-grid">
        <div className="block">
          <h1>
            School geography clubs, talking to each other for once.
          </h1>
          <p style={{ marginTop: 24, fontSize: "1.1rem" }}>
            The International Geography Club Coalition connects school
            geography clubs around the world. Once a year, members meet over
            Zoom to show what they&apos;ve actually done — projects, events,
            campaigns — and answer the same question everyone else is
            answering too.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/conference" className="btn btn--primary">
              See this year&apos;s conference
            </Link>
            <Link href="/signup" className="btn" style={{ borderColor: "var(--color-black)" }}>
              Sign up your club
            </Link>
          </div>
        </div>
        <div className="block block--red">
          <div className="stat-row" style={{ flexDirection: "column", gap: 28 }}>
            <div className="stat">
              <span className="n">{clubs.length}</span>
              <span className="l">member club{clubs.length === 1 ? "" : "s"}</span>
            </div>
            <div className="stat">
              <span className="n">{countries}</span>
              <span className="l">countr{countries === 1 ? "y" : "ies"}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="prose-block">
        <p className="section-label">Member clubs</p>
        <div className="map-shell">
          <ClubMap clubs={clubs} />
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
      </section>

      <div className="grid-shell">
        <div className="block block--black" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h2>Don&apos;t see your club here yet?</h2>
            <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.85 }}>
              If your school has a geography club — or you&apos;re thinking
              about starting one — this is exactly who it&apos;s for.
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
