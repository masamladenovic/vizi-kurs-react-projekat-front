import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import BookNow from "../components/BookNow";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import "./css/Contact.css";

const contactHeroImages = [
  {
    imageUrl: "/images/home/hero.jpg",
    alt: "Maison Éloi surrounded by the Provençal landscape",
  },
  {
    imageUrl: "/images/home/architectural-detail.jpg",
    alt: "Architectural detail at Maison Éloi",
  },
  {
    imageUrl: "/images/home/evening.jpg",
    alt: "Maison Éloi at evening",
  },
  {
    imageUrl: "/images/home/couple-on-the-terrace.jpg",
    alt: "Couple enjoying the terrace at Maison Éloi",
  },
  {
    imageUrl: "/images/home/woman-walking-towards-the-house.jpg",
    alt: "Woman walking towards Maison Éloi",
  },
];

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log("Contact form:", Object.fromEntries(formData.entries()));

    event.target.reset();
  };

  return (
    <>
      <Navbar hasHero />
      <Breadcrumbs/>

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">
        <HeroSlider images={contactHeroImages} />

        <div className="contact-hero-overlay">
          <span className="contact-hero-eyebrow">CONTACT</span>

          <h1>Come a little closer.</h1>

          <p>
            Whether you are planning a stay, have a question, or simply want to
            know more about Maison Éloi, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* =========================
          INTRO / MARBLE
      ========================= */}

      <MarbleSection
        subtitle="A quiet place, worth finding"
        title="MAISON ÉLOI"
        description={
          <>
            <b>Some places are better discovered slowly.</b> Maison Éloi sits
            quietly above the Luberon valley, surrounded by olive groves,
            ancient stone and the changing light of Provence. Get in touch with
            us to enquire about your stay, ask a question, or simply begin
            planning your time here.
          </>
        }
        primaryButton={{
          label: "Explore the house",
          onClick: () => navigate("/the-house-page"),
        }}
        secondaryButton={{
          label: "Book your stay",
          onClick: () => navigate("/booking"),
        }}
      />

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
            <span className="contact-eyebrow">01 / GET IN TOUCH</span>

            <h2>
              Let us know
              <br />
              how we can help.
            </h2>

            <p>
              For reservations, questions about the house, or anything you would
              like to know before your arrival, send us a message.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-number">01</span>

                <div>
                  <span className="contact-detail-label">ADDRESS</span>
                  <p>
                    Chemin des Oliviers
                    <br />
                    84220 Ménerbes
                    <br />
                    Provence, France
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-number">02</span>

                <div>
                  <span className="contact-detail-label">EMAIL</span>

                  <a href="mailto:hello@maisoneloi.com">hello@maisoneloi.com</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-number">03</span>

                <div>
                  <span className="contact-detail-label">PHONE</span>

                  <a href="tel:+33400000000">+33 4 00 00 00 00</a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              FORM
          ========================= */}

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>YOUR MESSAGE</span>

              <p>We usually reply within one working day.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Optional"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>

                  <select id="subject" name="subject">
                    <option value="general">General enquiry</option>
                    <option value="booking">Booking enquiry</option>
                    <option value="house">The house</option>
                    <option value="experience">Experiences</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>

              <div className="contact-field contact-message-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us a little about your plans..."
                  required
                ></textarea>
              </div>

              <div className="contact-form-bottom">
                <p>
                  By sending this message, you agree to be contacted regarding
                  your enquiry.
                </p>

                <button type="submit" className="contact-submit">
                  SEND MESSAGE
                  <span>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          LOCATION
      ========================= */}

      <section className="contact-location">
        <div className="contact-location-header">
          <div>
            <span className="contact-eyebrow">02 / FIND US</span>

            <h2>
              Somewhere
              <br />
              between stone & sky.
            </h2>
          </div>

          <p>
            Maison Éloi is located just outside Ménerbes, one of the Luberon's
            most beautiful hilltop villages, surrounded by vineyards, olive
            groves and quiet country roads.
          </p>
        </div>

        <div className="contact-map-wrapper">
          <iframe
            title="Maison Éloi location in Ménerbes, Provence"
            src="https://www.google.com/maps?q=M%C3%A9nerbes%2C%20France&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contact-map-card">
            <span>MAISON ÉLOI</span>

            <strong>Chemin des Oliviers</strong>

            <p>
              84220 Ménerbes
              <br />
              Provence, France
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Chemin+des+Oliviers,+84220+M%C3%A9nerbes,+France"
              target="_blank"
              rel="noreferrer"
            >
              OPEN IN MAPS ↗
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="contact-final">
        <div className="contact-final-inner">
          <span className="contact-eyebrow">UNTIL THEN</span>

          <h2>Take your time.</h2>

          <p>Explore Maison Éloi and discover what awaits in the Luberon.</p>

          <button
            className="contact-final-button"
            onClick={() => navigate("/rooms")}
          >
            DISCOVER THE ROOMS
          </button>
        </div>
      </section>

      <BookNow/>
    </>
  );
};

export default Contact;
