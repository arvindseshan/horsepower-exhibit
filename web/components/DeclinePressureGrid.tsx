import { q5DeclineCards } from "@/data/exhibit";
import { ExhibitBodyBlocks } from "./ExhibitBodyBlocks";

export function DeclinePressureGrid() {
  const [overview, ...themes] = q5DeclineCards;

  return (
    <div className="mt-8 flex flex-col gap-4">
      {overview ? (
        <article
          key={overview.id}
          className="rounded-2xl border border-stone-300/90 bg-gradient-to-r from-[#faf6f0] via-white to-[#f5ebe0] p-6 shadow-sm md:p-7"
        >
          <h3 className="font-serif text-xl font-semibold text-stone-900 md:text-2xl">{overview.title}</h3>
          <div className="mt-4">
            <ExhibitBodyBlocks blocks={overview.blocks} variant="card" />
          </div>
        </article>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        {themes.map((card) => (
          <article
            key={card.id}
            className="flex flex-col rounded-2xl border border-stone-200/90 bg-gradient-to-b from-white/95 to-amber-50/35 p-5 shadow-sm md:p-6"
          >
            <h3 className="font-serif text-lg font-semibold text-stone-900 md:text-xl">{card.title}</h3>
            <div className="mt-3 flex-1">
              <ExhibitBodyBlocks blocks={card.blocks} variant="card" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
