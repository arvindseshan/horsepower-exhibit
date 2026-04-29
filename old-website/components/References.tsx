import { citations } from "@/data/citations";
import { mediaPlaceholders } from "@/data/exhibit";

export function References() {
  return (
    <section id="references" className="scroll-mt-20">
      <div className="panel-shell rounded-[2rem] border border-stone-300/80 p-6 md:p-8">
        <p className="section-kicker">Sources</p>
        <h2 className="mt-2 text-3xl font-semibold text-stone-950">References</h2>
        <div className="mt-6 space-y-4">
          {citations.map((citation) => (
            <article
              key={citation.id}
              id={`reference-${citation.id}`}
              className="rounded-[1.5rem] border border-stone-300 bg-stone-50/75 px-5 py-5 transition"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start">
                <div className="md:w-16">
                  <span className="inline-flex rounded-full bg-stone-900 px-3 py-1 text-sm font-semibold text-stone-50">
                    [{citation.id}]
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
                    {citation.short}
                  </p>
                  <p className="mt-2 text-base leading-7 text-stone-700">{citation.full}</p>
                  {citation.note ? (
                    <p className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-sm leading-6 text-amber-900">
                      {citation.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <p className="section-kicker">Media Credits</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900">Current placeholders</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {mediaPlaceholders.map((item) => (
              <article
                key={item.slug}
                className="rounded-[1.5rem] border border-stone-300 bg-stone-50/75 p-5"
              >
                <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-[1.25rem] border border-dashed border-stone-300 bg-[linear-gradient(180deg,#f4ece1_0%,#e7d6c1_100%)] text-center text-xs uppercase tracking-[0.25em] text-stone-500">
                  Replace with verified image
                </div>
                <p className="font-semibold text-stone-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Creator: {item.creator}
                  <br />
                  Source: {item.source}
                  <br />
                  Date: {item.date}
                  <br />
                  Rights: {item.rights}
                </p>
                <p className="mt-3 text-sm italic leading-6 text-stone-600">{item.alt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
