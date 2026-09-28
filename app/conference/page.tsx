import Link from "next/link";

export default function ConferencePage() {
  return (
    <div className="wrap">
      <div className="grid-shell">
        <div className="block">
          <h1>The annual conference</h1>
          <p style={{ marginTop: 24, fontSize: "1.1rem" }}>
            Once a year, member clubs meet over Zoom. Every club gets a slot
            to present, answer questions from the room, and hear what
            everyone else has been doing. At the end, a panel names three
            standout clubs for the year.
          </p>
        </div>
      </div>

      <div className="grid-shell">
        <div className="block block--yellow">
          <p className="section-label" style={{ opacity: 0.75 }}>
            This year&apos;s question
          </p>
          <h2>
            What have you done to promote geography?
          </h2>
        </div>
      </div>

      <section className="prose-block">
        <p className="section-label">Format</p>
        <div className="grid-shell trio">
          <div className="block">
            <h3>Present</h3>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              Each club gets 20 minutes: a short presentation on what
              they&apos;ve done, answering this year&apos;s question, followed
              by 5–15 minutes of questions from the floor.
            </p>
          </div>
          <div className="block">
            <h3>Compare notes</h3>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              Clubs hear directly from others running the same kind of thing
              in a different school, city, or country — and what actually
              worked for them.
            </p>
          </div>
          <div className="block">
            <h3>Awards</h3>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              A panel reviews every presentation against this year&apos;s
              question and names the top three clubs at the close of the
              call.
            </p>
          </div>
        </div>
      </section>

      <div className="grid-shell">
        <div className="block block--blue" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h2>Want your club in the room?</h2>
            <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.9 }}>
              Sign up below. We&apos;ll follow up with a slot and the Zoom
              details once you&apos;re confirmed.
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
