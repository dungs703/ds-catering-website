import { useEffect } from "react";
import { ScrollTrigger } from "./lib/gsapSetup.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CheeseDivider from "./components/CheeseDivider.jsx";
import BrandStory from "./components/BrandStory.jsx";
import Differentiators from "./components/Differentiators.jsx";
import MacShowcase from "./components/MacShowcase.jsx";
import TrailerSection from "./components/TrailerSection.jsx";
import EventsSection from "./components/EventsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    // Nach dem ersten Layout-Pass alle ScrollTrigger-Positionen neu berechnen
    // (Fonts/Bilder verändern die Höhe von Sections nach dem Laden).
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <CheeseDivider />
        <BrandStory />
        <Differentiators />
        <CheeseDivider flip />
        <MacShowcase />
        <TrailerSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
