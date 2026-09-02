/**
 * Alle Inhalte an einem Ort.
 *
 * WICHTIG:
 * - Felder mit `source: "dscatering.de"` stammen 1:1 (inhaltlich) von
 *   https://www.dscatering.de (Stand: Analyse vom Erstellungsdatum dieser Seite).
 * - Felder mit `source: "placeholder"` sind NICHT von der echten Website und
 *   müssen später durch echte Angaben von DS Catering ersetzt werden.
 */

export const brand = {
  company: "DS Catering",
  name: "The Mac Factory",
  epithet: "Der Käse-König Food Trailer",
  since: 2022,
  heroKicker: "DS Catering präsentiert",
  heroHeadline: ["MAC & CHEESE.", "BUT MAKE IT", "AN EXPERIENCE."],
  heroIntro:
    "Bereit für ultimativen Käsegenuss auf Rädern? Wir präsentieren stolz unsere köstlichen Mac and Cheese Variationen, die eure Geschmacksknospen verzaubern werden.",
  source: "dscatering.de",
};

export const story = {
  eyebrow: "Seit 2022 auf Achse",
  title: ["From Food Trailer", "to Mac & Cheese", "Experience."],
  paragraphs: [
    "Unsere Mac and Cheese Catering Firma, die seit 2022 Street Food Festivals und Caterings veranstaltet, ist eine aufregende Ergänzung zur Food-Szene.",
    "Wir sind leidenschaftliche Verfechter des klassischen Macaroni und Käses und haben es uns zur Mission gemacht, diesen zeitlosen Favoriten auf Straßenfesten und Veranstaltungen in unserer Region und darüber hinaus zu feiern.",
    "Unsere Spezialität ist es, Mac and Cheese in eine aufregende Street-Food-Erfahrung zu verwandeln.",
  ],
  source: "dscatering.de",
};

// Die 5 Punkte von "Was unseren Catering-Service auszeichnet" — wortgleich
// inhaltlich von der bestehenden Seite übernommen, nur strukturiert.
export const differentiators = [
  {
    label: "Geschmack",
    title: "Vielfältige Geschmacksrichtungen",
    text:
      "Wir bieten nicht nur traditionelles Mac and Cheese an, sondern auch kreative und gewagte Variationen, die die Geschmacksknospen der Kunden herausfordern und begeistern. Von exotischen Gewürzen bis hin zu innovativen Toppings — unsere Auswahl ist grenzenlos.",
  },
  {
    label: "Zutaten",
    title: "Frische Zutaten",
    text:
      "Wir legen großen Wert auf die Qualität unserer Zutaten. Wir verwenden frische, lokale Produkte, um sicherzustellen, dass jedes Gericht voller Aromen und Nährstoffe ist.",
  },
  {
    label: "Erlebnis",
    title: "Foodtruck-Erlebnis",
    text:
      "Unser Foodtruck ist ein Blickfang auf jedem Street Food Festival. Unsere freundlichen und erfahrenen Köche bereiten vor Ort frische Portionen Mac and Cheese zu, die den Duft von Käse und Gewürzen in die Luft tragen.",
  },
  {
    label: "Flexibilität",
    title: "Anpassungsfähigkeit",
    text:
      "Wir können uns an die Bedürfnisse und Vorlieben unserer Kunden anpassen — ob spezielle Diätanforderungen oder ein individuelles Geschmacksprofil für eure Veranstaltung.",
  },
  {
    label: "Team",
    title: "Kreativität und Leidenschaft",
    text:
      "Unsere Crew ist mit Leidenschaft dabei und liebt, was sie tut. Wir sind stolz darauf, unsere Kreativität in jedes Gericht und jede Veranstaltung einfließen zu lassen.",
  },
];

// Die bestehende Website nennt KEINE konkreten Produktnamen/Sorten —
// nur "vielfältige, kreative und gewagte Variationen". Damit hier nichts
// erfunden wird, sind das bewusst offene Platzhalter-Slots.
export const variants = [
  {
    id: "v1",
    name: "Variante 1",
    note: "Platzhalter — später mit echtem Namen & Beschreibung ersetzen",
    placeholder: true,
  },
  {
    id: "v2",
    name: "Variante 2",
    note: "Platzhalter — später mit echtem Namen & Beschreibung ersetzen",
    placeholder: true,
  },
  {
    id: "v3",
    name: "Variante 3",
    note: "Platzhalter — später mit echtem Namen & Beschreibung ersetzen",
    placeholder: true,
  },
];

export const trailer = {
  eyebrow: "Der Trailer",
  title: ["THE MAC FACTORY", "ON WHEELS."],
  text:
    "Unser Foodtruck ist ein Blickfang auf jedem Street Food Festival. Vor Ort bereiten wir frische Portionen Mac and Cheese zu — der Duft von Käse und Gewürzen liegt in der Luft, während ihr uns beim Kochen zuseht.",
  source: "dscatering.de",
};

export const events = {
  eyebrow: "Catering",
  title: ["MAC & CHEESE", "FÜR EURE VERANSTALTUNG."],
  text:
    "Von Street Food Festivals bis zu privaten und geschäftlichen Feiern: The Mac Factory passt sich euren Bedürfnissen an — inklusive Optionen für spezielle Diätanforderungen und individuelle Geschmacksprofile.",
  ctaNote:
    "Konkrete Veranstaltungsarten & Pakete werden hier ergänzt, sobald sie von DS Catering final bestätigt sind.",
  source: "dscatering.de + placeholder-Hinweis",
};

export const contact = {
  instagram: "https://instagram.com/_cateringservice_",
  whatsapp: "https://api.whatsapp.com/send?phone=1784719815",
  whatsappLabel: "WhatsApp",
  email: null, // auf dscatering.de nicht angegeben — später ergänzen
  phone: null, // auf dscatering.de nicht angegeben — später ergänzen
  address: null, // auf dscatering.de nicht angegeben — später ergänzen
  source: "dscatering.de",
};

export const images = {
  hero:
    "https://primary.jwwb.nl/public/x/u/x/temp-tuctqyjqqzmiogfjfqfb/1ftg27/b9c606ab-cf13-411f-995d-d7b7b2a6710djpg.jpg",
  gallery: [
    "https://primary.jwwb.nl/public/x/u/x/temp-tuctqyjqqzmiogfjfqfb/2tk718/img-8194.jpg",
    "https://primary.jwwb.nl/public/x/u/x/temp-tuctqyjqqzmiogfjfqfb/lgt4si/img-8534-2.jpg",
    "https://primary.jwwb.nl/public/x/u/x/temp-tuctqyjqqzmiogfjfqfb/cww7z2/img-8373jpg.jpg",
  ],
  source:
    "Original-Bild-URLs von dscatering.de (aktuell verlinkt, nicht lokal gehostet — vor Launch herunterladen, optimieren und selbst hosten).",
};

export const nav = [
  { label: "Story", href: "#story" },
  { label: "Mac & Cheese", href: "#showcase" },
  { label: "Der Trailer", href: "#trailer" },
  { label: "Events", href: "#events" },
  { label: "Kontakt", href: "#contact" },
];

export const footerLegal = {
  impressum: "#", // Platzhalter — Impressum-Seite existiert auf dscatering.de nicht separat verlinkt
  datenschutz: "#", // Platzhalter
  copyright: `© ${new Date().getFullYear()} DS Catering — The Mac Factory`,
};
