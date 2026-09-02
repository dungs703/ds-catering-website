import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsapSetup.js";
import { brand, nav } from "../data/content.js";
import "./Header.css";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    const trigger = ScrollTrigger.create({
      start: 60,
      onUpdate: (self) => {
        el.classList.toggle("is-scrolled", self.scroll() > 60);
      },
    });
    return () => trigger.kill();
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="skip-link" href="#main-content">
        Zum Hauptinhalt springen
      </a>
      <div className="site-header__inner container">
        <a href="#top" className="site-header__brand">
          <span className="site-header__brand-main">{brand.name}</span>
          <span className="site-header__brand-sub">{brand.company}</span>
        </a>
        <nav className="site-header__nav" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
