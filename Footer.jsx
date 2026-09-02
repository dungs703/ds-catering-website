import { brand, contact, nav, footerLegal } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">{brand.name}</p>
          <p className="site-footer__company">{brand.company}</p>
        </div>

        <nav aria-label="Footer-Navigation" className="site-footer__nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__social">
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="site-footer__legal">
          <a href={footerLegal.impressum}>
            Impressum <span className="placeholder-badge">später ergänzen</span>
          </a>
          <a href={footerLegal.datenschutz}>
            Datenschutz <span className="placeholder-badge">später ergänzen</span>
          </a>
        </div>
      </div>
      <p className="site-footer__copyright">{footerLegal.copyright}</p>
    </footer>
  );
}
