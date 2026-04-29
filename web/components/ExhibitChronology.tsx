import { chronologyMilestones } from "@/data/exhibit";
import { CiteGroup } from "./Cite";

export function ExhibitChronology() {
  return (
    <section id="chronology" className="scroll-mt-24 rounded-[2rem] border border-stone-300/80 bg-white/40 p-6 md:p-8">
      <h2 className="font-serif text-2xl font-semibold text-stone-900 md:text-3xl">Chronology: from chariots to a motorized city</h2>
      <ol className="relative ml-0.5 mt-6 max-w-4xl border-l-2 border-stone-200 pl-6 md:mt-8 md:pl-8">
        {chronologyMilestones.map((m) => (
          <li key={m.title} className="relative pb-8 last:pb-0">
            <span
              className="absolute -left-[calc(0.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-white md:-left-[calc(2rem+5px)]"
              aria-hidden
            />
            <p className="font-sans text-xs font-semibold tabular-nums tracking-wide text-stone-500">{m.era}</p>
            <h3 className="mt-1 font-serif text-xl text-stone-900">{m.title}</h3>
            <p className="mt-2 font-sans text-sm leading-6 text-stone-700">
              {m.body}
              {m.citeNums?.length ? (
                <span className="whitespace-nowrap">
                  {" "}
                  <CiteGroup nums={m.citeNums} />
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
