import type { ExhibitCitedPara } from "@/data/exhibit";
import { q3 } from "@/data/exhibit";
import { CiteGroup } from "./Cite";

export function QuestionThreeSection() {
  return (
    <section id="q3" className="scroll-mt-24 rounded-[2rem] border border-stone-300/80 bg-white/40 p-6 md:p-10">
      <h2 className="font-serif text-3xl font-semibold text-stone-900 md:text-[2rem]">{q3.title}</h2>
      <div className="mt-6 space-y-6 text-lg leading-8 text-stone-800 md:mt-8">
        {(q3.paragraphs as readonly ExhibitCitedPara[]).map((p) => {
          const cites = p.citeNums?.length ? p.citeNums : null;
          return (
            <p key={p.text.slice(0, 40)}>
              {p.text}
              {cites ? (
                <span className="ml-0.5">
                  <CiteGroup nums={cites} />
                </span>
              ) : null}
            </p>
          );
        })}
      </div>
    </section>
  );
}
