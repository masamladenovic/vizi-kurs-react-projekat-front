import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/RoomsSection.css";

const RoomsSection = ({ data = [] }) => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cards = cardsRef.current;

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="rooms-section">
      {/* =========================================
          SECTION INTRO
      ========================================= */}

      <div className="rooms-section-header">
        <span className="rooms-section-subtitle">ROOMS & SUITES</span>

        <h2>Rooms made for slow mornings</h2>

        <p>Four rooms, each with its own quiet character.</p>
      </div>

      {/* =========================================
          ROOMS GRID
      ========================================= */}

      <div className="rooms-grid">
        {data.map((room, index) => (
          <article
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="room-card"
          >
            {/* IMAGE */}

            <div className="room-card-image">
              <img src={room.imageSrc} alt={room.imageAlt} />

              <div className="room-card-overlay"></div>

              {/* CONTENT OVER IMAGE */}

              <div className="room-card-content">
                <div className="room-card-top">
                  <span className="room-card-number">0{index + 1}</span>

                  <span className="room-card-category">ROOM</span>
                </div>

                <div className="room-card-bottom">
                  <h3>{room.title}</h3>

                  <span className="room-card-size">{room.size}</span>

                  <p>{room.features}</p>

                  <button
                    className="room-card-link"
                    onClick={() => {
                      if (room.button?.to) {
                        navigate(room.button.to);
                      } else if (room.button?.onClick) {
                        room.button.onClick();
                      }
                    }}
                  >
                    {room.button?.label || "EXPLORE"}
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
