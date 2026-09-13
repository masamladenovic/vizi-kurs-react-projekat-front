import React, { useEffect, useState } from "react";
import "./css/PhotoGallery.css";
import Navbar from "../components/navigation/Navbar";

const galleryData = {
  "Living spaces": [
    "/images/house/the-house/architectural-detail.jpg",
    "/images/house/the-house/architecture-courtyyard.jpg",
    "/images/house/the-house/entrance.jpg",
    "/images/house/the-house/exterior.jpg",
    "/images/house/the-house/interior-detail.jpg",
    "/images/house/the-house/kitchen.jpg",
    "/images/house/the-house/living-room.jpg",
    "/images/house/the-house/stone-staircase.jpg",
    "/images/home/architecture-entrance.jpg",
    "/images/home/hero.jpg",
    "/images/home/woman-walking-towards-the-house.jpg",
    "/images/home/couple-on-the-terrace.jpg"
  ],

  "Restaurant & bar": [
    "/images/house/dining/breakfast-detail.jpg",
    "/images/house/dining/breakfast.jpg",
    "/images/house/dining/croissants.jpg",
    "/images/house/dining/dining.jpg",
    "/images/house/dining/dinner-long-table.jpg",
    "/images/house/dining/lunch-detail.jpg",
    "/images/house/dining/person-having-breakfast.jpg",
    "/images/journal/Food&Wine/provencal-lunch.jpg",
    "/images/journal/Food&Wine/ratatouille.jpg",
    "/images/journal/Food&Wine/wine.jpg",
    "/images/journal/Food&Wine/tarte.jpg",
    "/images/journal/Food&Wine/chef-plating-dinner.jpg"
  ],

  "Rooms & Suites": [
    "/images/rooms/all-rooms/bathroom.jpg",
    "/images/rooms/all-rooms/bedroom.jpg",
    "/images/rooms/all-rooms/second-bedroom.jpg",
    "/images/rooms/chambre-oliviers/oliviers-bathroom.jpg",
    "/images/rooms/all-rooms/suite-with-terrace-02.jpg",
    "/images/rooms/all-rooms/village.jpg",
    "/images/rooms/all-rooms/suite-with-terrace.jpg",
    "/images/rooms/chambre-jardin/jardin-afternoon-in-the-garden.jpg",
    "/images/rooms/chambre-jardin/jardin-bathroom.jpg",
    "/images/rooms/chambre-jardin/jardin-garden-connection.jpg",
    "/images/rooms/chambre-luberon/luberon-atmosphere.jpg",
    "/images/rooms/chambre-luberon/luberon-morning-detail.jpg",
    "/images/rooms/chambre-luberon/luberon-view.jpg",
    "/images/rooms/chambre-oliviers/oliviers-evening-atmosphere.jpg",
    "/images/rooms/chambre-oliviers/oliviers-texture-detail.jpg",
    "/images/rooms/la-suite-bastide/bastide-sitting-area.jpg",
    "/images/rooms/la-suite-bastide/bastide-sunset.jpg"
  ],

  "Wellness Area": [
    "/images/rooms/all-rooms/spa.jpg",
    "/images/rooms/all-rooms/wellness-spa.jpg",
    "/images/house/the-pool/afternoon-by-the-pool.jpg",
    "/images/house/the-philosophy/spa-stillness.jpg",
    "/images/house/the-pool/morning-pool.jpg",
    "/images/house/the-philosophy/the-ritual.jpg",
    "/images/house/the-pool/evening-pool.jpg",
    "/images/house/the-pool/pool-detail.jpg",
    "/images/house/the-pool/pool-detail-2.jpg",
    "/images/house/the-pool/woman-by-the-pool.jpg",
    "/images/house/the-pool/woman-walking-by-the-pool.jpg",
    "/images/house/the-pool/the-water.jpg"
  ],
};

const categories = Object.keys(galleryData);

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 5L9 12L15 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 5L15 12L9 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 5L19 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = galleryData[activeCategory];

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  // ESC + keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Sprečava scroll stranice dok je lightbox otvoren
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length]);

  return (
    <>  
    <Navbar/>
     <section className="photo-gallery">
      {/* --------------------------------
          HEADER / CATEGORIES
      --------------------------------- */}
      <div className="photo-gallery__categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`photo-gallery__category ${
              activeCategory === category
                ? "photo-gallery__category--active"
                : ""
            }`}
            onClick={() => {
              setActiveCategory(category);
              setSelectedIndex(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --------------------------------
          GALLERY
      --------------------------------- */}
      <div className="photo-gallery__grid">
        {images.map((image, index) => (
          <button
            key={`${activeCategory}-${image}-${index}`}
            type="button"
            className={`photo-gallery__item photo-gallery__item--${index + 1}`}
            onClick={() => openLightbox(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <img
              src={image}
              alt={`${activeCategory} ${index + 1}`}
              loading="lazy"
            />

            <span className="photo-gallery__overlay">
              <span className="photo-gallery__zoom">
                <SearchIcon />
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* --------------------------------
          LIGHTBOX
      --------------------------------- */}
      {selectedIndex !== null && (
        <div
          className="photo-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* CLOSE */}
          <button
            type="button"
            className="photo-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <CloseIcon />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            className="photo-lightbox__arrow photo-lightbox__arrow--left"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            <ArrowLeft />
          </button>

          {/* IMAGE */}
          <div
            className="photo-lightbox__image-wrapper"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="photo-lightbox__image"
              src={images[selectedIndex]}
              alt={`${activeCategory} ${selectedIndex + 1}`}
            />
          </div>

          {/* NEXT */}
          <button
            type="button"
            className="photo-lightbox__arrow photo-lightbox__arrow--right"
            onClick={showNext}
            aria-label="Next image"
          >
            <ArrowRight />
          </button>

          {/* COUNTER */}
          <div className="photo-lightbox__counter">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
    
    </>
   
  );
}
