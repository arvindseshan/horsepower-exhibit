import { CitationLink } from "@/components/CitationLink";
import { comparisonRows } from "@/data/exhibit";

export function ComparisonTable() {
  return (
    <section className="panel-shell rounded-[2rem] border border-stone-300/80 p-6 md:p-8">
      <p className="section-kicker">Comparison</p>
      <h3 className="mt-2 text-2xl font-semibold text-stone-900">
        Horse Transport vs Electric and Gasoline Mobility
      </h3>
      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-stone-300">
        <table className="w-full border-collapse text-left">
          <thead className="bg-stone-900 text-stone-50">
            <tr>
              <th className="px-4 py-4 text-sm font-medium uppercase tracking-[0.2em]">
                Question
              </th>
              <th className="px-4 py-4 text-sm font-medium uppercase tracking-[0.2em]">
                Horse-Drawn
              </th>
              <th className="px-4 py-4 text-sm font-medium uppercase tracking-[0.2em]">
                Electric/Gasoline
              </th>
            </tr>
          </thead>
          <tbody className="bg-stone-50/75">
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-t border-stone-300 align-top">
                <th className="px-4 py-4 text-sm font-semibold text-stone-900">{row.label}</th>
                <td className="px-4 py-4 text-sm leading-6 text-stone-700">{row.horse}</td>
                <td className="px-4 py-4 text-sm leading-6 text-stone-700">{row.modern}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-sm text-stone-600">
        {comparisonRows.map((row) => (
          <span key={row.label} className="mr-3 inline-block">
            <CitationLink ids={row.citationIds} />
          </span>
        ))}
      </div>
    </section>
  );
}
