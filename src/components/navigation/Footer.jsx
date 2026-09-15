import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* TOP */}
        <div className="site-footer__top">
          {/* BRAND */}
          <div className="site-footer__brand">
            <div className="site-footer__mark">
              <img src="/images/branding/transparent-logo.png" alt="Maison Eloi logo" />
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="site-footer__column">
            <span className="site-footer__label">EXPLORE</span>

            <Link to="/the-house-page/the-house">The House</Link>
            <Link to="/the-house-page/the-grounds">The Grounds</Link>
            <Link to="/the-house-page/pool">The Pool</Link>
            <Link to="/the-house-page/dining">Dining</Link>
            <Link to="/the-house-page/the-philosophy">Our Philosophy</Link>
          </div>

          <div className="site-footer__column">
            <span className="site-footer__label">STAY</span>

            <Link to="/rooms">Rooms</Link>
            <Link to="/booking">Book your stay</Link>
            <Link to="/journal/maison-eloi">Maison Éloi</Link>
            <Link to="/journal/provence">Provence</Link>
          </div>

          {/* CONTACT */}
          <div className="site-footer__column site-footer__contact">
            <span className="site-footer__label">CONTACT</span>

            <p>
              Maison Éloi
              <br />
              Provence, France
            </p>

            <a href="mailto:hello@maisoneoloi.com">hello@maisoneoloi.com</a>

            <a href="tel:+33000000000">+33 0 00 00 00 00</a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="site-footer__newsletter">
          <div>
            <span className="site-footer__label">THE JOURNAL</span>

            <h3>
              Notes from Provence,
              <br />
              occasionally.
            </h3>
          </div>

          <div className="site-footer__newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />

            <button type="button">
              Subscribe
              <span>→</span>
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Maison Éloi</span>

          <div className="site-footer__legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>

          <div className="site-footer__social">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
