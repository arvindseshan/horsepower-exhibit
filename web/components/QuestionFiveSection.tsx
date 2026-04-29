import { DeclinePressureGrid } from "./DeclinePressureGrid";

export function QuestionFiveSection() {
  return (
    <section id="q5" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-stone-300/80 bg-white/50 p-6 md:p-10">
        <h2 className="font-serif text-3xl font-semibold text-stone-900 md:text-[2rem]">
          Why did this technology fall out of favor?
        </h2>
        <DeclinePressureGrid />
      </div>
    </section>
  );
}
