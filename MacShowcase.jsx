import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsapSetup.js";
import { variants, images } from "../data/content.js";
import "./MacShowcase.css";

export default function MacShowcase() {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const image = row.querySelector(".mac-row__image");
        const copy = row.querySelector(".mac-row__copy");
        const fromX = i % 2 === 0 ? -60 : 60;

        gsap.from(image, {
          opacity: 0,
          x: fromX,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        });
        gsap.from(copy, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        });

        if (!prefersReducedMotion) {
          gsap.to(image, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="mac-showcase" ref={sectionRef} id="showcase">
      <div className="container mac-showcase__head">
        <p className="eyebrow">Der Hauptdarsteller</p>
        <h2>Unsere Mac &amp; Cheese Variationen</h2>
        <p className="mac-showcase__note">
          <span className="placeholder-badge">Platzhalter</span> Die
          bestehende Website von DS Catering beschreibt „vielfältige,
          kreative und gewagte“ Mac-&amp;-Cheese-Variationen, nennt aber
          keine konkreten Sortennamen. Sobald ihr uns die echte Speisekarte
          gebt, ersetzen wir die drei Slots unten 1:1.
        </p>
      </div>

      {variants.map((variant, i) => (
        <div
          className="mac-row container"
          key={variant.id}
          ref={(el) => (rowRefs.current[i] = el)}
        >
          <div className="mac-row__image">
            <img
              src={images.gallery[i % images.gallery.length]}
              alt={`Mac & Cheese Vorbereitung — Bild von DS Catering (${variant.name}, Platzhalter-Zuordnung)`}
              loading="lazy"
            />
          </div>
          <div className="mac-row__copy">
            <span className="mac-row__num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{variant.name}</h3>
            <span className="placeholder-badge">{variant.note}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
