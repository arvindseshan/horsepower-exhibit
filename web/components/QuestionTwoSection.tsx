import { q2 } from "@/data/exhibit";
import { CiteGroup } from "./Cite";
import { ExhibitRemoteFigureBlock } from "./ExhibitRemoteFigureBlock";

export function QuestionTwoSection() {
  return (
    <section id="q2" className="scroll-mt-24 rounded-[2rem] border border-stone-300/80 bg-white/40 p-6 md:p-10">
      <h2 className="font-serif text-3xl font-semibold text-stone-900 md:text-[2rem]">{q2.title}</h2>
      <div className="mt-4 rounded-2xl border border-stone-200/90 bg-amber-50/30 p-4 md:p-5">
        <p className="text-base font-medium text-stone-800">{q2.assignmentPrompt}</p>
      </div>
      <div className="mt-8 space-y-6 text-lg leading-8 text-stone-800">
        {q2.paragraphs.map((p) => {
          const cites = "citeNums" in p && p.citeNums?.length ? p.citeNums : null;
          return (
            <p key={p.text.slice(0, 48)}>
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
      <div className="mx-auto mt-8 max-w-4xl">
        <ExhibitRemoteFigureBlock fig={q2.figure} />
      </div>
    </section>
  );
}
