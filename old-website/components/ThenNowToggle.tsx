"use client";

import { useState } from "react";
import { CitationLink } from "@/components/CitationLink";

const scenes = {
  then: {
    label: "Horse-powered city",
    title: "Nineteenth-century circulation",
    summary:
      "Movement relies on stables, feed deliveries, teamsters, sweepers, and the daily management of manure and animal fatigue.",
    bullets: [
      "Street noise comes from hooves, wheels, and human labor.",
      "Transport capacity is limited by animal endurance and care cycles.",
      "Urban land is consumed by stables, yards, and feed storage."
    ],
    citationIds: [1, 2]
  },
  now: {
    label: "Motorized city",
    title: "Twentieth-century and contemporary circulation",
    summary:
      "Movement depends on roads, fuel or electricity, maintenance depots, and a different set of externalized environmental costs.",
    bullets: [
      "Speed and range increase, but road space pressure remains intense.",
      "Hidden systems shift toward fuel extraction, paving, and emissions.",
      "The waste problem changes form rather than disappearing."
    ],
    citationIds: [4, 7]
  }
} as const;

export function ThenNowToggle() {
  const [mode, setMode] = useState<"then" | "now">("then");
  const active = scenes[mode];

  return (
    <section className="panel-shell rounded-[2rem] border border-stone-300/80 p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Interactive Comparison</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900">Then vs Now</h3>
          <p className="mt-3 max-w-2xl text-stone-700">
            Toggle between a horse-powered city and a motorized one to compare what each
            mobility system demands behind the scenes.
          </p>
        </div>
        <div
          className="inline-flex rounded-full border border-stone-300 bg-stone-100 p-1"
          role="tablist"
          aria-label="Compare then and now"
        >
          {(["then", "now"] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={mode === item}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                mode === item
                  ? "bg-stone-900 text-stone-50"
                  : "text-stone-700 hover:text-stone-950"
              }`}
              onClick={() => setMode(item)}
            >
              {scenes[item].label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-300 bg-[radial-gradient(circle_at_top,#d9c6b3_0%,#c7a789_38%,#7f5d49_100%)] p-6 text-stone-50">
          <div
            className={`transition duration-500 ${mode === "then" ? "opacity-100" : "opacity-80"}`}
          >
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-200">
                  {active.label}
                </p>
                <h4 className="mt-2 text-3xl font-semibold">{active.title}</h4>
              </div>
              <span className="rounded-full border border-stone-100/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-stone-100/80">
                {mode === "then" ? "Animal energy" : "Machine energy"}
              </span>
            </div>
            <div className="relative h-52 overflow-hidden rounded-[1.5rem] border border-stone-100/20 bg-[linear-gradient(180deg,rgba(250,235,215,0.42)_0%,rgba(53,35,28,0.32)_100%)]">
              <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,#6b4e3d_0%,#422f25_100%)]" />
              <div className="absolute left-6 top-10 h-20 w-16 rounded-t-[1.5rem] bg-stone-100/80" />
              <div className="absolute left-24 top-14 h-16 w-16 rounded-t-[1.2rem] bg-stone-100/60" />
              <div className="absolute right-8 top-8 h-28 w-20 rounded-t-[2rem] bg-stone-900/40" />
              {mode === "then" ? (
                <>
                  <div className="absolute left-28 bottom-12 h-7 w-24 rounded-[1rem] bg-[#4d3428]" />
                  <div className="absolute left-20 bottom-11 h-9 w-12 rounded-full bg-[#4d3428]" />
                  <div className="absolute left-[4.5rem] bottom-8 h-10 w-10 rounded-full border-[6px] border-[#2a1b14]" />
                  <div className="absolute left-[10.5rem] bottom-8 h-10 w-10 rounded-full border-[6px] border-[#2a1b14]" />
                  <div className="absolute left-8 bottom-14 h-12 w-10 rounded-[1.4rem] bg-[#35231c]" />
                  <div className="absolute left-11 bottom-[5.75rem] h-4 w-4 rounded-full bg-[#35231c]" />
                  <div className="absolute left-13 bottom-[6.75rem] h-8 w-2 rounded-full bg-[#35231c]" />
                </>
              ) : (
                <>
                  <div className="absolute left-20 bottom-12 h-10 w-32 rounded-[1.4rem] bg-[#18232a]" />
                  <div className="absolute left-28 bottom-24 h-5 w-12 rounded-t-[0.8rem] bg-[#18232a]" />
                  <div className="absolute left-24 bottom-8 h-12 w-12 rounded-full border-[7px] border-[#0c1114]" />
                  <div className="absolute left-56 bottom-8 h-12 w-12 rounded-full border-[7px] border-[#0c1114]" />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-stone-300 bg-stone-50/70 p-6">
          <p className="text-sm uppercase tracking-[0.26em] text-stone-500">System Reading</p>
          <p className="mt-4 text-base leading-7 text-stone-700">{active.summary}</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8c3b2e]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-sm text-stone-600">
            <CitationLink ids={active.citationIds} />
          </div>
        </div>
      </div>
    </section>
  );
}
