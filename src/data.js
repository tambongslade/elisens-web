// ============================================================
// ELI'Sens — content + image sources
// Images are Unsplash placeholders for the prototype.
// Swap the `img` URLs here when the real photoshoot is ready.
// ============================================================

const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Real ELI'Sens photos (filename = the slot it fills on the site).
import heroImg from "./assets/new images/hero.jpeg";
import reservationImg from "./assets/new images/reservation.jpeg";
import diagnosticImg from "./assets/new images/diagnostic Capillaire.jpeg";
import espaceEnfantImg from "./assets/new images/espace enfant.jpeg";
import soinImg from "./assets/new images/soin capilaire.png";

// Slots with a real photo use the local import; the rest remain
// Unsplash placeholders until the matching photo is delivered.
export const IMAGES = {
  hero: heroImg, // real hero photo
  manifesto: u("1632765854612-9b02b6ec2b15", 1400), // serene afro, neutral ground
  ritual: u("1632765866070-3fadf25d3d5b", 1400), // hands in the hair — le geste
  serviceSoin: soinImg, // real soin capillaire photo
  serviceTresses: u("1535588706069-af8f2d837332", 1000), // twists / protective style
  serviceDiagnostic: diagnosticImg, // real diagnostic capillaire photo
  serviceEnfant: espaceEnfantImg, // real espace enfant photo
  serviceHomme: u("1567894340315-735d7c361db0", 1000), // soin homme & barbe (Black man, barbershop)
  boutique: u("1707162740897-cf2f057d2a41", 1200), // elegant, light ground
  bookingPortrait: reservationImg, // real reservation photo

  // ELI'Sens · Homme — men's grooming gallery (Unsplash placeholders, Black men)
  homme: u("1686671805337-7d8aa64b965f", 1200), // barber clipping — le soin homme
  homme2: u("1567894340315-735d7c361db0", 1000), // barber at work, focus
  homme3: u("1648389824823-483ec5ca228a", 900), // profil, barbe nette
  homme4: u("1612214070475-1e73f478188c", 900), // profil, barbe sculptée
  homme5: u("1605980776566-0486c3ac7617", 900), // portrait studio premium
};

// ELI'Sens · Homme — copy + gallery
export const HOMME = {
  eyebrow: "ELI'Sens · Homme",
  title: "Le soin n'a pas de genre.",
  lead:
    "Barbe, cheveux crépus, cuir chevelu : nos rituels s'adressent aussi à eux. Coupe maîtrisée, tracé net, soin de la barbe — le même geste précis et bienveillant, pensé pour l'homme.",
  gallery: [
    { key: "homme", alt: "Soin et coupe homme chez ELI'Sens", feature: true },
    { key: "homme2", alt: "Coiffeur au travail — soin homme" },
    { key: "homme3", alt: "Barbe nette, tracé précis" },
    { key: "homme4", alt: "Profil, barbe sculptée" },
    { key: "homme5", alt: "Portrait — un client ELI'Sens" },
  ],
};

// Booking demo — 3 appointment slots, 90 minutes each
export const SLOT_MINUTES = 90;
export const SLOTS = [
  { id: "morning", start: "09:00", end: "10:30" },
  { id: "midday", start: "11:00", end: "12:30" },
  { id: "afternoon", start: "14:00", end: "15:30" },
];

export const NAV = [
  { label: "La maison", href: "#manifesto" },
  { label: "Homme", href: "#homme" },
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
  {
    title: "Soin homme & barbe",
    desc: "Coupe maîtrisée, tracé net et soin de la barbe. Le même rituel attentif, pensé pour le cheveu et la peau de l'homme.",
    tag: "Homme",
    img: "serviceHomme",
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
