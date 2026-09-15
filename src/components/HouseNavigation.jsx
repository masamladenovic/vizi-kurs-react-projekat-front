import { useNavigate } from "react-router-dom";
import "./css/HouseNavigation.css";

const HouseNavigation = ({stone}) => {
  const navigate = useNavigate();

  const sections = [
    {
      number: "01",
      title: "THE HOUSE",
      description:
        "Stone, light and quiet spaces shaped around the rhythm of Provençal life.",
      image: "/images/house/the-house/exterior.jpg",
      alt: "Maison Éloi stone house surrounded by the Provençal landscape",
      path: "/the-house",
    },
    {
      number: "02",
      title: "THE GROUNDS",
      description:
        "Olive trees, gardens and open landscapes made for slow afternoons outdoors.",
      image: "/images/house/the-grounds/landscape.jpg",
      alt: "The grounds and Provençal landscape surrounding Maison Éloi",
      path: "/the-grounds",
    },
    {
      number: "03",
      title: "POOL & SPA",
      description:
        "A quiet place to swim, rest and let the day unfold at its own pace.",
      image: "/images/house/the-pool/pool-detail-2.jpg",
      alt: "Pool at Maison Éloi surrounded by Provençal landscape",
      path: "/pool",
    },
    {
      number: "04",
      title: "DINING",
      description:
        "Long lunches, local flavours and evenings gathered around the table.",
      image: "/images/house/dining/dining.jpg",
      alt: "Dining table at Maison Éloi",
      path: "/dining",
    },
  ];

  return (
    <section className={`house-navigation ${stone ? "house-navigation--stone" : ""}`}>
      <div className="house-navigation__header">
        <span className="house-navigation__eyebrow">EXPLORE THE HOUSE</span>

        <h2>More to discover</h2>
      </div>

      <div className="house-navigation__grid">
        {sections.map((section) => (
          <article
            key={section.number}
            className="house-navigation__card"
            onClick={() => navigate(section.path)}
          >
            <div className="house-navigation__image-wrapper">
              <img
                src={section.image}
                alt={section.alt}
                className="house-navigation__image"
              />

              <div className="house-navigation__overlay">
                <div className="house-navigation__content">
                  <span className="house-navigation__number">
                    {section.number}
                  </span>

                  <h3>{section.title}</h3>

                  <p>{section.description}</p>

                  <span className="house-navigation__link">
                    EXPLORE
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HouseNavigation;
