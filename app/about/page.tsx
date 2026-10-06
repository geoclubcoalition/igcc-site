import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="wrap">
      <div className="grid-shell">
        <div className="block">
          <h1>About the coalition</h1>
          <p style={{ marginTop: 24, fontSize: "1.1rem" }}>
            School geography clubs mostly exist on their own — a noticeboard,
            a lunchtime meeting, a handful of students who care more about
            maps and places than the rest of their year group. There was
            nothing connecting them to each other. The International
            Geography Club Coalition is that connection.
          </p>
        </div>
      </div>

      <section className="prose-block">
        <p className="section-label">What we do</p>
        <div className="grid-shell trio">
          <div className="block">
            <h3>Connect</h3>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              Member clubs show up on one map and one list, so a club in
              Perth can see a club in Latvia exists — and get in touch.
            </p>
          </div>
          <div className="block">
            <h3>Meet</h3>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              Once a year, member clubs present to each other over Zoom,
              answering the same question and comparing what actually
              worked.
            </p>
          </div>
          <div className="block">
            <h3>Recognise</h3>
            <p style={{ marginTop: 12, marginBottom: 0 }}>
              A panel names the standout clubs each year, so running a good
              club gets a real audience, not just a line in a school
              newsletter.
            </p>
          </div>
        </div>
      </section>

      <div className="grid-shell">
        <div className="block block--yellow">
          <p className="section-label" style={{ opacity: 0.75 }}>
            How it started
          </p>
          <p style={{ marginTop: 12, marginBottom: 0, fontSize: "1.05rem" }}>
            The coalition started with one club — Hale Geographic Society in
            Perth, Western Australia — and a question: are there enough
            school geography clubs out there to make a global network worth
            running? It turns out there are. The founding members found each
            other through the International Geography Olympiad community, a
            small, scattered group of students who already cared enough
            about geography to compete in it.
          </p>
        </div>
      </div>

      <div className="grid-shell">
        <div className="block block--blue" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h2>Want in?</h2>
            <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.9 }}>
              If your school has a geography club, or you&apos;re thinking
              about starting one, sign up below.
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