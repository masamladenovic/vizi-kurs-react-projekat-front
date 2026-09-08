import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { rooms } from "../data/rooms";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./css/RoomPhotoGallery.css";
import { useParams } from "react-router-dom";

const RoomPhotoGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const { roomSlug } = useParams();
  const room = rooms[roomSlug];

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`room-photo-gallery ${isVisible ? "is-visible" : ""}`}
    >
      {/* SECTION INTRO */}

      <div className="room-photo-gallery-header">
        <span className="room-photo-gallery-subtitle">
          A QUIET PLACE TO REST
        </span>

        <h2>{room.first_title}</h2>

        <p>
          Soft Provençal light, natural materials and views across the Luberon.
          Take a closer look at the spaces designed for slow mornings and
          unhurried evenings.
        </p>
      </div>

      {/* GALLERY */}

      <div className="room-photo-gallery-container">
        {/* MAIN IMAGE SLIDER */}

        <div className="room-photo-gallery-main">
          <Swiper
            style={{
              "--swiper-navigation-color": "#ffffff",
              "--swiper-pagination-color": "#ffffff",
            }}
            spaceBetween={12}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="room-gallery-main-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="room-gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} />

                  <div className="room-gallery-image-number">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* THUMBNAILS */}

        <div className="room-photo-gallery-thumbs">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Thumbs]}
            breakpoints={{
              600: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
            }}
            className="room-gallery-thumbs-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="room-gallery-thumb">
                  <img src={image.src} alt="" aria-hidden="true" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RoomPhotoGallery;
