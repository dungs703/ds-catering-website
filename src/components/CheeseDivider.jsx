import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsapSetup.js";
import "./CheeseDivider.css";

/**
 * Signatur-Element der Website: der "Cheese Pull".
 * Ein Käsefaden, der sich beim Scrollen zwischen zwei Sections dehnt
 * und dann reißt/einschnappt — als organischer Übergang statt eines
 * harten Section-Schnitts.
 */
export default function CheeseDivider({ flip = false }) {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);

  const restD =
    "M0,40 C 240,10 480,70 720,40 C 960,10 1200,70 1440,40 L1440,0 L0,0 Z";
  const stretchD =
    "M0,120 C 240,20 480,160 720,60 C 960,10 1200,150 1440,80 L1440,0 L0,0 Z";

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.to(pathRef.current, {
        attr: { d: stretchD },
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`cheese-divider${flip ? " cheese-divider--flip" : ""}`}
      ref={wrapRef}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path ref={pathRef} d={restD} fill="var(--cheddar)" />
      </svg>
    </div>
  );
}
