# International Geography Club Coalition

Next.js + TypeScript site: landing page with a member map, a conference info
page, and a signup form that emails you.

## Stack

- Next.js 14 (App Router) + TypeScript
- Mapbox GL JS for the member map
- Resend for the signup notification email
- No database — member clubs live in `lib/clubs.ts`, edited by hand

## 1. Local setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

- **`NEXT_PUBLIC_MAPBOX_TOKEN`** — free at https://account.mapbox.com/access-tokens/.
  Without this, the map shows a plain "map disabled" fallback instead of
  crashing.
- **`RESEND_API_KEY`** — free at https://resend.com/api-keys.
- **`RESEND_FROM_EMAIL`** — until you verify your own domain in Resend, use
  their shared sandbox sender `onboarding@resend.dev`. It works immediately,
  no setup.
- **`RESEND_TO_EMAIL`** — your inbox. This is where every signup lands.

Then:

```bash
npm run dev
```

Site's at `http://localhost:3000`.

## 2. Deploy (GitHub + Vercel)

1. Push this folder to a new GitHub repo.
2. In Vercel: **Add New → Project → Import** your repo. Vercel detects
   Next.js automatically — no config needed.
3. In the Vercel project's **Settings → Environment Variables**, add the
   same four variables from `.env.local`.
4. Deploy. You get a free `your-project.vercel.app` URL immediately. Every
   `git push` to `main` auto-redeploys.
5. Add a custom domain later under **Settings → Domains** — no code changes
   needed.

## 3. Approving a club signup

There's no admin panel or database on purpose — it's overkill at this
scale. When a signup email arrives and you want to approve it:

1. Open `lib/clubs.ts`.
2. Copy the example block in the comment, fill in the club's details
   (get lat/lng from Google Maps — right-click a spot, click the
   coordinates to copy them).
3. Commit and push. Vercel redeploys automatically and the club appears
   on the map and in the count on the landing page.

## Notes

- The signup form has a honeypot field (`website_url`) to cut down on bot
  spam — real users never see or fill it in.
- `next.config.mjs`, `tsconfig.json` are left close to Next.js defaults —
  no need to touch them.
- The design system (colors, type, the block-grid layout) lives in
  `app/globals.css` as CSS custom properties — change the five color
  variables at the top to re-theme the whole site.
