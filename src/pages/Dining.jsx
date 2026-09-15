import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import ImageTextSection from "../components/ImageTextSection";
import BookNow from "../components/BookNow";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import "./css/Dining.css";

const Dining = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      imageUrl: "/images/house/dining/dinner-long-table.jpg",
      title: "DINING",
      alt: "At the table, time slows down.",
    },
    {
      imageUrl: "/images/journal/Food&Wine/wine.jpg ",
      title: "LONG TABLES",
      alt: "Good food, warm evenings and nowhere else to be.",
    },
    {
      imageUrl: "/images/house/dining/croissants.jpg",
      title: "SLOW MORNINGS",
      alt: "Begin the day with something delicious.",
    },
  ];

  const diningData = [
    {
      imageSrc: "/images/house/dining/breakfast.jpg",
      imageAlt: "Breakfast at Maison Éloi",
      title: "A SLOW MORNING",
      description:
        "Begin the day with fresh bread, seasonal fruit, pastries, homemade preserves and coffee. Breakfast is served at an unhurried pace, giving you time to wake slowly and enjoy the first hours of the day.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/ratatouille.jpg",
      imageAlt: "Breakfast details at Maison Éloi",
      title: "THE LITTLE DETAILS",
      description:
        "Good mornings are made from simple things. Fresh ingredients, warm pastries, a quiet table and the first light coming through the windows. Nothing elaborate is needed when the ingredients speak for themselves.",
    },

    {
      imageSrc: "/images/house/dining/croissants.jpg",
      imageAlt: "Fresh croissants at Maison Éloi",
      title: "SOMETHING FRESH FROM THE OVEN",
      description:
        "There is something special about the smell of fresh pastries in the morning. A warm croissant, good coffee and a little time to linger can turn an ordinary breakfast into one of the most memorable moments of a stay.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/tarte.jpg",
      imageAlt: "Provençal lunch detail",
      title: "LUNCH WITHOUT HURRY",
      description:
        "Lunch in Provence is an invitation to stay at the table. Seasonal ingredients, fresh herbs and simple preparations come together while conversation stretches comfortably into the afternoon.",
    },

    {
      imageSrc: "/images/house/dining/dining.jpg",
      imageAlt: "Dining area at Maison Éloi",
      title: "THE PROVENÇAL TABLE",
      description:
        "The table is where the house comes together. Natural textures, simple ceramics and seasonal ingredients create a setting that feels relaxed and generous. Dining is not simply a meal here — it is part of the rhythm of the day.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/provencal-lunch.jpg",
      imageAlt: "Long dinner table at Maison Éloi",
      title: "DINNER AS EVENING BEGINS",
      description:
        "As the light softens, dinner becomes part of the evening. Long tables, good food and the warm air of Provence create the kind of meal that seems to last longer than expected — and nobody is in a hurry to leave.",
    },

    {
      imageSrc: "/images/house/dining/person-having-breakfast.jpg",
      imageAlt: "Guest enjoying breakfast at Maison Éloi",
      title: "TAKE YOUR TIME",
      description:
        "Perhaps the best part of dining at Maison Éloi is having nowhere else to be. Stay for another coffee, finish the conversation and let the morning or evening unfold naturally around you.",
    },
  ];

  return (
    <>
      <Navbar hasHero />
      <Breadcrumbs/>

      <main className="dining-page">
        <HeroSlider images={heroSlides} />

        <MarbleSection
          subtitle="DINING"
          title="At the table, time slows down"
          description={
            <>
              <b>Provençal flavours, seasonal ingredients and long meals.</b> At
              Maison Éloi, food is part of the rhythm of the house — from the
              first coffee in the morning to dinners that continue into the
              evening.
            </>
          }
          primaryButton={{
            label: "Book your stay",
            onClick: () => navigate("/booking"),
          }}
          secondaryButton={{
            label: "Explore Provence",
            onClick: () => navigate("/journal/provence"),
          }}
        />

        <ImageTextSection data={diningData} />

        <section className="dining-final">
          <div className="dining-final__content">
            <span>DINING AT MAISON ÉLOI</span>

            <h2>
              Come to
              <br />
              the table.
            </h2>

            <p>
              Seasonal ingredients, warm evenings and the simple pleasure of
              sharing a meal slowly.
            </p>

            <button onClick={() => navigate("/booking")}>
              BOOK YOUR STAY →
            </button>
          </div>
        </section>
      </main>

      <BookNow/>
    </>
  );
};

export default Dining;
