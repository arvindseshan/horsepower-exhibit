"use client";

import { useCallback, useState } from "react";
import { q1Hotspots } from "@/data/exhibit";
import { CiteGroup } from "./Cite";

type HotspotId = (typeof q1Hotspots)[number]["id"];

/**
 * Hotspot hit boxes as % of the photo frame (example: late-19th-c. horse-drawn street vehicle).
 * Feed → stables → manure: three equal columns in the bottom half, flush edge-to-edge (wider band on the left).
 */
const regions: Record<HotspotId, { left: number; top: number; width: number; height: number }> = {
  feed: { left: 0, top: 50, width: 13, height: 50 },
  stables: { left: 13, top: 50, width: 13, height: 50 },
  manure: { left: 26, top: 50, width: 13, height: 50 },
  /* Labor: one-third of prior width (40% → ~13.3%) so the hit target does not extend as far right. */
  labor: { left: 32, top: 0, width: 13.33, height: 34 },
  /* Body band: bottom flush with infrastructure (top 64%); left edge flush with labor’s right edge (32 + 13.33). */
  vehicles: { left: 45.33, top: 14, width: 48, height: 50 },
  infrastructure: { left: 44, top: 64, width: 52, height: 34 },
};

const WIKI_OMNIBUS =
  "https://upload.wikimedia.org/wikipedia/commons/1/10/Omnibus_a_chevaux_vers_1890_CGO_Paris.jpg";
const IMG_W = 820;
const IMG_H = 482;

export function HorseCarriageHotspots() {
  const [activeId, setActiveId] = useState<HotspotId | null>(null);
  const active = q1Hotspots.find((h) => h.id === activeId) ?? null;

  const clear = useCallback(() => setActiveId(null), []);

  return (
    <div className="mt-8 rounded-[2rem] border border-stone-300/80 bg-gradient-to-b from-[#f4efe8] to-[#e8dfd4] p-4 md:p-6">
      <p className="font-sans text-sm text-stone-600">
        Hover or tap a region on the image.{" "}
        {activeId ? (
          <button
            type="button"
            className="font-medium text-[var(--accent)] underline decoration-dotted underline-offset-2 hover:text-stone-900"
            onClick={clear}
          >
            Clear
          </button>
        ) : null}
      </p>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:items-stretch">
        <figure className="mx-auto w-full max-w-4xl">
          {/*
            Fixed aspect-ratio frame so % hotspot buttons always have a non-zero containing block height
            (otherwise the relative box can be 0px tall before paint and all hit targets collapse).
          */}
          <div
            className="relative w-full overflow-hidden rounded-xl border border-stone-300/80 shadow-md"
            style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
          >
            <img
              src={WIKI_OMNIBUS}
              width={IMG_W}
              height={IMG_H}
              alt="Historical photograph: three-horse team drawing a large double-deck horse-drawn vehicle on a city street"
              className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              decoding="async"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 z-[1]">
              {q1Hotspots.map((h) => {
                const r = regions[h.id];
                const on = activeId === h.id;
                return (
                  <button
                    key={h.id}
                    type="button"
                    className={[
                      "pointer-events-auto absolute cursor-pointer touch-manipulation rounded-md border-2 transition-colors",
                      on
                        ? "border-[var(--accent)] bg-amber-100/25"
                        : "border-transparent bg-transparent hover:bg-white/20",
                    ].join(" ")}
                    style={{
                      left: `${r.left}%`,
                      top: `${r.top}%`,
                      width: `${r.width}%`,
                      height: `${r.height}%`,
                    }}
                    aria-label={h.label}
                    aria-pressed={on}
                    tabIndex={0}
                    onPointerEnter={() => setActiveId(h.id)}
                    onClick={() => setActiveId(h.id)}
                    onPointerDown={(e) => {
                      if (e.pointerType === "touch" || e.pointerType === "pen") {
                        setActiveId(h.id);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId((cur) => (cur === h.id ? null : h.id));
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
          <figcaption className="mt-2 font-sans text-xs leading-snug text-stone-600">
            Paris omnibus à impériale, c. 1890 — double-deck “imperial” horse omnibus (public domain).{" "}
            <a
              className="text-[var(--accent)] underline-offset-2 hover:underline"
              href="https://commons.wikimedia.org/wiki/File:Omnibus_a_chevaux_vers_1890_CGO_Paris.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Wikimedia Commons
            </a>
            .
          </figcaption>
        </figure>

        <aside
          className="flex flex-col rounded-2xl border border-stone-200/90 bg-white/85 p-4 shadow-sm md:p-5"
          aria-live="polite"
        >
          {active ? (
            <>
              <h3 className="font-serif text-xl font-semibold text-stone-900">{active.label}</h3>
              {"bulletLines" in active && active.bulletLines ? (
                <div className="mt-3 text-sm leading-6 text-stone-700">
                  {"bulletLeadIn" in active && active.bulletLeadIn ? (
                    <p className="mb-2 font-medium text-stone-800">{active.bulletLeadIn}</p>
                  ) : null}
                  <ul className="list-disc pl-4 marker:text-stone-400 [padding-inline-start:1.1rem]">
                    {active.bulletLines.map((line) => (
                      <li key={line} className="[&:not(:first-child)]:mt-1.5">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : "description" in active ? (
                <p className="mt-3 text-sm leading-6 text-stone-700">{active.description}</p>
              ) : null}
              <p className="mt-4 text-sm text-stone-500">
                <CiteGroup nums={active.citeNums} />
              </p>
            </>
          ) : (
            <p className="text-sm leading-6 text-stone-600">Select a region on the photo for details.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
