"use client";

import { useEffect, useRef } from "react";
import type { Club } from "@/lib/types";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function ClubMap({ clubs }: { clubs: Club[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("mapbox-gl").Map | null>(null);

  useEffect(() => {
    if (!TOKEN || !containerRef.current || mapRef.current) return;

    let cancelled = false;

    import("mapbox-gl").then((mapboxgl) => {
      if (cancelled || !containerRef.current) return;

      mapboxgl.default.accessToken = TOKEN;

      const map = new mapboxgl.default.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [10, 20],
        zoom: 1.2,
        attributionControl: true,
      });

      map.addControl(new mapboxgl.default.NavigationControl(), "top-right");

      clubs.forEach((club) => {
        const el = document.createElement("div");
        el.style.width = "16px";
        el.style.height = "16px";
        el.style.background = "#E30613";
        el.style.border = "2px solid #0A0A0A";
        el.style.cursor = "pointer";

        const popup = new mapboxgl.default.Popup({ offset: 14 }).setHTML(
          `<strong>${escapeHtml(club.name)}</strong><br/>${escapeHtml(
            club.school
          )}, ${escapeHtml(club.country)}<br/>${escapeHtml(club.blurb)}`
        );

        new mapboxgl.default.Marker({ element: el })
          .setLngLat([club.lng, club.lat])
          .setPopup(popup)
          .addTo(map);
      });

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [clubs]);

  if (!TOKEN) {
    return (
      <div className="map-fallback">
        Map disabled — add NEXT_PUBLIC_MAPBOX_TOKEN to your environment to
        show member clubs on a live map.
      </div>
    );
  }

  return <div ref={containerRef} style={{ height: "100%", width: "100%" }} />;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
