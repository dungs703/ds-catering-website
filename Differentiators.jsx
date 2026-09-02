import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, isCoarsePointer } from "../lib/gsapSetup.js";
import { differentiators } from "../data/content.js";
import "./Differentiators.css";

export default function Differentiators() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    // Auf Touch-Geräten native horizontale Scrollbarkeit nutzen statt Pin,
    // das ist performanter und besser bedienbar.
    if (prefersReducedMotion || isCoarsePointer) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="diffs" ref={sectionRef}>
      <div className="diffs__track" ref={trackRef}>
        <div className="diffs__intro">
          <p className="eyebrow">Was uns auszeichnet</p>
          <h2>
            Fünf Gründe
            <br />
            für The Mac Factory
          </h2>
        </div>
        {differentiators.map((d, i) => (
          <article className="diffs__card" key={d.title}>
            <span className="diffs__index">{String(i + 1).padStart(2, "0")}</span>
            <p className="diffs__label">{d.label}</p>
            <h3>{d.title}</h3>
            <p className="diffs__text">{d.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
