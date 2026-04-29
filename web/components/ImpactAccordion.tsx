"use client";

import { useState } from "react";
import type { Q4Subsection } from "@/data/exhibit";
import { CiteGroup } from "./Cite";

export function ImpactAccordion({ subsections }: { subsections: readonly Q4Subsection[] }) {
  const [openId, setOpenId] = useState<string | null>(subsections[0]?.id ?? null);

  return (
    <div className="relative z-10 space-y-2">
      {subsections.map((s) => {
        const isOpen = openId === s.id;
        return (
          <div
            key={s.id}
            className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white/70 shadow-sm"
          >
            <button
              type="button"
              className="relative z-10 flex w-full touch-manipulation items-center justify-between gap-3 px-4 py-4 text-left font-serif text-lg font-semibold text-stone-900 transition hover:bg-stone-50/80 md:px-5"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : s.id)}
            >
              <span>{s.title}</span>
              <span className="font-sans text-sm font-normal text-stone-500" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="space-y-3 border-t border-stone-100 px-4 pb-4 pt-3 md:px-5 md:pb-5">
                {s.paras.map((para, i) => (
                  <p key={i} className="text-base leading-7 text-stone-700">
                    {para.text}
                    {para.citeNums?.length ? (
                      <span className="whitespace-nowrap">
                        {" "}
                        <CiteGroup nums={para.citeNums} />
                      </span>
                    ) : null}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
