"use client";

import { useState } from "react";
import type { Club } from "@/lib/types";

export default function ClubList({ clubs }: { clubs: Club[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className="club-list">
      {clubs.map((club) => {
        const open = openId === club.id;
        return (
          <li key={club.id} className="club-list__item">
            <button
              type="button"
              className="club-list__row"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : club.id)}
            >
              <span className="name">
                {club.name}
                <span style={{ fontWeight: 400 }}> — {club.school}</span>
              </span>
              <span className="club-list__right">
                <span className="place">{club.country}</span>
                <span className="club-list__chevron" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </span>
            </button>
            {open && (
            <div className="club-list__detail">
                <p style={{ margin: 0 }}>{club.about ?? club.blurb}</p>
            </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}