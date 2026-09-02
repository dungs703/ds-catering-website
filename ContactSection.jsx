import { useState } from "react";
import { contact } from "../data/content.js";
import "./ContactSection.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  guests: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Bitte gib deinen Namen an.";
  if (!values.email.trim()) {
    errors.email = "Bitte gib deine E-Mail-Adresse an.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Das sieht nicht nach einer gültigen E-Mail aus.";
  }
  if (!values.eventType.trim()) errors.eventType = "Bitte wähle eine Event-Art.";
  if (!values.message.trim()) errors.message = "Erzähl uns kurz von deiner Veranstaltung.";
  return errors;
}

export default function ContactSection() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Kein Backend angebunden — hier wird bewusst nur simuliert.
    // TODO: An echten Formular-Service (z.B. Formspree, eigenes API-Endpoint)
    // anbinden. Struktur (Feldnamen) bleibt dafür unverändert nutzbar.
    console.log("Kontaktanfrage (Demo, kein Versand):", values);
    setStatus("success");
    setValues(initialForm);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="eyebrow">Kontakt</p>
          <h2>Lasst uns euer Event verkäsen.</h2>
          <p className="contact__text">
            Schreibt uns, welche Veranstaltung ansteht — wir melden uns mit
            Verfügbarkeit und Details zurück.
          </p>

          <ul className="contact__channels">
            <li>
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                {contact.whatsappLabel}
              </a>
            </li>
            {!contact.email && (
              <li className="placeholder-badge">E-Mail-Adresse — später ergänzen</li>
            )}
            {!contact.phone && (
              <li className="placeholder-badge">Telefonnummer — später ergänzen</li>
            )}
            {!contact.address && (
              <li className="placeholder-badge">Standort / Adresse — später ergänzen</li>
            )}
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {status === "success" && (
            <p className="contact__success" role="status">
              Danke! Eure Nachricht ist bereit zum Versand, sobald ein
              Formular-Service angebunden ist.
            </p>
          )}

          <div className="contact__row">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && (
              <span id="err-name" className="contact__error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__row contact__row--split">
            <div>
              <label htmlFor="email">E-Mail *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "err-email" : undefined}
              />
              {errors.email && (
                <span id="err-email" className="contact__error">
                  {errors.email}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="phone">Telefonnummer</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__row contact__row--split">
            <div>
              <label htmlFor="eventType">Event-Typ *</label>
              <input
                id="eventType"
                name="eventType"
                placeholder="z. B. Firmenfeier, Festival, Hochzeit"
                value={values.eventType}
                onChange={handleChange}
                aria-invalid={Boolean(errors.eventType)}
                aria-describedby={errors.eventType ? "err-eventType" : undefined}
              />
              {errors.eventType && (
                <span id="err-eventType" className="contact__error">
                  {errors.eventType}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="date">Datum</label>
              <input
                id="date"
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__row">
            <label htmlFor="guests">Anzahl der Personen</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              value={values.guests}
              onChange={handleChange}
            />
          </div>

          <div className="contact__row">
            <label htmlFor="message">Nachricht *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && (
              <span id="err-message" className="contact__error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="contact__submit">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
