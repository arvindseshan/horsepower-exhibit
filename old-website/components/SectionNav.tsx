import { sections } from "@/data/exhibit";

export function SectionNav() {
  return (
    <nav className="panel-shell sticky top-6 hidden rounded-[1.75rem] border border-stone-300/80 p-5 lg:block">
      <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Exhibit Map</p>
      <ul className="mt-4 space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block rounded-2xl border border-transparent px-3 py-3 text-sm leading-6 text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 hover:text-stone-950"
            >
              <span className="block text-xs uppercase tracking-[0.2em] text-stone-500">
                {section.eyebrow}
              </span>
              <span className="mt-1 block font-medium">{section.title}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            href="#references"
            className="block rounded-2xl border border-transparent px-3 py-3 text-sm leading-6 text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 hover:text-stone-950"
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-stone-500">
              Sources
            </span>
            <span className="mt-1 block font-medium">References and media credits</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
