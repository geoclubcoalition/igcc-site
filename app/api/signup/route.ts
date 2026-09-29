import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface SignupPayload {
  clubName?: string;
  school?: string;
  country?: string;
  contactName?: string;
  contactEmail?: string;
  link?: string;
  about?: string;
  website_url?: string; // honeypot
}

const REQUIRED_FIELDS: (keyof SignupPayload)[] = [
  "clubName",
  "school",
  "country",
  "contactName",
  "contactEmail",
  "about",
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "club";
}

// Escapes a value for safe use inside a single- or double-quoted TS string.
function jsString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

export async function POST(request: Request) {
  let payload: SignupPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot tripped — pretend success, don't email, don't tell the bot why.
  if (payload.website_url) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error("Signup received but RESEND_API_KEY or RESEND_TO_EMAIL is not set.");
    return NextResponse.json(
      { error: "Signups aren't configured yet. Try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { clubName, school, country, contactName, contactEmail, link, about } = payload;

  const snippet = [
    "  {",
    `    id: "${slugify(clubName!)}",`,
    `    name: "${jsString(clubName!)}",`,
    `    school: "${jsString(school!)}",`,
    `    country: "${jsString(country!)}",`,
    "    lat: 0, // TODO: fill in from Google Maps",
    "    lng: 0, // TODO: fill in from Google Maps",
    `    blurb: "${jsString(about!.split("\n")[0].slice(0, 140))}",`,
    "  },",
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `IGCC Signups <${fromEmail}>`,
      to: toEmail,
      replyTo: contactEmail,
      subject: `New IGCC signup: ${clubName} (${school}, ${country})`,
      text: [
        `Club: ${clubName}`,
        `School: ${school}`,
        `Country: ${country}`,
        `Contact: ${contactName} <${contactEmail}>`,
        link ? `Link: ${link}` : null,
        "",
        "About the club:",
        about,
        "",
        "---",
        "Paste into lib/clubs.ts (fill in lat/lng):",
        "",
        snippet,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Couldn't send that. Try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Signup send failed:", err);
    return NextResponse.json({ error: "Couldn't send that. Try again." }, { status: 500 });
  }
}