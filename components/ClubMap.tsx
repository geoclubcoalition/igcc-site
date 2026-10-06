"use client";

import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Club } from "@/lib/types";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const DEGREES_PER_SECOND = 4; // one full turn every 90 seconds
const RESUME_DELAY_MS = 2000;

const DEFAULT_CENTER: [number, number] = [115.86, 10];
const DEFAULT_ZOOM = 1.4;

const LAND = "#FFFFFF";
const OCEAN = "#0047AB";
const BORDER = "#0A0A0A";
const SPACE = "#FFD500";

const HIDDEN_LABELS = ["RU", "BY"];

const PIN_COLOURS: Record<string, string> = {
  red: "#E30613",
  blue: "#0047AB",
  yellow: "#FFD500",
};
const DEFAULT_PIN_COLOUR = PIN_COLOURS.red;

function pinColour(colour: string | undefined): string {
  if (!colour) return DEFAULT_PIN_COLOUR;
  return PIN_COLOURS[colour] ?? DEFAULT_PIN_COLOUR;
}


function flattenStyle(map: import("mapbox-gl").Map) {
  const layers = map.getStyle()?.layers ?? [];
  for (const layer of layers) {
    const sourceLayer = (layer as { "source-layer"?: string })["source-layer"];
    try {
      if (layer.type === "background") {
        map.setPaintProperty(layer.id, "background-color", LAND);
      } else if (layer.type === "fill" && sourceLayer === "water") {
        map.setPaintProperty(layer.id, "fill-color", OCEAN);
        map.setPaintProperty(layer.id, "fill-opacity", 1);
      } else if (
        layer.type === "line" &&
        sourceLayer === "admin" &&
        layer.id.startsWith("admin-0") &&
        !layer.id.includes("bg")
      ) {
        map.setPaintProperty(layer.id, "line-color", BORDER);
        map.setPaintProperty(layer.id, "line-opacity", 1);
      } else if (
        layer.type === "symbol" &&
        layer.id.startsWith("country-label")
      ) {
        map.setPaintProperty(layer.id, "text-color", BORDER);
        map.setPaintProperty(layer.id, "text-halo-color", LAND);
        map.setPaintProperty(layer.id, "text-halo-width", 1.5);
        map.setPaintProperty(layer.id, "text-opacity", 1);
                const existingFilter = layer.filter ?? true;
        map.setFilter(layer.id, [
          "all",
          existingFilter,
          ["!", ["in", ["get", "iso_3166_1"], ["literal", HIDDEN_LABELS]]],
        ]);
      } else {
        map.setLayoutProperty(layer.id, "visibility", "none");
      }
    } catch {
      // A layer that rejects a property is left as-is.
    }
  }
}

export default function ClubMap({ clubs }: { clubs: Club[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("mapbox-gl").Map | null>(null);

  useEffect(() => {
    if (!TOKEN || !containerRef.current || mapRef.current) return;

    let cancelled = false;
    let frame = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;

    import("mapbox-gl").then((mod) => {
      if (cancelled || !containerRef.current) return;

      const mapboxgl = mod.default;
      mapboxgl.accessToken = TOKEN;

      const map = new mapboxgl.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        projection: "globe",
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        scrollZoom: false,
        attributionControl: true,
      });

      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();

      map.on("style.load", () => {
        flattenStyle(map);
        map.setFog({
        color: SPACE,
        "high-color": SPACE,
        "horizon-blend": 0,
        "space-color": SPACE,
        "star-intensity": 0,
        range: [20, 40],
      });
      });

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      let paused = reduceMotion;
      let popupsOpen = 0;
      let last = performance.now();

      const tick = (now: number) => {
        const dt = (now - last) / 1000;
        last = now;
        if (!paused && popupsOpen === 0) {
          const c = map.getCenter();
          c.lng -= DEGREES_PER_SECOND * dt;
          map.jumpTo({ center: c });
        }
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);

      const pause = () => {
        paused = true;
        if (resumeTimer) clearTimeout(resumeTimer);
      };
      const resume = () => {
        if (reduceMotion) return;
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
          paused = false;
        }, RESUME_DELAY_MS);
      };

      map.on("mousedown", pause);
      map.on("touchstart", pause);
      map.on("mouseup", resume);
      map.on("touchend", resume);
      map.on("dragend", resume);

      clubs.forEach((club) => {
        const el = document.createElement("div");
        el.style.width = "16px";
        el.style.height = "16px";
        el.style.background = pinColour(club.colour);
        el.style.border = "2px solid #0A0A0A";
        el.style.cursor = "pointer";

        const popup = new mapboxgl.Popup({ offset: 14 }).setHTML(
          `<strong>${escapeHtml(club.name)}</strong><br/>${escapeHtml(
            club.school
          )}, ${escapeHtml(club.country)}<br/>${escapeHtml(club.blurb)}`
        );
        popup.on("open", () => {
          popupsOpen += 1;
        });
        popup.on("close", () => {
          popupsOpen = Math.max(0, popupsOpen - 1);
        });

        new mapboxgl.Marker({ element: el })
          .setLngLat([club.lng, club.lat])
          .setPopup(popup)
          .addTo(map);
      });

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      if (resumeTimer) clearTimeout(resumeTimer);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [clubs]);

  if (!TOKEN) {
    return (
      <div className="map-fallback">
        Map disabled. Please contact administration at geoclubcoalition@gmail.com to resolve.
      </div>
    );
  }

    const holdTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startZoom = (direction: 1 | -1) => {
    const step = () => {
      const map = mapRef.current;
      if (!map) return;
      map.setZoom(map.getZoom() + direction * 0.1);
    };
    step(); // fire immediately so a quick tap still zooms a real amount
    holdTimer.current = setInterval(step, 30);
  };

  const stopZoom = () => {
    if (holdTimer.current) {
      clearInterval(holdTimer.current);
      holdTimer.current = null;
    }
  };

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div ref={containerRef} style={{ height: "100%", width: "100%" }} />
      <div className="map-controls">
        <button
          type="button"
          aria-label="Zoom in"
          onMouseDown={() => startZoom(1)}
          onMouseUp={stopZoom}
          onMouseLeave={stopZoom}
          onTouchStart={() => startZoom(1)}
          onTouchEnd={stopZoom}
        >
          +
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          onMouseDown={() => startZoom(-1)}
          onMouseUp={stopZoom}
          onMouseLeave={stopZoom}
          onTouchStart={() => startZoom(-1)}
          onTouchEnd={stopZoom}
        >
          −
        </button>
      </div>
    </div>
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}