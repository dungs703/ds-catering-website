import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsapSetup.js";
import { trailer, images } from "../data/content.js";
import "./TrailerSection.css";

export default function TrailerSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.from(".trailer__title-line", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.9,
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="trailer" ref={sectionRef} id="trailer">
      <div className="trailer__bg" ref={bgRef}>
        <img src={images.gallery[1]} alt="" aria-hidden="true" />
      </div>
      <div className="trailer__scrim" aria-hidden="true" />
      <div className="container trailer__inner">
        <p className="eyebrow">{trailer.eyebrow}</p>
        <h2 className="trailer__title">
          {trailer.title.map((l) => (
            <span className="trailer__title-line" key={l}>
              {l}
            </span>
          ))}
        </h2>
        <p className="trailer__text">{trailer.text}</p>
      </div>
    </section>
  );
}
