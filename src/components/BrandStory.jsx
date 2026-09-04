import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsapSetup.js";
import { story } from "../data/content.js";
import "./BrandStory.css";

export default function BrandStory() {
  const sectionRef = useRef(null);
  const paraRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".brand-story__title-line", {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      paraRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 45%",
              scrub: prefersReducedMotion ? false : true,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="brand-story" ref={sectionRef} id="story">
      <div className="container">
        <p className="eyebrow">{story.eyebrow}</p>
        <h2 className="brand-story__title">
          {story.title.map((line) => (
            <span className="brand-story__title-line" key={line}>
              {line}
            </span>
          ))}
        </h2>
        <div className="brand-story__body">
          {story.paragraphs.map((p, i) => (
            <p
              key={p.slice(0, 12)}
              ref={(el) => (paraRefs.current[i] = el)}
              className="brand-story__para"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
