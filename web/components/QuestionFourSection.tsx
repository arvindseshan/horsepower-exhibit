import Image from "next/image";
import { q4 } from "@/data/exhibit";
import { CiteGroup } from "./Cite";
import { ImpactAccordion } from "./ImpactAccordion";

/** LOC / NARA via Wikimedia Commons (same subjects as prior local `/exhibit/*.jpg`). */
const IMG_HORSECAR_148 =
  "https://upload.wikimedia.org/wikipedia/commons/8/84/Horse-drawn_streetcar_no._148_of_a_New_York_City_system_LCCN2004667717.jpg";
const IMG_EIGHTH_AVENUE_MIXED =
  "https://upload.wikimedia.org/wikipedia/commons/6/63/The_Eighth_Avenue_trolley%2C_New_York_City%2C_sharing_the_street_with_horse-drawn_produce_wagon_and_an_open_automobile._Down_-_NARA_-_541891.jpg";

export function QuestionFourSection() {
  return (
    <section id="q4" className="scroll-mt-24 space-y-8">
      <div className="rounded-[2rem] border border-stone-300/80 bg-white/50 p-6 md:p-10">
        <h2 className="font-serif text-3xl font-semibold text-stone-900 md:text-[2rem]">
          What were the lasting cultural, industrial, economic, political, ecological impacts of this technology?
        </h2>
        <p className="mt-6 text-lg leading-8 text-stone-800">{q4.intro}</p>
      </div>

      <blockquote className="rounded-[2rem] border-l-4 border-[var(--accent)] bg-[#f9f4ec] p-6 md:p-8">
        <p className="font-serif text-xl leading-8 text-stone-900 md:text-2xl">“{q4.quote.text}”</p>
        <footer className="mt-4 font-sans text-sm text-stone-600">
          — JP Weesner, urban designer, in The Western Planner, 2022 <CiteGroup nums={q4.quote.citeNums} />
        </footer>
      </blockquote>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="relative z-10 min-w-0">
          <ImpactAccordion subsections={q4.subsections} />
        </div>
        <figure className="relative z-0 overflow-hidden rounded-2xl border border-stone-300/80 bg-stone-100">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={IMG_HORSECAR_148}
              alt="Horse-drawn streetcar no. 148, New York City system (historical photograph)"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          <figcaption className="border-t border-stone-200 px-3 py-2 font-sans text-xs leading-snug text-stone-600">
            Horse-drawn streetcar no. 148 of a New York City system. Library of Congress reproduction, Wikimedia Commons
            (public domain).
          </figcaption>
        </figure>
      </div>

      <figure className="overflow-hidden rounded-[2rem] border border-stone-300/80 bg-stone-100">
        <div className="relative aspect-[21/9] w-full max-h-[420px]">
          <Image
            src={IMG_EIGHTH_AVENUE_MIXED}
            alt="Eighth Avenue, New York City: trolley, horse-drawn wagon, and automobile sharing the street"
            fill
            className="object-cover object-[center_42%]"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>
        <figcaption className="border-t border-stone-200 px-4 py-3 font-sans text-xs leading-snug text-stone-600">
          Eighth Avenue, New York City, with a trolley, horse-drawn produce wagon, and automobile sharing the street. U.S. National
          Archives (NARA 541891), Wikimedia Commons (public domain).
        </figcaption>
      </figure>

      {q4.closing ? (
        <div className="rounded-[2rem] border border-stone-300/80 bg-white/50 p-6 md:p-8">
          <p className="text-lg leading-8 text-stone-800">{q4.closing}</p>
        </div>
      ) : null}
    </section>
  );
}
