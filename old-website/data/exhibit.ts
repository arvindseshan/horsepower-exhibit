export type InlinePart =
  | { type: "text"; value: string }
  | { type: "cite"; ids: number[] };

export type ContentBlock = {
  title?: string;
  parts: InlinePart[];
};

export type SectionData = {
  id: string;
  eyebrow: string;
  title: string;
  intro: ContentBlock;
  blocks: ContentBlock[];
  pullQuote?: {
    quote: string;
    attribution: string;
    citationIds: number[];
  };
  factCards?: {
    label: string;
    value: string;
    citationIds: number[];
  }[];
};

export const thesis =
  "Horse-drawn transportation was not a premodern leftover but a dense urban technology whose infrastructure, labor, feed, and waste systems reshaped nineteenth-century cities before motor vehicles displaced it.";

export const sections: SectionData[] = [
  {
    id: "technology",
    eyebrow: "1. System Definition",
    title: "What Was the Technology?",
    intro: {
      parts: [
        {
          type: "text",
          value:
            "Horse-drawn transportation worked as a coordinated system rather than a single machine. Horses supplied traction, but their movement depended on stables, drivers, vehicle builders, harness makers, veterinarians, street maintenance, and constant feed deliveries."
        },
        { type: "cite", ids: [1, 2, 3] }
      ]
    },
    blocks: [
      {
        title: "A living engine",
        parts: [
          {
            type: "text",
            value:
              "Unlike later motor vehicles, the power source was biological. Horses consumed energy even when idle, required rest, became sick, and had to be replaced regularly. That meant urban mobility involved care regimes and material flows that were inseparable from transportation itself."
          },
          { type: "cite", ids: [1, 2] }
        ]
      },
      {
        title: "An industrial network",
        parts: [
          {
            type: "text",
            value:
              "Carriages, omnibuses, wagons, and horsecars came out of a mature manufacturing sector. Vehicle design, wheelmaking, coachbuilding, and specialized labor formed a substantial industry with its own markets, standards, and craft traditions."
          },
          { type: "cite", ids: [3] }
        ]
      }
    ],
    pullQuote: {
      quote: "The horse functioned as an urban technology embedded in a larger technical environment.",
      attribution: "Adapted from Tarr and McShane",
      citationIds: [1]
    },
    factCards: [
      {
        label: "Core idea",
        value: "A transport system built around animal energy, infrastructure, and labor.",
        citationIds: [1, 2]
      },
      {
        label: "Key dependency",
        value: "Feed, care, and waste removal were as essential as roads or vehicles.",
        citationIds: [1, 2]
      }
    ]
  },
  {
    id: "origins",
    eyebrow: "2. Origins",
    title: "Where and Why Did It Originate?",
    intro: {
      parts: [
        {
          type: "text",
          value:
            "Horse-drawn transport emerged from long traditions of animal traction, but it became especially important in rapidly growing European and North American cities where moving people, goods, and raw materials over short-to-medium urban distances required a flexible and scalable system."
        },
        { type: "cite", ids: [1, 2, 3] }
      ]
    },
    blocks: [
      {
        title: "Urban expansion",
        parts: [
          {
            type: "text",
            value:
              "As cities expanded in the eighteenth and nineteenth centuries, walking alone no longer met the demands of daily commerce and commuting. Horses extended the practical size of cities by connecting homes, markets, docks, rail depots, and workplaces."
          },
          { type: "cite", ids: [1, 2] }
        ]
      },
      {
        title: "Why horses fit the problem",
        parts: [
          {
            type: "text",
            value:
              "Horses were adaptable to varied terrain, available through existing agricultural economies, and compatible with both passenger and freight uses. Before viable motor systems, they offered the most practical combination of power, maneuverability, and familiarity."
          },
          { type: "cite", ids: [1, 3] }
        ]
      }
    ]
  },
  {
    id: "importance",
    eyebrow: "3. Ascendance",
    title: "When Did It Become Important, and Why?",
    intro: {
      parts: [
        {
          type: "text",
          value:
            "Horse-drawn transportation reached peak importance in the nineteenth century, particularly between the mid-1800s and the early 1900s, when industrial urbanization sharply increased demand for circulation within cities."
        },
        { type: "cite", ids: [1, 2, 3] }
      ]
    },
    blocks: [
      {
        title: "The growth of everyday mobility",
        parts: [
          {
            type: "text",
            value:
              "The system mattered because it enabled routine urban life at scale. Horse buses, horsecars, drays, delivery wagons, cabs, and private carriages helped organize commuting, retail distribution, municipal services, and elite display."
          },
          { type: "cite", ids: [1, 2, 4] }
        ]
      },
      {
        title: "A bridge technology",
        parts: [
          {
            type: "text",
            value:
              "Horse power also connected older and newer infrastructures. It fed rail terminals, moved passengers to ferry landings, and transferred goods between factories, warehouses, and shops. In that sense it was central to industrial modernity, not outside it."
          },
          { type: "cite", ids: [1, 2, 4] }
        ]
      }
    ],
    factCards: [
      {
        label: "Peak role",
        value: "Nineteenth-century urban circulation depended on animal traction at nearly every scale.",
        citationIds: [1, 2]
      },
      {
        label: "Why it scaled",
        value: "It linked homes, commerce, public transit, and freight before engines became dependable.",
        citationIds: [1, 4]
      }
    ]
  },
  {
    id: "impacts",
    eyebrow: "4. Consequences",
    title: "How Did It Shape Society and the Environment?",
    intro: {
      parts: [
        {
          type: "text",
          value:
            "Horse-drawn transportation transformed culture, labor, industry, politics, and urban ecology. It created jobs, structured class distinctions in mobility, and fueled manufacturing, but it also intensified sanitation problems and environmental strain."
        },
        { type: "cite", ids: [1, 2, 3, 5, 6] }
      ]
    },
    blocks: [
      {
        title: "Cultural and social order",
        parts: [
          {
            type: "text",
            value:
              "Vehicle ownership and the quality of one's carriage signaled status, while omnibus and streetcar services widened access to urban movement. At the same time, this system depended on drivers, stable workers, farriers, and teamsters whose labor remained physically demanding and often precarious."
          },
          { type: "cite", ids: [2, 3, 4] }
        ]
      },
      {
        title: "Industrial and economic effects",
        parts: [
          {
            type: "text",
            value:
              "The carriage trade supported a large manufacturing ecosystem, from woodworking and metalwork to leather, wheelmaking, and repair. Businesses also faced ongoing costs for feed, stable land, replacement animals, and veterinary care."
          },
          { type: "cite", ids: [2, 3] }
        ]
      },
      {
        title: "Political and ecological pressure",
        parts: [
          {
            type: "text",
            value:
              "Municipal governments had to manage congestion, street cleaning, carcass disposal, and public health concerns linked to manure and animal mortality. Disease outbreaks such as the great epizootic exposed how vulnerable the whole mobility system was when horses failed."
          },
          { type: "cite", ids: [1, 2, 5, 6] }
        ]
      }
    ],
    pullQuote: {
      quote: "The urban horse solved mobility problems while creating new sanitary and governance problems of its own.",
      attribution: "Synthesis from the cited scholarship",
      citationIds: [1, 2, 5]
    }
  },
  {
    id: "decline",
    eyebrow: "5. Decline",
    title: "Why Did It Fall Out of Favor?",
    intro: {
      parts: [
        {
          type: "text",
          value:
            "Horse-drawn transportation declined in the early twentieth century because it became increasingly expensive, space-hungry, and unsanitary compared with electric street railways, bicycles, and eventually gasoline vehicles."
        },
        { type: "cite", ids: [1, 2, 4, 7] }
      ]
    },
    blocks: [
      {
        title: "Limits of biological power",
        parts: [
          {
            type: "text",
            value:
              "Horses had hard productivity ceilings. They tired, aged, became ill, and required care whether moving or not. As urban density increased, the costs of feeding, housing, and replacing them became more visible and less tolerable."
          },
          { type: "cite", ids: [1, 2] }
        ]
      },
      {
        title: "Competition from new systems",
        parts: [
          {
            type: "text",
            value:
              "Electric traction and internal-combustion vehicles did not simply appear and instantly dominate. For a time these technologies coexisted in tension, but motorization gained ground because it promised greater speed, range, and logistical flexibility within a modernizing city."
          },
          { type: "cite", ids: [4, 7] }
        ]
      },
      {
        title: "A changing idea of modernity",
        parts: [
          {
            type: "text",
            value:
              "The decline was cultural as well as technical. Cleanliness, efficiency, mechanization, and modern urban planning increasingly aligned prestige with motors rather than animals. The horse came to represent friction in a city that wanted faster circulation."
          },
          { type: "cite", ids: [1, 4, 7] }
        ]
      }
    ]
  },
  {
    id: "resurgence",
    eyebrow: "6. Futures",
    title: "Could It Resurge?",
    intro: {
      parts: [
        {
          type: "text",
          value:
            "A large-scale return of horse-drawn urban transportation is unlikely, but the system still offers instructive lessons. It reminds us that transportation is always embedded in energy use, labor, land, maintenance, waste, and political decision-making."
        },
        { type: "cite", ids: [1, 2, 4, 7] }
      ]
    },
    blocks: [
      {
        title: "Where limited resurgence exists",
        parts: [
          {
            type: "text",
            value:
              "Horse-drawn vehicles persist in ceremonial, touristic, agricultural, and heritage contexts. Those uses survive because they serve symbolic or local purposes rather than mass urban mobility."
          },
          { type: "cite", ids: [2, 4] }
        ]
      },
      {
        title: "What remains relevant",
        parts: [
          {
            type: "text",
            value:
              "The deeper legacy is analytical. Studying the horse era clarifies that every mobility system externalizes costs somewhere. Today's debates over batteries, road space, charging networks, labor, and emissions echo earlier debates about stables, feed, manure, and municipal capacity."
          },
          { type: "cite", ids: [1, 4, 7] }
        ]
      }
    ],
    factCards: [
      {
        label: "Likely future",
        value: "Niche use, not metropolitan-scale return.",
        citationIds: [2, 4]
      },
      {
        label: "Lasting lesson",
        value: "Transport systems always carry hidden infrastructural and ecological costs.",
        citationIds: [1, 7]
      }
    ]
  }
];

export const timelineMilestones = [
  {
    year: "1700s",
    title: "Urban carriage culture expands",
    description:
      "Carriage use grows alongside commercial and political urban life, laying groundwork for more specialized passenger and freight systems.",
    citationIds: [3]
  },
  {
    year: "1820s–1850s",
    title: "Omnibus networks spread",
    description:
      "Horse omnibuses enlarge the practical scale of cities and normalize fare-paying urban passenger service.",
    citationIds: [1, 2]
  },
  {
    year: "1850s–1880s",
    title: "Horse rail transit gains importance",
    description:
      "Horsecars improve ride quality and route regularity, helping organize commuting corridors in growing cities.",
    citationIds: [1, 2]
  },
  {
    year: "1872–1873",
    title: "Great Epizootic disrupts mobility",
    description:
      "Disease reveals how thoroughly urban transport depends on the health of horses and the fragility of animal-powered infrastructure.",
    citationIds: [6]
  },
  {
    year: "1880s–1910s",
    title: "Electric and motor competition intensifies",
    description:
      "New traction technologies compete with horse systems on cost, speed, cleanliness, and range.",
    citationIds: [4, 7]
  },
  {
    year: "1910s–1920s",
    title: "Horse-drawn systems rapidly recede",
    description:
      "Motorized transport becomes central to a new urban ideal of efficiency and mechanized circulation.",
    citationIds: [1, 4, 7]
  }
];

export const comparisonRows = [
  {
    label: "Power source",
    horse: "Animal metabolism and fodder",
    modern: "Stored fuel or electricity",
    citationIds: [1, 2, 7]
  },
  {
    label: "Idle costs",
    horse: "High: feed, shelter, labor, care",
    modern: "Lower when parked, though infrastructure remains costly",
    citationIds: [1, 2, 7]
  },
  {
    label: "Street impact",
    horse: "Manure, carcass disposal, congestion, stable footprints",
    modern: "Air pollution, emissions, traffic injuries, paved-land dependence",
    citationIds: [1, 4, 5]
  },
  {
    label: "Operational limits",
    horse: "Fatigue, illness, short endurance",
    modern: "Mechanical wear, energy supply constraints",
    citationIds: [1, 2, 7]
  }
];

export const systemNodes = [
  {
    id: "stable",
    label: "Stable",
    x: 12,
    y: 18,
    detail:
      "Housing, grooming, feeding, and veterinary care turned mobility into a land- and labor-intensive urban service.",
    citationIds: [1, 2]
  },
  {
    id: "feed",
    label: "Feed Supply",
    x: 34,
    y: 8,
    detail:
      "Hay, grain, and water had to enter the city continuously to keep transport functioning.",
    citationIds: [1, 2]
  },
  {
    id: "carriage",
    label: "Carriage",
    x: 58,
    y: 18,
    detail:
      "Vehicles ranged from freight wagons to omnibuses and private carriages, supported by specialized manufacturing trades.",
    citationIds: [3]
  },
  {
    id: "street",
    label: "Street",
    x: 74,
    y: 44,
    detail:
      "Road surfaces, traffic rules, and municipal cleaning determined the efficiency of horse movement.",
    citationIds: [1, 2]
  },
  {
    id: "labor",
    label: "Labor",
    x: 28,
    y: 58,
    detail:
      "Drivers, teamsters, blacksmiths, stable hands, and cleaners made the system operable every day.",
    citationIds: [2, 3]
  },
  {
    id: "waste",
    label: "Waste",
    x: 54,
    y: 72,
    detail:
      "Manure, urine, and dead animals created logistical and sanitary burdens that cities had to manage.",
    citationIds: [1, 2, 5]
  }
];

export const mediaPlaceholders = [
  {
    slug: "historic-street-scene",
    title: "Historical street scene placeholder",
    creator: "To be added",
    source: "Museum/archive source pending",
    date: "To be added",
    rights: "Do not publish a real image here until rights are verified.",
    alt: "Placeholder for a nineteenth-century street crowded with horse-drawn vehicles."
  },
  {
    slug: "transit-map",
    title: "Urban route map placeholder",
    creator: "Original diagram recommended",
    source: "Project-generated",
    date: "2026",
    rights: "Original student-created graphic",
    alt: "Placeholder for a map showing horse transit routes and urban growth."
  },
  {
    slug: "stable-interior",
    title: "Stable infrastructure placeholder",
    creator: "To be added",
    source: "Archive source pending",
    date: "To be added",
    rights: "Use only with clear public-domain or open-license status.",
    alt: "Placeholder for a historical stable or carriage house interior."
  }
];
