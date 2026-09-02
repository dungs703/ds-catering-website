# The Mac Factory — Website (DS Catering)

Ein funktionierendes React + Vite + GSAP/ScrollTrigger-Projekt: eine
"Scroll-World"-Erlebniswebsite für **The Mac Factory**, die Food-Trailer-Marke
von **DS Catering**.

## Setup

```bash
npm install
npm run dev
```

Build für Produktion:

```bash
npm run build
npm run preview
```

## Woher kommen die Inhalte?

Alle Texte in `src/data/content.js` wurden aus der bestehenden Website
https://www.dscatering.de übernommen (Startseite, „Über Mac Factory“,
„Kontakt“). Das betrifft insbesondere:

- Markenname **The Mac Factory**, Zusatz „Käse-König Food Trailer“
- Den Einleitungstext von der Startseite
- Den vollständigen „Über uns“-Text inkl. der 5 Unterscheidungsmerkmale
- Kontaktkanäle: Instagram (`@_cateringservice_`) und WhatsApp-Link
- Die drei Bild-URLs, die auf der bestehenden Seite eingebunden sind

**Was NICHT von der echten Website stammt** (klar mit
`placeholder: true` bzw. `<span className="placeholder-badge">` markiert):

- Konkrete Namen einzelner Mac-&-Cheese-Sorten — die bestehende Seite
  beschreibt nur „vielfältige, kreative, gewagte Variationen“, nennt aber
  keine Sortennamen. Es gibt daher 3 offen benannte Platzhalter-Slots
  (`Variante 1/2/3`) statt erfundener Produktnamen.
- E-Mail-Adresse, Telefonnummer, Straßenadresse — auf dscatering.de nicht
  angegeben.
- Konkrete Event-Pakete/Preise.
- Impressum- und Datenschutz-Links (Zielseiten existieren aktuell nicht
  separat auf dscatering.de).

## Bilder

Die drei Bild-URLs in `src/data/content.js → images` zeigen aktuell direkt
auf die auf dscatering.de gehosteten Dateien (jwwb.nl-CDN). Das ist eine
Übergangslösung für die Demo. **Vor dem echten Launch:** Bilder
herunterladen, optimieren (WebP, passende Größen) und im eigenen Projekt
unter `/public` oder einem Asset-Host ablegen — dann nur die Pfade in
`content.js` austauschen, der Rest des Codes bleibt unverändert.

## Design-Konzept

- **Farben:** Cheddar-Gelb (`--cheddar`), tiefes Schwarzbraun
  (`--charcoal`), Creme (`--cream`), Krusten-Orange (`--crust`).
- **Typografie:** `Anton` für große, plakative Headlines,
  `Fraunces` (Serif) für wärmeren Fließtext/Storytelling,
  `Space Mono` für Labels, Eyebrows und Formulare (Menütafel-Charakter).
- **Signatur-Element:** der „Cheese Pull“ — ein SVG-Käsefaden
  (`CheeseDivider.jsx`), der sich beim Scrollen zwischen zwei Sections
  dehnt, statt eines harten Schnitts.
- **Struktur:** Hero (gepinnt) → Brand-Story (Scroll-Reveal) →
  horizontal scrollende „5 Gründe“-Section → Mac & Cheese-Showcase
  (abwechselnde Bild/Text-Reihen mit Parallax) → Food-Trailer-Section
  (Parallax-Hintergrund) → Events/Catering (Karten-Grid) → Kontakt
  (Formular) → Footer.

Alle Scroll-Animationen respektieren `prefers-reduced-motion` und werden
auf Touch-Geräten (`pointer: coarse`) reduziert bzw. durch natives
Scrollen ersetzt (siehe `src/lib/gsapSetup.js` und `Differentiators.jsx`).

## Kontaktformular

`ContactSection.jsx` validiert Name, E-Mail, Event-Typ und Nachricht im
Frontend. Es ist aktuell **nicht an ein Backend angebunden** — beim
Absenden wird die Anfrage nur in der Konsole geloggt und ein Erfolgs-Hinweis
angezeigt. Die Feldstruktur ist so gehalten, dass sie unverändert an einen
Formular-Service (z. B. Formspree, eigenes API-Endpoint) oder ein
CMS-Backend übergeben werden kann.

## Offene Fragen für die nächste Runde

Um aus dieser ersten Version die finale Website zu machen, brauchen wir
von euch:

1. Gewünschter Firmenname (falls „The Mac Factory“ ggf. mit anderem
   Zusatz geführt werden soll)
2. Logo (Vektor/SVG wenn möglich)
3. Verbindliche Markenfarben, falls ihr eigene habt
4. Echte, hochauflösende Fotos (Trailer, Produkt, Events)
5. Die tatsächlichen Mac-&-Cheese-Sorten mit Namen & Beschreibung
6. Preise / Pakete für Catering-Anfragen
7. Konkrete Event-Arten, die ihr aktiv bewerben wollt
8. Social-Media-Links (weitere Plattformen außer Instagram?)
9. E-Mail, Telefonnummer, Standort/Adresse
10. Gewünschte Änderungen an Ton, Struktur oder Umfang der Seite
