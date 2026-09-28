import Link from "next/link";

export default function ConferencePage() {
  const borderWidth = "4px";
  const borderColor = "#000000";
  const mondrianYellow = "#FAC800";
  const mondrianRed = "#D9381E";
  const mondrianBlue = "#0055A5";

  return (
    <div className="wrap" style={{ padding: "32px 0" }}>
      {/* 
        MAIN MONDRIAN HERO COMPOSITION
        Asymmetrical split: Big yellow block top-left, hero text right, red & blue accents bottom
      */}
      <div
        className="grid-shell"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.8fr",
          border: `${borderWidth} solid ${borderColor}`,
          backgroundColor: borderColor,
          gap: borderWidth,
          boxSizing: "border-box",
        }}
      >
        {/* Left Primary Accent Panel */}
        <div
          style={{
            backgroundColor: mondrianYellow,
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#000000",
                opacity: 0.8,
              }}
            >
              This year&apos;s question
            </p>
            <h2
              style={{
                margin: "16px 0 0 0",
                fontSize: "2.2rem",
                lineHeight: 1.15,
                color: "#000000",
                fontWeight: 900,
              }}
            >
              What have you done to promote geography?
            </h2>
          </div>

          <div
            style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: `${borderWidth} solid ${borderColor}`,
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              We want to hear about your Geography club's projects - what did you set out to achieve, and how did it go?
            </span>
          </div>
        </div>

        {/* Right Main Text Panel (EXACT UNCHANGED PARAGRAPH) */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "40px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "2.8rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            The annual conference
          </h1>

          {/* EXACT ORIGINAL TEXT UNTOUCHED */}
          <p
            style={{
              marginTop: 24,
              fontSize: "1.1rem",
              lineHeight: 1.65,
              textAlign: "justify",
              hyphens: "auto",
              color: "#000000",
            }}
          >
            Our annual conference brings together the international community of geography clubs to showcase our projects, ideas, and ambitions. Each club will have [A SET TIME] to present their response to the year&apos;s question, followed by questions and discussion. Whilst the goal is to share the projects and ideas that the world&apos;s geography clubs come up with, the most impressive presentation will be awarded with &quot;Geography Club of the Year&quot; by our panel of judges. [INCLUDE OR NOT??? MAYBE NEXT YEAR]
          </p>
        </div>
      </div>

      {/* 
        FORMAT SECTION - MONDRIAN THREE-COLUMN ASYMMETRICAL BLOCK
      */}
      <section style={{ marginTop: "32px" }}>
        <p
          className="section-label"
          style={{
            marginBottom: "12px",
            fontSize: "0.85rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Format
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: `${borderWidth} solid ${borderColor}`,
            backgroundColor: borderColor,
            gap: borderWidth,
            boxSizing: "border-box",
          }}
        >
          {/* Format Box 1 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h3 style={{ margin: "8px 0 0 0", fontSize: "1.5rem", fontWeight: 800 }}>
                PRESENTATIONS
              </h3>
              <p
                style={{
                  marginTop: 16,
                  marginBottom: 0,
                  fontSize: "1rem",
                  lineHeight: 1.55,
                  textAlign: "justify",
                  hyphens: "auto",
                }}
              >
                Each club gets 20 minutes: a short presentation on what they&apos;ve done, answering this year&apos;s question, followed by 5–15 minutes of questions from the floor.
              </p>
            </div>
          </div>

          {/* Format Box 2 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h3 style={{ margin: "8px 0 0 0", fontSize: "1.5rem", fontWeight: 800 }}>
                QUESTIONS
              </h3>
              <p
                style={{
                  marginTop: 16,
                  marginBottom: 0,
                  fontSize: "1rem",
                  lineHeight: 1.55,
                  textAlign: "justify",
                  hyphens: "auto",
                }}
              >
                Clubs hear directly from others running the same kind of thing in a different school, city, or country — and what actually worked for them.
              </p>
            </div>
          </div>

          {/* Format Box 3 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h3 style={{ margin: "8px 0 0 0", fontSize: "1.5rem", fontWeight: 800 }}>
                AWARDS
              </h3>
              <p
                style={{
                  marginTop: 16,
                  marginBottom: 0,
                  fontSize: "1rem",
                  lineHeight: 1.55,
                  textAlign: "justify",
                  hyphens: "auto",
                }}
              >
                A panel reviews every presentation against this year&apos;s question and names the top three clubs at the close of the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        BOTTOM CTA - MONDRIAN BLUE BANNER WITH HEAVY BORDERS
      */}
      <div style={{ marginTop: "32px" }}>
        <div
          style={{
            border: `${borderWidth} solid ${borderColor}`,
            backgroundColor: mondrianBlue,
            color: "#FFFFFF",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <h2
              style={{
                margin: 0,
                fontSize: "2rem",
                color: "#FFFFFF",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}
            >
              Want your club in the room?
            </h2>
            <p
              style={{
                marginTop: 12,
                marginBottom: 0,
                opacity: 0.95,
                fontSize: "1.05rem",
                lineHeight: 1.5,
                textAlign: "justify",
                hyphens: "auto",
              }}
            >
              Sign up below. We&apos;ll follow up with a slot and the Zoom details once you&apos;re confirmed.
            </p>
          </div>

          <Link
            href="/signup"
            style={{
              display: "inline-block",
              padding: "16px 32px",
              backgroundColor: "#000000",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              border: `${borderWidth} solid #000000`,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            Sign up your club
          </Link>
        </div>
      </div>
    </div>
  );
}