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
    id: "hale",
    name: "Hale Geographic Society",
    school: "Hale School",
    country: "Australia",
    lat: -31.9505,
    lng: 115.8605,
    blurb: "Founding club",
    about: "The Hale Geographic Society started in 2022 as a way to get students involved in Geography who do not take it as a subject. Oriented around our projects, we've set up a wayfinding pole, a 3D photogrammetry map, interactive maps showing the lives of soldiers who were past students, and hold regular Geoguessr Tournaments and photography competitions.",
    colour: "red"
  },
  {
    id: "spidola",
    name: "Spidola Geographical Society",
    school: "Jelgava Spidola State Gymnasium",
    country: "Latvia",
    lat: 56.64581261691961,
    lng: 23.70948334732631,
    blurb: "Founding club",
    colour: "red"
  },
  {
    id: "kartal",
    name: "Kartal Geographical Society",
    school: "İstanbul Kartal Anadolu İmam Hatip Lisesi",
    country: "Türkiye",
    lat: 40.90338026989995, 
    lng: 29.18208804324499,
    blurb: "Member club since 2026",
    about: "Our club has been in operation since 2024, when Türkiye's national geography olympiad exams started. Our club members have earned 5 national medals. For the last two years, we have organized KarGeo, an annual day trip to the Princes' Islands, where participants from different schools in the nearby area come together to study geography and complete the tests that were created for the occasion. Our club also is involved with the education of potential iGeo students in our school, preparing them for the national selection through lessons from alumni.",
    colour: "yellow"
  },
];
