import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Breadcrumbs.css";

const breadcrumbMap = {
  // =========================
  // THE HOUSE
  // =========================

  "/the-house-page": {
    hero: true,
    items: [{ label: "Home", path: "/" }, { label: "The House" }],
  },

  "/the-house-page/the-house": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "The House", path: "/the-house-page" },
      { label: "The House" },
    ],
  },

  "/the-house-page/grounds": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "The House", path: "/the-house-page" },
      { label: "The Grounds" },
    ],
  },

  "/the-house-page/pool": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "The House", path: "/the-house-page" },
      { label: "Pool & Spa" },
    ],
  },

  "/the-house-page/dining": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "The House", path: "/the-house-page" },
      { label: "Dining" },
    ],
  },

  "/the-house-page/philosophy": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "The House", path: "/the-house-page" },
      { label: "The Philosophy" },
    ],
  },

  // =========================
  // ROOMS
  // =========================

  "/rooms": {
    hero: true,
    items: [{ label: "Home", path: "/" }, { label: "Rooms" }],
  },

  // =========================
  // JOURNAL
  // =========================

  "/journal": {
    hero: false,
    items: [{ label: "Home", path: "/" }, { label: "Journal" }],
  },

  "/journal/stories": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "Journal", path: "/journal" },
      { label: "Stories" },
    ],
  },

  "/journal/provence": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "Journal", path: "/journal" },
      { label: "Provence" },
    ],
  },

  "/journal/food-and-wine": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "Journal", path: "/journal" },
      { label: "Food & Wine" },
    ],
  },

  "/journal/maison-eloi": {
    hero: true,
    items: [
      { label: "Home", path: "/" },
      { label: "Journal", path: "/journal" },
      { label: "Maison Éloi" },
    ],
  },

  // =========================
  // BOOKING
  // =========================

  "/booking": {
    hero: true,
    items: [{ label: "Home", path: "/" }, { label: "Booking" }],
  },

  // =========================
  // OTHER
  // =========================

  "/photo-gallery": {
    hero: false,
    items: [{ label: "Home", path: "/" }, { label: "Photo Gallery" }],
  },

  "/contact": {
    hero: true,
    items: [{ label: "Home", path: "/" }, { label: "Contact" }],
  },

  "/register": {
    hero: true,
    items: [{ label: "Home", path: "/" }, { label: "Register" }],
  },

  "/login": {
    hero: true,
    items: [{ label: "Home", path: "/" }, { label: "Login" }],
  },
};

const roomNames = {
  "la-suite-bastide": "La Suite Bastide",
  "chambre-oliviers": "Chambre Oliviers",
  "chambre-jardin": "Chambre Jardin",
  "chambre-luberon": "Chambre Luberon",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);

  let config = breadcrumbMap[pathname];

  // =========================
  // INDIVIDUAL ROOM
  // =========================

  if (pathname.startsWith("/rooms/")) {
    const roomSlug = pathname.split("/rooms/")[1];

    config = {
      hero: true,
      items: [
        { label: "Home", path: "/" },
        { label: "Rooms", path: "/rooms" },
        {
          label: roomNames[roomSlug] || "Room",
        },
      ],
    };
  }

  // =========================
  // SCROLL DETECTION
  // =========================

  useEffect(() => {
    if (!config) {
      return;
    }

    if (!config.hero) {
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
  }, [pathname, config?.hero]);

  // =========================
  // NO BREADCRUMB
  // =========================

  if (!config) {
    return null;
  }

  // =========================
  // RENDER
  // =========================

  return (
    <div
      className={`
        breadcrumbs
        ${config.hero ? "breadcrumbs--hero" : "breadcrumbs--page"}
        ${scrolled ? "breadcrumbs--scrolled" : ""}
      `}
    >
      <nav className="breadcrumbs__inner" aria-label="Breadcrumb">
        {config.items.map((item, index) => {
          const isLast = index === config.items.length - 1;

          return (
            <div className="breadcrumbs__item" key={`${item.label}-${index}`}>
              {isLast ? (
                <span className="breadcrumbs__current">{item.label}</span>
              ) : (
                <Link to={item.path} className="breadcrumbs__link">
                  {item.label}
                </Link>
              )}

              {!isLast && <span className="breadcrumbs__separator">/</span>}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
