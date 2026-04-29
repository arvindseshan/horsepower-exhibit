export function PlaceholderQuestion({
  id,
  title,
  assignmentPrompt,
}: {
  id: string;
  title: string;
  assignmentPrompt: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[2rem] border border-dashed border-amber-400/70 bg-amber-50/25 p-6 md:p-8"
    >
      <h2 className="font-serif text-2xl font-semibold text-stone-900 md:text-3xl">{title}</h2>
      <div className="mt-4 rounded-2xl border border-stone-200/90 bg-white/70 p-4 text-stone-700">
        <p className="text-base leading-7">{assignmentPrompt}</p>
      </div>
      <div className="mt-5 rounded-2xl border-2 border-dashed border-stone-300/90 bg-stone-50/80 p-6 text-center font-sans text-stone-600">
        Content for this section will appear here.
      </div>
    </section>
  );
}
