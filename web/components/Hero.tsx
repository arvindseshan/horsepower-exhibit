import Image from "next/image";

/** LOC “street types” series, via Wikimedia Commons. */
const HERO_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Street_types_of_New_York_City-_Hansom_driver_standing_in_front_of_horse_and_cab_LCCN2002699101.jpg";

export function Hero() {
  return (
    <section
      id="intro"
      className="overflow-hidden rounded-[2rem] border border-stone-300/80 bg-gradient-to-b from-[#fbf6ef] to-[#ebe0d2] shadow-sm"
    >
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            21A.500 · Technology and Culture
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-stone-950 md:text-5xl lg:text-[3.2rem]">
            From horse power to horsepower
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
            Horse-drawn vehicles were an essential form of transportation for thousands of years, from early Mesopotamian, Egyptian, and Greco-Roman chariots
            and carts to the carriages prevalent throughout the 17th–19th centuries in Europe and North America. Horse-powered
            transport also shaped urban infrastructure, from Roman roads with wheel ruts that guided carts to nineteenth-century
            cities built around carriage traffic and stables. This exhibit analyzes the decline of horse-drawn transportation
            in the early twentieth century with the rise of mechanized vehicles, examining what factors kept horse-powered systems
            relevant for so long and what tradeoffs ultimately enabled mechanized transportation to replace them.
          </p>
        </div>
        <div className="relative min-h-[240px] bg-stone-900/5 lg:min-h-[400px]">
          <Image
            src={HERO_IMG}
            alt="Hansom cab and driver on a New York City street, early 20th century (Library of Congress photograph)"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 to-transparent p-5 pt-20 text-sm text-stone-100">
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-100/90">
              Historical image
            </p>
            <p className="mt-1 max-w-prose text-stone-200/95">
              New York City: hansom driver with horse and cab (street types series, Library of Congress)—public domain,{" "}
              <a
                className="text-amber-100/95 underline-offset-2 hover:underline"
                href="https://commons.wikimedia.org/wiki/File:Street_types_of_New_York_City-_Hansom_driver_standing_in_front_of_horse_and_cab_LCCN2002699101.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Wikimedia Commons
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
