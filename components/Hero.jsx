import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsapSetup.js";
import { brand, images } from "../data/content.js";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);
  const imageRef = useRef(null);
  const kickerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
        },
      });

      if (!prefersReducedMotion) {
        tl.from(kickerRef.current, { opacity: 0, y: 20, duration: 0.3 })
          .to(
            lineRefs.current,
            {
              x: (i) => (i % 2 === 0 ? "-6vw" : "6vw"),
              stagger: 0.05,
              ease: "none",
            },
            0.1
          )
          .to(
            imageRef.current,
            { scale: 1.15, rotate: 3, ease: "none" },
            0
          )
          .to(sectionRef.current, { opacity: 0.4, ease: "none" }, 0.75);
      }

      gsap.from(".hero__intro", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef} id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow hero__kicker" ref={kickerRef}>
          {brand.heroKicker}
        </p>
        <h1 className="hero__headline">
          {brand.heroHeadline.map((line, i) => (
            <span
              className="hero__line"
              key={line}
              ref={(el) => (lineRefs.current[i] = el)}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__intro">{brand.heroIntro}</p>
        <p className="hero__epithet">{brand.epithet}</p>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <img ref={imageRef} src={images.hero} alt="" loading="eager" />
      </div>
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <span className="hero__scroll-drip" />
      </div>
    </section>
  );
}
