// ============================================================
// ELI'Sens — content + image sources
// Images are Unsplash placeholders for the prototype.
// Swap the `img` URLs here when the real photoshoot is ready.
// ============================================================

const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// All imagery: Black women, natural / afro hair (Unsplash placeholders).
// Swap these IDs for the real ELI'Sens photoshoot when ready.
export const IMAGES = {
  hero: u("1571375814199-4072612351aa", 2000), // dramatic dark afro portrait
  manifesto: u("1632765854612-9b02b6ec2b15", 1400), // serene afro, neutral ground
  ritual: u("1632765866070-3fadf25d3d5b", 1400), // hands in the hair — le geste
  serviceSoin: u("1519699047748-de8e457a634e", 1000), // soft afro, rose ground
  serviceTresses: u("1535588706069-af8f2d837332", 1000), // twists / protective style
  serviceDiagnostic: u("1585890483046-9461ebc1dace", 1000), // calm clean portrait
  serviceEnfant: u("1529123202249-4f6224196c9b", 1000), // joyful, natural curls
  boutique: u("1707162740897-cf2f057d2a41", 1200), // elegant, light ground
  bookingPortrait: u("1524159730786-4e74a1b78d7d", 1200), // warm, contemplative
};

export const NAV = [
  { label: "La maison", href: "#manifesto" },
  { label: "Le rituel", href: "#ritual" },
  { label: "Nos soins", href: "#services" },
  { label: "Le poids des mèches", href: "#weight" },
  { label: "Rendez-vous", href: "#booking" },
];

export const VALUES = [
  { word: "Respect", line: "De votre histoire et de votre cuir chevelu." },
  { word: "Expertise", line: "Un geste maîtrisé, jamais agressif." },
  { word: "Douceur", line: "Le soin comme un moment, pas une contrainte." },
  { word: "Authenticité", line: "Votre beauté naturelle, célébrée." },
  { word: "Éveil", line: "Comprendre ses cheveux pour mieux les aimer." },
];

export const RITUAL = [
  {
    n: "01",
    title: "Le diagnostic",
    text: "On écoute, on observe, on touche. Type de cheveu, densité, sensibilité du cuir chevelu — chaque chevelure raconte une histoire que l'on apprend à lire.",
  },
  {
    n: "02",
    title: "Le soin",
    text: "Un rituel lent et sensoriel. Des gestes précis, des produits choisis, une attention qui prend soin du cheveu autant que de la personne.",
  },
  {
    n: "03",
    title: "Le conseil",
    text: "Repartir avec une routine claire, des coiffures adaptées et la juste mesure — pour que la beauté ne se paie jamais en douleur.",
  },
];

export const SERVICES = [
  {
    title: "Soins du cuir chevelu",
    desc: "Diagnostic, nettoyage profond, hydratation et massages apaisants pour un cuir chevelu sain et respirant.",
    tag: "Soin signature",
    img: "serviceSoin",
  },
  {
    title: "Tresses & coiffures protectrices",
    desc: "Des coiffures pensées pour protéger, pas pour tirer. Tension maîtrisée, poids surveillé, beauté durable.",
    tag: "Coiffure",
    img: "serviceTresses",
  },
  {
    title: "Diagnostic capillaire",
    desc: "Une lecture complète de votre chevelure et un suivi dans le temps, pour prévenir chute, casse et alopécie de traction.",
    tag: "Prévention",
    img: "serviceDiagnostic",
  },
  {
    title: "Espace enfant",
    desc: "Un premier rapport au soin tout en douceur. Des gestes adaptés aux cheveux fragiles des plus jeunes.",
    tag: "Famille",
    img: "serviceEnfant",
  },
];

// "Le poids des mèches" — pedagogical comparison points (brief, module 5)
export const WEIGHT_REFS = [
  { max: 0.25, object: "une pomme", emoji: "🍎" },
  { max: 0.45, object: "une orange", emoji: "🍊" },
  { max: 0.7, object: "une mangue", emoji: "🥭" },
  { max: 1.0, object: "un ananas", emoji: "🍍" },
  { max: 1.35, object: "une pastèque moyenne", emoji: "🍉" },
  { max: 1.8, object: "une brique", emoji: "🧱" },
  { max: 3.0, object: "un sac de riz de 2,5 kg", emoji: "🌾" },
];

// recommended comfort threshold (kg) by hair density
export const DENSITY = [
  { key: "fine", label: "Fine", threshold: 0.6 },
  { key: "moyenne", label: "Moyenne", threshold: 0.95 },
  { key: "dense", label: "Dense", threshold: 1.3 },
];
