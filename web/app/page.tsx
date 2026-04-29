import { ExhibitChronology } from "@/components/ExhibitChronology";
import { ExhibitNav } from "@/components/ExhibitNav";
import { Hero } from "@/components/Hero";
import { QuestionFiveSection } from "@/components/QuestionFiveSection";
import { QuestionFourSection } from "@/components/QuestionFourSection";
import { QuestionOneSection } from "@/components/QuestionOneSection";
import { QuestionSixSection } from "@/components/QuestionSixSection";
import { QuestionThreeSection } from "@/components/QuestionThreeSection";
import { QuestionTwoSection } from "@/components/QuestionTwoSection";
import { ReferencesSection } from "@/components/ReferencesSection";

export default function Home() {
  return (
    <div className="min-h-screen text-stone-900">
      <a
        href="#intro"
        className="sr-only z-[100] bg-white p-2 font-sans text-stone-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 lg:max-w-[1600px]">
        <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr] lg:gap-8 xl:grid-cols-[minmax(180px,220px)_1fr]">
          <ExhibitNav />
          <div className="min-w-0 space-y-10">
            <Hero />
            <QuestionOneSection />
            <QuestionTwoSection />
            <QuestionThreeSection />
            <QuestionFourSection />
            <QuestionFiveSection />
            <QuestionSixSection />
            <ExhibitChronology />
            <ReferencesSection />
            <footer className="border-t border-stone-300/60 pb-8 pt-6 text-center font-sans text-sm text-stone-500">
              21A.500 · Technology and Culture
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
