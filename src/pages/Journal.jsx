import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import "./css/Journal.css";

const Journal = () => {
  const navigate = useNavigate();

  const stories = [
    {
      category: "MAISON ÉLOI",
      title: "THE ART OF A SLOW MORNING",
      description:
        "There is a certain hour when the house is still quiet, the coffee is warm and there is nowhere else to be.",
      image: "/images/journal/Stories/morning-at-maison-eloi.jpg",
      alt: "Slow morning at Maison Éloi",
      link: "/maison-eloi",
    },

    {
      category: "PROVENCE",
      title: "A DAY IN THE LUBERON",
      description:
        "Quiet villages, winding roads and the landscapes that make the Luberon so easy to fall in love with.",
      image: "/images/journal/Provence/a-walk-through-lavender.jpg",
      alt: "Landscape of the Luberon in Provence",
      link: "/provence",
    },

    {
      category: "FOOD & WINE",
      title: "A TABLE SET FOR SUMMER",
      description:
        "Fresh ingredients, long lunches and the simple pleasure of gathering around a Provençal table.",
      image: "/images/journal/Food&Wine/provencal-table.jpg",
      alt: "Summer table in Provence",
      link: "/food-and-wine",
    },

    {
      category: "PROVENCE",
      title: "THE VILLAGES WE RETURN TO",
      description:
        "From hilltop villages to quiet market mornings, a few of our favourite places beyond the house.",
      image: "/images/journal/Provence/village-cafe.jpg",
      alt: "Village in Provence",
      link: "/provence",
    },

    {
      category: "FOOD & WINE",
      title: "THE PROVENÇAL TABLE",
      description:
        "Olive oil, warm bread, seasonal vegetables and the ingredients that shape everyday life in the South of France.",
      image: "/images/journal/Food&Wine/provencal-lunch.jpg",
      alt: "Provençal food and table",
      link: "/food-and-wine",
    },

    {
      category: "MAISON ÉLOI",
      title: "THE STORY OF THE HOUSE",
      description:
        "A house shaped by time, natural materials and a belief in the beauty of things that do not need to be hurried.",
      image: "/images/journal/Maison-Eloi/exterior.jpg",
      alt: "Maison Éloi exterior",
      link: "/maison-eloi",
    },

    {
      category: "PROVENCE",
      title: "MARKET MORNINGS IN PROVENCE",
      description:
        "Fresh bread, seasonal fruit and the gentle rhythm of a Saturday morning at the local market.",
      image: "/images/journal/Provence/provencal-market.jpg",
      alt: "Provençal market in the morning",
      link: "/provence",
    },

    {
      category: "FOOD & WINE",
      title: "WINE AT GOLDEN HOUR",
      description:
        "As the afternoon light softens, the table is set and the evening begins slowly among the vineyards.",
      image: "/images/journal/Food&Wine/wine.jpg",
      alt: "Wine at golden hour in Provence",
      link: "/food-and-wine",
    },

    {
      category: "MAISON ÉLOI",
      title: "LIFE AT THE PACE OF THE HOUSE",
      description:
        "Open windows, afternoon shade and the small rituals that make a stay at Maison Éloi feel different.",
      image: "/images/journal/Stories/the-art-of-slowing-down.jpg",
      alt: "Slow living at Maison Éloi",
      link: "/maison-eloi",
    },
  ];

  return (
    <>
    <Navbar/>
       <main className="journal-page">
      {/* =========================
          INTRO
      ========================= */}

      <section className="journal-intro">
        <div className="journal-intro__container">
          <span className="journal-eyebrow">THE JOURNAL</span>

          <h1>
            Notes from a slower
            <br />
            side of Provence
          </h1>

          <p>
            Stories, places and small pleasures from Maison Éloi and the world
            around it.
          </p>
        </div>
      </section>

      {/* =========================
          STORIES
      ========================= */}

      <section className="journal-stories">
        <div className="journal-stories__container">
          <div className="journal-grid">
            {stories.map((story, index) => (
              <article
                className={`journal-card ${
                  index % 3 === 1 ? "journal-card--offset" : ""
                }`}
                key={`${story.title}-${index}`}
              >
                <div className="journal-card__image-wrapper">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="journal-card__image"
                  />
                </div>

                <div className="journal-card__content">
                  <span className="journal-card__category">
                    {story.category}
                  </span>

                  <h2>{story.title}</h2>

                  <p>{story.description}</p>

                  <button
                    className="journal-card__button"
                    onClick={() => navigate(story.link)}
                  >
                    <span>EXPLORE</span>
                    <span className="journal-card__arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
   
  );
};

export default Journal;
