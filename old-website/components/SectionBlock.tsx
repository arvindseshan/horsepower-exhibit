import { CitationLink } from "@/components/CitationLink";
import { RichParagraph } from "@/components/RichText";
import type { SectionData } from "@/data/exhibit";

export function SectionBlock({ section }: { section: SectionData }) {
  return (
    <section id={section.id} className="scroll-mt-20">
      <div className="panel-shell rounded-[2rem] border border-stone-300/80 p-6 md:p-8">
        <p className="section-kicker">{section.eyebrow}</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold leading-tight text-stone-950 md:text-4xl">
          {section.title}
        </h2>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <RichParagraph block={section.intro} />
            {section.blocks.map((block) => (
              <RichParagraph key={block.title ?? block.parts[0].type} block={block} />
            ))}
          </div>
          <div className="space-y-5">
            {section.pullQuote ? (
              <blockquote className="rounded-[1.75rem] border border-[#b86e57]/35 bg-[#8c3b2e] px-6 py-6 text-stone-50">
                <p className="text-xl leading-8">“{section.pullQuote.quote}”</p>
                <footer className="mt-4 text-sm text-stone-200">
                  {section.pullQuote.attribution} <CitationLink ids={section.pullQuote.citationIds} />
                </footer>
              </blockquote>
            ) : null}
            {section.factCards?.length ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {section.factCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[1.5rem] border border-stone-300 bg-stone-50/80 px-5 py-5"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                      {card.label}
                    </p>
                    <p className="mt-3 text-lg font-medium leading-7 text-stone-900">
                      {card.value}
                    </p>
                    <div className="mt-4 text-sm text-stone-600">
                      <CitationLink ids={card.citationIds} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-stone-300 bg-stone-50/60 px-5 py-6 text-sm leading-7 text-stone-600">
                Historical image slot: replace this panel with a verified public-domain or
                open-license photograph, painting, map, or diagram relevant to this section.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
