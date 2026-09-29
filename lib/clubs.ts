import { Club } from "./types";

/**
 * Member clubs. There's no database — this file is the source of truth
 * for both the map and the member count on the landing page.
 *
 * To add a club after approving a signup: copy the block below, fill it
 * in, commit, and push. Vercel redeploys automatically.
 *
 * {
 *   id: "unique-slug",
 *   name: "Club name",
 *   school: "School name",
 *   country: "Country",
 *   lat: 0,
 *   lng: 0,
 *   blurb: "One sentence on what the club does.",
 *   website: "https://...", // optional
 * },
 */
export const clubs: Club[] = [
  {
    id: "3",
    name: "Hale Geographic Society",
    school: "Hale School",
    country: "Australia",
    lat: -31.9505,
    lng: 115.8605,
    blurb: "Founding club — Perth, Western Australia.",
  },
  {
    id: "2",
    name: "Spidola Geographical Society",
    school: "Jelgava Spidola State Gymnasium",
    country: "Latvia",
    lat: 56.64581261691961,
    lng: 23.70948334732631,
    blurb: "Founding club — Jelgava, Latvia.",
  },
];
