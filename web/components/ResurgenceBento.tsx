import { q6Content } from "@/data/exhibit";

export function ResurgenceBento() {
  return (
    <div className="mt-8">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-800/20 bg-gradient-to-br from-stone-900 via-[#3d2a23] to-[#5c2117] p-6 text-stone-100 shadow-lg md:p-8 lg:col-span-4 lg:row-span-2">
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-400/10 blur-2xl"
            aria-hidden
          />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Against resurgence</p>
          <p className="mt-4 font-serif text-xl font-semibold leading-snug text-white md:text-2xl lg:text-[1.65rem] lg:leading-8">
            {q6Content.thesis}
          </p>
          <p className="mt-5 border-t border-white/15 pt-5 text-sm leading-6 text-stone-200 md:text-base md:leading-7">
            {q6Content.scale}
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white/90 p-5 shadow-sm lg:col-span-2">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Ethics &amp; law</p>
          <p className="mt-2 text-sm leading-6 text-stone-700 md:text-[0.95rem] md:leading-7">{q6Content.ethics}</p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-[#f0ebe4] p-5 shadow-sm lg:col-span-2">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">Performance</p>
          <p className="mt-2 text-sm leading-6 text-stone-800 md:text-[0.95rem] md:leading-7">{q6Content.transit}</p>
        </div>

        <div className="rounded-2xl border border-dashed border-amber-700/35 bg-amber-50/40 p-5 lg:col-span-3">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-900/80">Limited niches</p>
          <p className="mt-2 text-sm leading-6 text-stone-800 md:text-[0.95rem] md:leading-7">{q6Content.tourism}</p>
        </div>

        <div className="rounded-2xl border border-dashed border-stone-500/30 bg-stone-100/80 p-5 lg:col-span-3">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">Rural use</p>
          <p className="mt-2 text-sm leading-6 text-stone-800 md:text-[0.95rem] md:leading-7">{q6Content.farming}</p>
        </div>
      </div>
    </div>
  );
}
