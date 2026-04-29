import { CitationProvider } from "@/components/CitationContext";
import { CitationPanel } from "@/components/CitationPanel";
import { ComparisonTable } from "@/components/ComparisonTable";
import { References } from "@/components/References";
import { SectionBlock } from "@/components/SectionBlock";
import { SectionNav } from "@/components/SectionNav";
import { SystemsDiagram } from "@/components/SystemsDiagram";
import { ThenNowToggle } from "@/components/ThenNowToggle";
import { Timeline } from "@/components/Timeline";
import { sections, thesis } from "@/data/exhibit";

export default function Home() {
  return (
    <CitationProvider>
      <main className="min-h-screen bg-[linear-gradient(180deg,#efe5d5_0%,#f8f3eb_30%,#f3ece1_100%)] text-stone-900">
        <div className="mx-auto max-w-[1600px] px-4 py-4 md:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[0.22fr_1fr_0.3fr]">
            <div className="xl:pt-6">
              <SectionNav />
            </div>
            <div className="space-y-6">
              <section className="hero-shell relative overflow-hidden rounded-[2.5rem] border border-stone-300/80 px-6 py-10 md:px-10 md:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,89,63,0.28),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(54,38,31,0.18),transparent_30%)]" />
                <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <p className="section-kicker">Technology and Culture Project</p>
                    <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-stone-950 md:text-6xl">
                      From Horse Power to Horsepower
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-[#8c3b2e] md:text-xl">
                      The rise and decline of horse-drawn transportation
                    </p>
                    <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-stone-700">
                      {thesis}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href="#technology" className="primary-chip">
                        Enter the exhibit
                      </a>
                      <a href="#references" className="secondary-chip">
                        Jump to sources
                      </a>
                    </div>
                  </div>
                  <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-stone-200/70 bg-[linear-gradient(180deg,#d9b997_0%,#c38e69_35%,#52382d_100%)] p-6">
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,#5b4034_0%,#3d2a23_100%)]" />
                    <div className="absolute left-7 top-10 h-28 w-20 rounded-t-[2rem] bg-stone-100/75" />
                    <div className="absolute left-[7.5rem] top-16 h-20 w-16 rounded-t-[1.5rem] bg-stone-100/55" />
                    <div className="absolute right-8 top-12 h-36 w-24 rounded-t-[2.5rem] bg-stone-900/35" />
                    <div className="absolute left-28 bottom-14 h-8 w-28 rounded-[1rem] bg-[#5d3c2f]" />
                    <div className="absolute left-[4.5rem] bottom-13 h-10 w-14 rounded-full bg-[#3f2a21]" />
                    <div className="absolute left-20 bottom-8 h-12 w-12 rounded-full border-[7px] border-[#231711]" />
                    <div className="absolute left-[12.5rem] bottom-8 h-12 w-12 rounded-full border-[7px] border-[#231711]" />
                    <div className="absolute left-8 bottom-16 h-14 w-11 rounded-[1.5rem] bg-[#35231c]" />
                    <div className="absolute left-11 bottom-[6.75rem] h-4 w-4 rounded-full bg-[#35231c]" />
                    <div className="absolute left-13 bottom-[7.75rem] h-9 w-2 rounded-full bg-[#35231c]" />
                    <div className="absolute bottom-6 right-6 rounded-[1.5rem] border border-stone-100/25 bg-[rgba(35,23,17,0.42)] px-4 py-3 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.26em] text-stone-200">
                        Exhibit thesis
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-stone-100">
                        Urban horses were engines, infrastructure, and environmental burden
                        at the same time.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <ThenNowToggle />
              <SystemsDiagram />
              <Timeline />

              {sections.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}

              <ComparisonTable />
              <References />
            </div>
            <div className="xl:pt-6">
              <CitationPanel />
            </div>
          </div>
        </div>
      </main>
    </CitationProvider>
  );
}
