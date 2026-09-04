import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsapSetup.js";
import { events } from "../data/content.js";
import "./EventsSection.css";

const eventTypes = [
  { title: "Street Food Festivals", note: "dscatering.de" },
  { title: "Firmen- & Betriebsfeiern", note: "Platzhalter — bitte bestätigen" },
  { title: "Private Feiern", note: "Platzhalter — bitte bestätigen" },
  { title: "Wochen- & Krämermärkte", note: "dscatering.de (Kommentare)" },
];

export default function EventsSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-card", {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="events" ref={sectionRef} id="events">
      <div className="container">
        <p className="eyebrow">{events.eyebrow}</p>
        <h2 className="events__title">
          {events.title.map((l) => (
            <span key={l} className="events__title-line">
              {l}
            </span>
          ))}
        </h2>
        <p className="events__text">{events.text}</p>

        <div className="events__grid">
          {eventTypes.map((e) => (
            <article className="event-card" key={e.title}>
              <h3>{e.title}</h3>
              <span className="placeholder-badge">{e.note}</span>
            </article>
          ))}
        </div>

        <p className="events__disclaimer">{events.ctaNote}</p>
      </div>
    </section>
  );
}
