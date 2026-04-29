export type Source = {
  id: string;
  num: number;
  /** Where the entry appears in the Sources section. */
  listSection: "primary" | "peer-reviewed" | "other";
  shortLabel: string;
  full: string;
};

/** Numbering matches in-text [n] callouts. Works Cited entries follow MLA 9. */
export const sources: Source[] = [
  {
    id: "tarr-mcshane-2008",
    num: 1,
    listSection: "peer-reviewed",
    shortLabel: "Tarr & McShane (2008), “The Horse as an Urban Technology”",
    full:
      'Tarr, Joel A., and Clay McShane. "The Horse as an Urban Technology." *Journal of Urban Technology*, vol. 15, no. 1, Apr. 2008, pp. 5-17, https://doi.org/10.1080/10630730802097765.',
  },
  {
    id: "mcshane-tarr-2007",
    num: 2,
    listSection: "peer-reviewed",
    shortLabel: "McShane & Tarr (2007), The Horse in the City",
    full:
      "McShane, Clay, and Joel A. Tarr. *The Horse in the City: Living Machines in the Nineteenth Century*. Johns Hopkins UP, 2007.",
  },
  {
    id: "kohlstedt-2017",
    num: 3,
    listSection: "other",
    shortLabel: "Kohlstedt (2017), “The Big Crapple,” 99% Invisible",
    full:
      'Kohlstedt, Kurt. "The Big Crapple: NYC Transit Pollution from Horse Manure to Horseless Carriages." *99% Invisible*, 6 Nov. 2017, https://99percentinvisible.org/article/cities-paved-dung-urban-design-great-horse-manure-crisis-1894.',
  },
  {
    id: "roka-2024",
    num: 4,
    listSection: "other",
    shortLabel: "Roka (2024), Village Preservation blog",
    full:
      'Roka, William. "Mass Transit and Manure: New York\'s Lost Era of Horse-Drawn Streetcars." *Village Preservation*, 26 July 2024, www.villagepreservation.org/2024/07/26/mass-transit-and-manure-new-yorks-lost-era-of-horse-drawn-streetcars/.',
  },
  {
    id: "weesner-2022",
    num: 5,
    listSection: "primary",
    shortLabel: "Weesner (2022), “Getting Back in the Saddle,” The Western Planner",
    full:
      'Weesner, J. P. "Getting Back in the Saddle: Lessons from a Horse-Powered Past for Transportation Planning Today." *The Western Planner*, Feb. 2022, www.westernplanner.org.',
  },
  {
    id: "mom-kirsch-2001",
    num: 6,
    listSection: "peer-reviewed",
    shortLabel: "Mom & Kirsch (2001), “Technologies in Tension”",
    full:
      'Mom, Gijs P. A., and David A. Kirsch. "Technologies in Tension: Horses, Electric Trucks, and the Motorization of American Cities, 1900–1925." *Technology and Culture*, vol. 42, no. 3, July 2001, pp. 489-518, https://doi.org/10.1353/tech.2001.0128.',
  },
  {
    id: "almeroth-williams-2013",
    num: 7,
    listSection: "peer-reviewed",
    shortLabel: "Almeroth-Williams (2013), “The brewery horse…”",
    full:
      'Almeroth-Williams, Thomas. "The brewery horse and the importance of equine power in Hanoverian London." *Urban History*, vol. 40, no. 3, Aug. 2013, pp. 416-41, https://doi.org/10.1017/S0963926813000333.',
  },
  {
    id: "britannica-chariot",
    num: 8,
    listSection: "other",
    shortLabel: "Encyclopædia Britannica, “Chariot”",
    full: '"Chariot." *Encyclopædia Britannica*, www.britannica.com/technology/chariot.',
  },
  {
    id: "standard-of-ur-war",
    num: 9,
    listSection: "primary",
    shortLabel: "Standard of Ur, War panel (British Museum)",
    full:
      "*Standard of Ur*, War Side. ca. 2500 BCE, shell, limestone, and lapis lazuli inlay, excavated Royal Cemetery, Ur. *British Museum*, London, www.britishmuseum.org/collection/object/W_1928-1010-1. Photograph: *Wikimedia Commons*, https://commons.wikimedia.org/wiki/File:Standard_of_Ur_-_War_side.jpg.",
  },
  {
    id: "geels-2005",
    num: 10,
    listSection: "peer-reviewed",
    shortLabel: "Geels (2005), horse-drawn carriages to automobiles",
    full:
      'Geels, Frank W. "The Dynamics of Transitions in Socio-technical Systems: A Multi-level Analysis of the Transition Pathway from Horse-drawn Carriages to Automobiles (1860–1930)." *Technology Analysis & Strategic Management*, vol. 17, no. 4, 2005, pp. 445-476.',
  },
  {
    id: "mcshane-tarr-2003-decline",
    num: 11,
    listSection: "peer-reviewed",
    shortLabel: "McShane & Tarr (2003), decline of the urban horse",
    full:
      'McShane, Clay, and Joel A. Tarr. "The Decline of the Urban Horse in American Cities." *Journal of Transport History*, vol. 24, no. 2, 2003, pp. 177-198.',
  },
  {
    id: "riguelle-2022-belgian-traffic",
    num: 12,
    listSection: "peer-reviewed",
    shortLabel: "Riguelle (2022), horse-drawn traffic in Belgian cities",
    full:
      'Riguelle, William. "\'Look out! Get back!\' Horse-drawn traffic and its challenges in Belgian cities in the early modern period." *Urban History*, vol. 50, no. 3, Aug. 2023, pp. 387-403, https://doi.org/10.1017/S0963926822000013.',
  },
  {
    id: "jancer-2017-amish-buggy",
    num: 13,
    listSection: "other",
    shortLabel: "Jancer (2017), Amish horse-drawn buggy technology",
    full:
      'Jancer, Matthew. "The Amish Horse-Drawn Buggy Is More Tech-Forward Than You Think." *Popular Mechanics*, 13 Jan. 2017, www.popularmechanics.com/cars/car-technology/a24666/how-the-amish-build-a-buggy/.',
  },
];

export const nav = [
  { id: "intro", label: "Introduction", kicker: "Start" },
  { id: "q1", label: "The technology", kicker: "Exhibit" },
  { id: "q2", label: "Origins", kicker: "Exhibit" },
  { id: "q3", label: "Timing & spread", kicker: "Exhibit" },
  { id: "q4", label: "Impacts", kicker: "Exhibit" },
  { id: "q5", label: "Decline", kicker: "Exhibit" },
  { id: "q6", label: "Resurgence?", kicker: "Exhibit" },
  { id: "chronology", label: "Chronology", kicker: "Exhibit" },
  { id: "sources", label: "Works Cited", kicker: "References" },
] as const;

/**
 * Hotspot labels: Feed, Stables, Manure & sanitation, Human labor, Vehicles, Infrastructure.
 * Copy tracks Question 1 (all cite [1]).
 */
export const q1Hotspots = [
  {
    id: "feed",
    label: "Feed",
    description:
      "Constant suplly of grain, hay, and water were essential to maintaining the horse transportation system. Horses need around three tons of oats and hay per year",
    citeNums: [1] as const,
  },
  {
    id: "stables",
    label: "Stables",
    description:
      "Stables were inportant urban facilities, infrastructure that let horse transport run on a schedule. Animals needed housing and space for maintenance.",
    citeNums: [1] as const,
  },
  {
    id: "manure",
    label: "Manure & Sanitation",
    description:
      "Manure accumulation was a key byproduct of horse transportation, linking horse transportation to street cleaning, waste management, and disease risk.",
    citeNums: [1] as const,
  },
  {
    id: "labor",
    label: "Human labor",
    description:
      "Drivers, conductors, grooms, and teamsters are part of the system. People scheduled runs, hitched teams, mucked stalls, performed maintenance, conducted street—labor, and supported medical care",
    citeNums: [1] as const,
  },
  {
    id: "vehicles",
    label: "Vehicles",
    bulletLeadIn: "A horse might be pulling:",
    bulletLines: [
      "People: private carriages, or public transportation like omnibuses/horsecars",
      "Commercial goods and industrial materials: wagons, drays, and carts (e.g. farm and market produce, or baggage between rail depots and final destinations)",
      "Services: mail, firefighting gear, or street-maintenance tools and supplies",
    ] as const,
    citeNums: [1] as const,
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    description:
      "Streets of 17th-19th century cities were built for horse-drawn transportation. They were specifically engineered to be safe and efficient for horses and carriages, indicating a transition from pedestrian-centric to horse-drawn-centric cities.",
    citeNums: [1] as const,
  },
] as const;

/** Block with optional in-text endnotes (Sources list). */
export type ExhibitCitedPara = { text: string; citeNums?: readonly number[] };

export type ExhibitRemoteFigure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  commonsHref: string;
  /** `clip-path: inset(...)` to trim empty margins in the source file. */
  trimInset?: string;
};

export const q2 = {
  assignmentPrompt:
    "Where and why does it originate? What need or desire does this technology fulfill? Is this a novel technology? Is it the popularizing of much older traditions?",
  title: "Where and why does it originate?",
  paragraphs: [
    {
      text: "Animal-drawn transport can be traced back to ancient civilizations. It appears as early as 3,000 BCE in Mesopotamia. As an agricultural society, the Mesopotamians used ox carts for the transportation of agricultural goods and equipment. The transition to a horse-drawn carriage emerged after the domestication of horses around 2000 BCE.",
      citeNums: [8] as const,
    },
    {
      text: "Horse-drawn transportation, specifically horse-drawn carriages, is not a novel technology. In fact, there is a very similar predecessor, the chariot. Chariots were originally invented in Mesopotamia and Egypt for warfare, cultural ceremonies, and even sport. As time went on, these chariots became normalized. No longer were horse-drawn carriages reserved for these special circumstances. More and more people began using horses for transportation on a regular basis. As the technology began to spread around the world, the chariots’ technology began to evolve.",
      citeNums: [8, 12] as const,
    },
    {
      text: "Horse-drawn chariots became important due to their utility on the battlefield in ancient Mesopotamia. Evidence from the Sumerian Standard of Ur (2500 BCE) depicts battlewagons being pulled by wild asses called onagers. These wagons had solid wheels and were heavy. As the wheel itself evolved to become spoked and horses were domesticated, in 2000 BCE, the horse-drawn carriage emerged. These lighter-weight chariots played an important role in the military. The concept of the chariot (a horse-drawn carriage) spread across many ancient civilizations.",
      citeNums: [8, 9] as const,
    },
    {
      text: "Without the need for maneuverability, the two-wheeled chariot could be replaced with a four-wheeled cart. This allowed for a much more comfortable ride, while placing much less strain on the horses. With this new improvement, the ability to travel long distances became much more common. As travelling a long distance became a normality, people needed protection from the environment, such as from rain and storms. They also needed protection from thieves. The solution was to add a roof to create a carriage. This way, any riders would be shielded from the cold and weather. Additionally, riders had privacy against any thieves scheming to steal.",
    },
    {
      text: "With these additions and new innovations, the older reasons and traditions behind chariots died out. No longer were they used in races or in ceremonies. Empires collapsed and cultural significance died out. Horse-drawn carriages began to represent something new. Utilizing horse-drawn carriages instead represented wealth and class in the European cities.",
      citeNums: [10] as const,
    },
  ],
  /** Standard of Ur, War side—pairs with the Sumer / battlefield paragraph above. `trimInset` softens large blank bands in the museum photograph file. */
  figure: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Standard_of_Ur_-_War_side.jpg",
    width: 3272,
    height: 1412,
    alt: "Standard of Ur, War side: Sumerian mosaic with chariots, equids, and infantry in formation",
    caption:
      "Standard of Ur, “War” side (Sumer, c. 2500 BCE, Royal Cemetery at Ur). The lower register shows a phalanx of chariots; the upper, infantry. British Museum. Photo: LeastCommonAncestor (derivation and crop; based on a prior image by Babelstone), via Wikimedia Commons (CC BY-SA 3.0).",
    commonsHref: "https://commons.wikimedia.org/wiki/File:Standard_of_Ur_-_War_side.jpg",
    trimInset: "7% 1.5% 7% 1.5%",
  } as const satisfies ExhibitRemoteFigure,
} as const;

export const q3 = {
  title: "When does it become important, and why?",
  paragraphs: [
    {
      text: "Horse-drawn carriages exploded in popularity during the rapid urbanization of Europe. As European cities expanded, travelling between them became more and more prevalent. The number of roads multiplied, and the quality improved. As a result, a new, improved mode of transportation was needed. Horse-drawn carriages filled this gap. Up until this point, there was no reason for horse-drawn carriages to emerge. Once the roads increased in quantity and quality, the next step was to increase horse domestication on a large scale. With the increase in the population of horses to pull the carriages, there were no other roadblocks.",
      citeNums: [5] as const,
    },
    {
      text: "Like many innovations in the world, another driving force was war and defense. As troops needed more large-scale supplies, and since roads had improved, wagons and other horse-drawn carriages were able to fill this gap. However, these horse-drawn carriages were not successfully widespread among common people until the suspension systems improved. Once Obadiah Elliott invented the modern metal leaf spring, travelling became much more convenient and enjoyable. This is one more factor for horse-drawn carriages to have the societal explosion that they had.",
      citeNums: [13] as const,
    },
    {
      text: "Lastly, horse-drawn carriages took off with colonialism. Since the United States was so large and people travelled so much, there was a strong need for it to allow for easy transportation. The rapid spread of horse-drawn carriages demonstrates how social, economic, and cultural factors need to align for innovations to have a worldwide impact.",
    },
  ] as const satisfies readonly ExhibitCitedPara[],
} as const;

export type ChronologyMilestone = {
  /** Single date / era line shown above each milestone title */
  era: string;
  title: string;
  body: string;
  citeNums?: readonly number[];
};

export const chronologyMilestones: readonly ChronologyMilestone[] = [
  {
    era: "3000–500 BCE",
    title: "Chariots in Mesopotamia and Egypt",
    body: "Light, often two-wheeled vehicles, were built for speed and used in war, sport, and ceremonies.",
    citeNums: [8],
  },
  {
    era: "500 BCE–c. 1600 CE",
    title: "Diversification beyond the chariot",
    body: "As use widened, designs transitioned from two-wheelers to heavier four-wheeled forms that traded maneuverability for load capacity, comfort, and protection from weather.",
    citeNums: [8],
  },
  {
    era: "17th–19th c",
    title: "Urban horse-drawn mobility in Europe and North America",
    body: "Cities came to run on large horse populations, connecting markets, depots, and homes. Horse-drawn modes became a defining part of everyday transport.",
    citeNums: [1, 2],
  },
  {
    era: "1830s-",
    title: "Networked public transportation",
    body: "Omnibuses and horsecar lines (e.g. New York horsecar) implemented routes, fares, and schedules, enabling mass public transportation through rapidly industrializing city centers. Peak horse to human ratioes followed in the largest cities.",
    citeNums: [1, 2, 4],
  },
  {
    era: "1880s-",
    title: "Electric and mechanized competition",
    body: "Street railways and, later, motorized vehicles offered alternatives to efficient transportation. Biological limits and urban sanitation pressure helped tip the balance in favor of these newer technologies.",
    citeNums: [2, 3, 6],
  },
  {
    era: "1900–1930 CE",
    title: "Widespread transition off living horsepower",
    body: "In many places, mixed use of horse and motor transport gave way to changing infrastructure designed for motor vehicles and fixed-route electric transit, though full replacement took time and we still see the remnants of the impact of horse-based transportation to this day.",
    citeNums: [1, 2, 6],
  },
];

export const q1Paragraphs: { text: string; citeNums: number[] }[] = [
  {
    text: "Horse-drawn transportation was a critical tool for mobility, especially prevalent throughout the seventeenth to nineteenth centuries in Europe and North America. It enabled the large-scale movement of people, goods, and services, addressing the “last mile problem.” Its most widespread form (e.g., wagons, carts, carriages, omnibuses, and horsecars) became essential to daily urban life. These vehicles were used to transport people for everyday travel, deliver commercial goods, carry industrial materials, and support essential city services such as firefighting, mail, and street maintenance. In rapidly growing cities, horse-drawn systems connected rail depots, markets, and residential areas, making them key to rapid urban industrialization. Nineteenth-century cities with populations over 100,000 averaged a horse-to-human ratio of one to fifteen.",
    citeNums: [1],
  },
  {
    text: "At its core is the harnessing of the biological power of horses to the mechanical energy needed to carry and pull heavy loads across large distances of roads. In the nineteenth century, horses were widely seen as machines rather than as mammals.",
    citeNums: [1],
  },
  {
    text: "However, horse-based transportation is more than just a form of vehicle, but a broader and more complex technological system ingrained into the urban infrastructure itself. It required the upkeep of an ecosystem comprising roads, stables, feed supply systems, and human labor. It required a constant supply of grain, hay, water, and workers. In addition, manure became a significant byproduct, closely tying the transportation infrastructure to waste management and urban sanitation.",
    citeNums: [1, 7],
  },
];

export type Q4SubPara = { text: string; citeNums?: readonly number[] };

export type Q4Subsection = {
  id: string;
  title: string;
  paras: readonly Q4SubPara[];
};

export const q4 = {
  intro:
    "The cities we live in today were built around the horse. Street widths, road grades, materials, and neighborhood layouts all bear the imprint of an era where the fastest thing on the road went at a gallop.",
  subsections: [
    {
      id: "invention-public-transit",
      title: "The invention of public transit",
      paras: [
        {
          text: "Before the horse omnibus, urban travel was either private or on foot. The horse-drawn omnibus, which first appeared in New York City around 1830, changed this entirely by introducing fixed routes and predetermined schedules. By 1853, omnibuses averaged 13,420 trips per day in New York, collecting 120,000 passenger fares, with 683 licensed across the city.",
          citeNums: [1] as const,
        },
        {
          text: "The horse-drawn streetcar refined this further. Running on iron rails, a horse could pull a vehicle at 30% higher speed and carry twice as many passengers as an omnibus. Horsecars became America's first true urban mass transit system. By 1880, horsecar ridership per capita in New York was 127 trips per year; by 1890, it reached 297—a 134% increase in a single decade.",
          citeNums: [11] as const,
        },
        {
          text: "This framework of public transit was invented for the horse, then inherited by every other transit that followed.",
        },
      ],
    },
    {
      id: "streets-redefined",
      title: "Streets redesigned, then redefined",
      paras: [
        {
          text: "Horse-drawn traffic forced cities to standardize the management of public space in ways that persist today. The search for pavement mixtures that balanced hoof traction and wheel efficiency drove decades of experimentation with macadam, granite blocks, asphalt, and concrete. The road surfaces we drive on today are the direct product of that research, designed originally to serve animals.",
          citeNums: [5] as const,
        },
        {
          text: "Consequentially, heavy horse traffic prompted a fundamental cultural shift in how streets were understood. Early 19th-century streets functioned as social spaces for play, street vending, and community gathering. As horse trams and wagons multiplied, streets were redefined as transportation arteries, pushing social activity into parks and sidewalks. This redefinition is the foundation of modern traffic engineering, and it was established in the horse era, not the automobile era.",
          citeNums: [10] as const,
        },
      ],
    },
    {
      id: "birth-suburban",
      title: "The birth of suburban culture",
      paras: [
        {
          text: "Horse trams were the first technology to allow middle-class workers to live at a distance from their workplace. This pattern was invented on the back of the horse tram, and the cultural desire for suburban living that exploded in 20th-century America was first articulated in the horse era as families used omnibuses and horse trams to escape crowded city centers. When electric trams succeeded horse-drawn trams in the 1890s, they utilized the template instilled by previous transportation methods.",
          citeNums: [11, 10] as const,
        },
      ],
    },
    {
      id: "mobility-culture",
      title: "Mobility culture: from carriage promenades to car culture",
      paras: [
        {
          text: 'Many cultural values associated with the car, such as freedom of movement, open-road travel, and driving as a leisure activity, were first articulated on horseback in public parks. As cities built parkways in the 1870s–1890s, the wealthy class developed carriage promenading: driving for pleasure and display. Bicycles inherited this culture in the 1890s, popularizing "touring," and automobiles inherited it from bicycles. The road trip as a cultural ideal traces back to horse-drawn carriages in 19th-century parks.',
          citeNums: [10] as const,
        },
        {
          text: 'Even the unit of automotive power is a fossil of the horse era. When James Watt patented his steam engine in 1775, he calibrated it against horses by defining one "horsepower" as precisely 33,000 foot-pounds of work per minute, derived from experiments with dray horses. This unit remains the universal standard for measuring engine output on every car sold anywhere in the world today.',
          citeNums: [1] as const,
        },
      ],
    },
  ] as const satisfies readonly Q4Subsection[],
  quote: {
    text: "The history of urban horses matters a great deal and holds valuable information for planners and engineers in the present. Understanding a community’s horse-powered past can reveal a footprint designed for the very low-speed, complete street environment we work so hard to create today.",
    citeNums: [5] as const,
  },
  closing: "",
} as const;

export type ExhibitBlock =
  | { type: "p"; text: string; citeNums?: readonly number[] }
  | { type: "ul"; items: readonly string[]; citeNums?: readonly number[] };

/** Question 5: all copy lives in these cards (overview + three themes + competition). */
export const q5DeclineCards: readonly {
  id: string;
  title: string;
  /** Full-width banner card on top; three theme cards below. */
  layout: "full" | "third";
  blocks: readonly ExhibitBlock[];
}[] = [
  {
    id: "overview",
    title: "Three pressures",
    layout: "full",
    blocks: [
      { type: "p", text: "Horse-drawn transportation fell out of favor due to" },
      { type: "ul", items: ["biological limits", "ecological burdens", "economic inefficiencies"] },
      { type: "p", text: "These collided with the electric and motorized alternatives." },
    ],
  },
  {
    id: "biological",
    title: "Biological limits",
    layout: "third",
    blocks: [
      { type: "p", text: "Horses require constant" },
      { type: "ul", items: ["Feeding", "Watering", "medical care"] },
      { type: "p", text: "and have short working lives." },
    ],
  },
  {
    id: "ecological",
    title: "Ecological burdens",
    layout: "third",
    blocks: [
      { type: "p", text: "By the 1880s, cities like New York had at least 150,000 horses" },
      { type: "p", text: "Cities were overwhelmed by" },
      { type: "ul", items: ["Manure", "Urine", "Flies", "Carcasses"] },
      { type: "p", text: "This created severe sanitation hazards and contributed to disease outbreaks." },
      {
        type: "p",
        text: "Horses also need around three tons of oats and hay per year which would require millions of acres of rural land to sufficiently produce their food supply.",
        citeNums: [3],
      },
    ],
  },
  {
    id: "economic",
    title: "Economic inefficiencies & alternatives",
    layout: "third",
    blocks: [
      {
        type: "p",
        text: "The cost of maintaining horse populations became costly compared to electric streetcars and motor vehicles which could operate longer and carry heavy loads without fatigue.",
        citeNums: [2, 6],
      },
      {
        type: "p",
        text: "The first horse-drawn streetcar was introduced in 1832 which allowed fewer horses to carry heavier loads and passengers a smoother ride.",
      },
      {
        type: "p",
        text: "Electric transit systems in the 1880s provided higher speeds, greater capacity, and lower operating costs than horsecar lines.",
        citeNums: [6],
      },
      { type: "p", text: "Electric vehicles paved the way for rapid mass transit.", citeNums: [4] },
    ],
  },
];

/** Question 6 — fields power the bento layout. */
export const q6Content = {
  thesis:
    "Resurgence of horse-drawn vehicles is unlikely due to ecological limits: manure, disease vectors, and carcass disposal which would lead to sanitation problems.",
  scale:
    "Horses would also be unable to commute large distances that we have grown accustomed to on a modern urban scale.",
  ethics:
    "Although the usage of horses as tools of labor was a standard in the nineteenth-century, using horses as a main source of labor would now raise ethical and legal opposition depending on animal treatment.",
  transit:
    "Modern transit continues to vastly outperform horses in speed, capacity, energy, and cost efficiency.",
  tourism:
    "Some cases where horse drawn vehicles may reappear are for tourism purposes which appeal to historic events as a cultural experience rather than for strictly transportation purposes.",
  farming: "Could also be used for small-scale farming in specific rural settings.",
} as const;
