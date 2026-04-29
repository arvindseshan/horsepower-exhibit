import { CitationLink } from "@/components/CitationLink";
import { timelineMilestones } from "@/data/exhibit";

export function Timeline() {
  return (
    <section className="panel-shell rounded-[2rem] border border-stone-300/80 p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Interactive Timeline</p>
          <h3 className="mt-2 text-2xl font-semibold text-stone-900">Major Milestones</h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-stone-600">
          Read the transition from urban dependence on horse power to its displacement by
          electrified and motorized mobility.
        </p>
      </div>
      <div className="mt-8 grid gap-4">
        {timelineMilestones.map((milestone) => (
          <article
            key={`${milestone.year}-${milestone.title}`}
            className="group grid gap-4 rounded-[1.5rem] border border-stone-300 bg-stone-50/75 p-5 transition hover:-translate-y-0.5 hover:border-stone-500"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8c3b2e]">
                  {milestone.year}
                </p>
                <h4 className="mt-2 text-xl font-semibold text-stone-900">
                  {milestone.title}
                </h4>
              </div>
              <div className="text-sm text-stone-600">
                <CitationLink ids={milestone.citationIds} />
              </div>
            </div>
            <p className="max-w-3xl text-stone-700">{milestone.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
