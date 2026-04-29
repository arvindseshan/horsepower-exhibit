export type Citation = {
  id: number;
  short: string;
  full: string;
  note?: string;
};

export const citations: Citation[] = [
  {
    id: 1,
    short: "Tarr and McShane, 2008",
    full: "Tarr, Joel A., and Clay McShane. “The Horse as an Urban Technology.” Journal of Urban Technology 15, no. 1 (2008): 5–17."
  },
  {
    id: 2,
    short: "McShane and Tarr, The Horse in the City",
    full: "McShane, Clay, and Joel A. Tarr. The Horse in the City: Living Machines in the Nineteenth Century. Baltimore: Johns Hopkins University Press, 2007."
  },
  {
    id: 3,
    short: "Kinney, The Carriage Trade",
    full: "Kinney, Thomas A. The Carriage Trade: Making Horse-Drawn Vehicles in America. Baltimore: Johns Hopkins University Press, 2004."
  },
  {
    id: 4,
    short: "McShane, Down the Asphalt Path",
    full: "McShane, Clay. Down the Asphalt Path: The Automobile and the American City. New York: Columbia University Press, 1994."
  },
  {
    id: 5,
    short: "Melosi placeholder",
    full: "Melosi, Martin V. Full citation to be confirmed and inserted by the project author.",
    note: "Placeholder preserved from assignment brief. Replace with the exact edition and publication details before submission."
  },
  {
    id: 6,
    short: "Kheraj placeholder",
    full: "Kheraj, Sean. “The Great Epizootic of 1872–73...” Full citation to be confirmed and inserted by the project author.",
    note: "Placeholder preserved from assignment brief. Replace with the journal, volume, and page details before submission."
  },
  {
    id: 7,
    short: "Mom and Kirsch placeholder",
    full: "Mom, Gijs, and David Kirsch. “Technologies in Tension...” Full citation to be confirmed and inserted by the project author.",
    note: "Placeholder preserved from assignment brief. Replace with the exact publication details before submission."
  }
];
