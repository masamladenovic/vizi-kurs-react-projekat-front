import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from "react";

const Navbar = ({ hasHero = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!hasHero);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Ako stranica nema hero,
    // navbar je uvek solidan.
    if (!hasHero) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasHero]);

  return (
    <>
      <header
        className={`main-menu ${
          scrolled
            ? "main-menu-scrolled"
            : "main-menu-transparent"
        }`}
      >
        <nav>
          <ul>
            <li>
              <button
                className="open-menu-button nav-link"
                onClick={() => setMenuOpen(true)}
              >
                <div className="icon-wrapper">
                  <CgMenuGridO className="nav-icon" />
                </div>

                <p>Menu</p>
              </button>
            </li>


            {/* =====================================
                BIG LOGO
                TRANSPARENT NAVBAR
            ===================================== */}

            <li className="big-logo">
              <img
                src="/images/branding/transparent-logo.png"
                alt="La Bastide Bourrelly"
              />
            </li>


            {/* =====================================
                SMALL LOGO
                SOLID NAVBAR
            ===================================== */}

            <li className="small-logo">
              <img
                src="/images/branding/logo-stone.jpg"
                alt="La Bastide Bourrelly"
              />
            </li>

            <div className="right-side">

              <li>
                <Link
                  to="/booking"
                  className="nav-link"
                >
                  <div className="icon-wrapper">
                    <IoCalendarOutline className="nav-icon" />
                  </div>

                  <p>Book</p>
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="nav-link"
                >
                  <div className="icon-wrapper">
                    <CgProfile className="nav-icon" />
                  </div>

                  <p>Login</p>
                </Link>
              </li>

            </div>

          </ul>
        </nav>
      </header>


      {/* =========================================
          SIDE MENU
      ========================================= */}

      <aside
        className={`side-menu ${
          menuOpen ? "side-menu-open" : ""
        }`}
      >

        <button
          className="close-side-menu"
          onClick={closeMenu}
        >
          <span className="close-icon-wrapper">
            <TfiClose className="close-icon" />
          </span>

          <span className="close-text">
            Close
          </span>
        </button>


        <nav className="side-menu-nav">

          <ul>

            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="side-link"
              >
                <span>01.</span> WELCOME
              </Link>
            </li>

            <li>
              <Link
                to="/the-house-page"
                onClick={closeMenu}
                className="side-link"
              >
                <span>02.</span> THE HOUSE
              </Link>
            </li>

            <li>
              <Link
                to="/rooms"
                onClick={closeMenu}
                className="side-link"
              >
                <span>03.</span> ROOMS
              </Link>
            </li>

            <li>
              <Link
                to="/rooms/la-suite-bastide"
                onClick={closeMenu}
                className="side-link"
              >
                <span>04.</span> ROOM DETAIL
              </Link>
            </li>

            <li>
              <Link
                to="/journal"
                onClick={closeMenu}
                className="side-link"
              >
                <span>05.</span> JOURNAL
              </Link>
            </li>

            <li>
              <Link
                to="/the-philosophy"
                onClick={closeMenu}
                className="side-link"
              >
                <span>06.</span> THE PHILOSOPHY
              </Link>
            </li>

            <li>
              <Link
                to="/photo-gallery"
                onClick={closeMenu}
                className="side-link"
              >
                <span>07.</span> PHOTO GALLERY
              </Link>
            </li>

            <li>
              <Link
                to="/booking"
                onClick={closeMenu}
                className="side-link"
              >
                <span>08.</span> BOOKING
              </Link>
            </li>

          </ul>


          {/* QUICK LINKS */}

          <div className="quick-links">

            <Link
              to="/contact"
              onClick={closeMenu}
              className="quick-link"
            >
              Contact
              <GoDotFill />
            </Link>

            <Link
              to="/login"
              onClick={closeMenu}
              className="quick-link"
            >
              Login
              <GoDotFill />
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="quick-link"
            >
              Register
            </Link>

          </div>

        </nav>
      </aside>


      {/* =========================================
          OVERLAY
      ========================================= */}

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
