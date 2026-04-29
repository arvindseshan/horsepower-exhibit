import { q1Paragraphs } from "@/data/exhibit";
import { CiteGroup } from "./Cite";
import { HorseCarriageHotspots } from "./HorseCarriageHotspots";

export function QuestionOneSection() {
  return (
    <section id="q1" className="scroll-mt-24 rounded-[2rem] border border-stone-300/80 bg-white/40 p-6 md:p-10">
      <h2 className="font-serif text-3xl font-semibold text-stone-900 md:text-[2rem]">
        Our Technology: Horse-drawn Transportation
      </h2>
      <HorseCarriageHotspots />
      <div className="mt-8 space-y-6 text-lg leading-8 text-stone-800">
        {q1Paragraphs.map((p) => (
          <p key={p.text.slice(0, 24)}>
            {p.text}
            <CiteGroup nums={p.citeNums} />
          </p>
        ))}
      </div>
    </section>
  );
}
