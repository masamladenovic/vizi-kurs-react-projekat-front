import { useNavigate } from "react-router-dom";
import { rooms } from "../data/rooms";
import MarbleSection from "../components/MarbleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import "./css/AllRooms.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const AllRooms = () => {
  const navigate = useNavigate();

  const roomsList = Object.entries(rooms);

  const amenities = [
    "Premium linen",
    "Air conditioning",
    "High-speed Wi-Fi",
    "Hairdryer",
    "Bath amenities",
    "Daily housekeeping",
    "Natural materials",
    "Provençal views",
  ];

  const breakfastImages = [
    {
      src: "/images/house/dining/breakfast-detail.jpg",
      alt: "Breakfast table at Maison Éloi",
    },
    {
      src: "/images/house/dining/breakfast.jpg",
      alt: "Fresh Provençal breakfast at Maison Éloi",
    },
    {
      src: "/images/house/dining/person-having-breakfast.jpg",
      alt: "Pastries and coffee at Maison Éloi",
    },
    {
      src: "/images/house/dining/croissants.jpg",
      alt: "Pastries and coffee at Maison Éloi",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="all-rooms-page">
        {/* =====================================================
            01 — MARBLE INTRO
        ===================================================== */}

        <MarbleSection
          subtitle="THE ROOMS"
          title="Rooms made for slow mornings"
          description={
            <>
              <b>Four rooms, each with its own quiet character.</b> Natural
              materials, soft linen and the muted light of Provence create
              spaces designed for rest, intimacy and unhurried days. From the
              gardens to the olive grove, each room offers its own way of
              experiencing Maison Éloi.
            </>
          }
          primaryButton={{
            label: "Book your stay",
            onClick: () => navigate("/booking"),
          }}
          secondaryButton={{
            label: "Explore Maison Éloi",
            onClick: () => navigate("/the-house"),
          }}
        />

        {/* =====================================================
            02 — AMENITIES + ROOMS
        ===================================================== */}

        <section className="rooms-overview">
          <div className="rooms-overview__container">
            {/* AMENITIES */}

            <aside className="rooms-amenities">
              <div className="rooms-amenities__sticky">
                <span className="rooms-section-eyebrow">IN EVERY ROOM</span>

                <h2>
                  Simple comforts,
                  <br />
                  thoughtfully considered.
                </h2>

                <p className="rooms-amenities__intro">
                  Every room at Maison Éloi is designed around the same
                  philosophy: natural materials, understated comfort and
                  everything you need for a slower stay.
                </p>

                <div className="rooms-amenities__list">
                  {amenities.map((amenity, index) => (
                    <div className="rooms-amenity" key={amenity}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{amenity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* ROOM GRID */}

            <div className="rooms-grid">
              {roomsList.map(([slug, room], index) => (
                <article
                  className={`room-card ${
                    index % 2 !== 0 ? "room-card--lower" : ""
                  }`}
                  key={slug}
                  onClick={() => navigate(`/rooms/${slug}`)}
                >
                  <div className="room-card__image-wrapper">
                    <img
                      src={room.gallery[0].src}
                      alt={room.gallery[0].alt}
                      className="room-card__image"
                    />

                    <div className="room-card__overlay">
                      <div className="room-card__info">
                        <span className="room-card__eyebrow">
                          {room.first_title}
                        </span>

                        <h3>{room.title}</h3>

                        <p className="room-card__subtitle">{room.subtitle}</p>

                        <div className="room-card__meta">
                          {room.details.slice(0, 2).map(([label, value]) => (
                            <span key={label}>{value}</span>
                          ))}
                        </div>

                        <span className="room-card__explore">
                          EXPLORE ROOM
                          <span>→</span>
                        </span>
                      </div>
                    </div>

                    <span className="room-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            03 — BREAKFAST
        ===================================================== */}

        <section className="breakfast-section">
          <div className="breakfast-section__container">
            {/* TEXT */}

            <div className="breakfast-section__content">
              <span className="rooms-section-eyebrow">A SLOW MORNING</span>

              <h2>
                Breakfast at
                <br />
                Maison Éloi
              </h2>

              <p className="breakfast-section__lead">
                Begin the day slowly, with the flavors of Provence and nowhere
                else to be.
              </p>

              <p>
                Breakfast is served at an unhurried pace, with fresh bread,
                seasonal fruit, pastries, homemade preserves and coffee to
                linger over.
              </p>

              <p>
                Sit beneath the plane trees, open the windows to the morning
                air, or take your time at the table. At Maison Éloi, breakfast
                is less a routine and more part of the rhythm of the house.
              </p>

              <button
                type="button"
                className="breakfast-section__button"
                onClick={() => navigate("/dining")}
              >
                DISCOVER DINING
                <span>→</span>
              </button>
            </div>

            {/* IMAGE SLIDER */}

            <div className="breakfast-section__visual">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={1200}
                className="breakfast-slider"
              >
                {breakfastImages.map((image) => (
                  <SwiperSlide key={image.src}>
                    <div className="breakfast-slide">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="breakfast-slide__image"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="breakfast-section__caption">
                <span>BREAKFAST · MAISON ÉLOI</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllRooms;
