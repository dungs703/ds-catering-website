import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Weniger/kein Bewegungswunsch respektieren
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Grobe Geräteklasse, um Animationen auf Mobilgeräten zu entschärfen
export const isCoarsePointer =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

export { gsap, ScrollTrigger };
