import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import ImageTextSection from "../components/ImageTextSection";
import "./css/ThePhilosophy.css";

const ThePhilosophy = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      imageUrl: "/images/house/the-philosophy/woman-reading.jpg",
      title: "THE PHILOSOPHY",
      alt: "A slower way of staying.",
    },
    {
      imageUrl: "/images/house/the-philosophy/couple-on-the-terrace.jpg",
      title: "TAKE YOUR TIME",
      alt: "There is nowhere you need to be.",
    },
    {
      imageUrl: "/images/house/the-philosophy/spa-stillness.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/afternoon-by-the-pool.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/walk-through-provence.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/golden-hour-at-maison-eloi.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/morning-at-maison-eloi.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/morning-market.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/the-art-of-slowing-down.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
    {
      imageUrl: "/images/journal/Stories/the-village-nearby.jpg",
      title: "MAKE ROOM FOR NOTHING",
      alt: "Slow moments are part of the experience.",
    },
  ];

  const philosophyData = [
    {
      imageSrc: "/images/house/the-philosophy/woman-reading.jpg",
      imageAlt: "Woman reading at Maison Éloi",
      title: "TAKE YOUR TIME",
      description:
        "There is nowhere you need to be. Read a few pages, sit beneath the trees or let the morning pass without checking the time. Maison Éloi is designed around the idea that rest does not need to be earned.",
    },

    {
      imageSrc: "/images/house/the-philosophy/guest-oppening-the-window.jpg",
      imageAlt: "Guest opening a window at Maison Éloi",
      title: "LIVE WITH THE LIGHT",
      description:
        "Morning begins softly. Light moves across the walls, windows open towards the garden and the house changes throughout the day. We let the natural rhythm of Provence shape the spaces rather than trying to control it.",
    },

    {
      imageSrc: "/images/house/the-philosophy/couple-breakfast.jpg",
      imageAlt: "Couple enjoying breakfast at Maison Éloi",
      title: "STAY AT THE TABLE",
      description:
        "A meal can be more than a meal when there is time to enjoy it. Breakfast becomes a long morning, lunch becomes an afternoon and dinner becomes part of the evening. At Maison Éloi, there is always room for one more conversation.",
    },

    {
      imageSrc: "/images/house/the-philosophy/couple-on-the-terrace.jpg",
      imageAlt: "Couple relaxing on the terrace at Maison Éloi",
      title: "BE PRESENT",
      description:
        "Travel does not always have to mean seeing more. Sometimes it means noticing more — the warmth of the terrace, the sound of the garden, the changing light or the person sitting beside you.",
    },

    {
      imageSrc: "/images/house/the-philosophy/spa-stillness.jpg",
      imageAlt: "Quiet spa moment at Maison Éloi",
      title: "MAKE ROOM FOR NOTHING",
      description:
        "A quiet room, warm water and a few uninterrupted minutes can be enough. Wellness at Maison Éloi is not about routines or schedules. It is simply about creating space to pause.",
    },

    {
      imageSrc: "/images/house/the-philosophy/the-ritual.jpg",
      imageAlt: "A quiet ritual at Maison Éloi",
      title: "THE SMALL RITUALS",
      description:
        "Coffee in the morning. A swim before lunch. A walk before dinner. A glass of wine at sunset. The smallest rituals often become the memories we carry home.",
    },

    {
      imageSrc: "/images/house/the-philosophy/detail.jpg",
      imageAlt: "Quiet interior detail at Maison Éloi",
      title: "SIMPLICITY IS ENOUGH",
      description:
        "Natural materials, soft textures and spaces that leave room to breathe. Nothing at Maison Éloi is designed to compete for attention. The beauty is in what feels effortless.",
    },

    {
      imageSrc: "/images/house/the-philosophy/candle-detail.jpg",
      imageAlt: "Candle detail at Maison Éloi in the evening",
      title: "LET THE DAY END SLOWLY",
      description:
        "As evening arrives, the house becomes quieter. A candle is lit, the last light disappears from the garden and the pace of the day gently changes. There is nothing left to accomplish. Only time to enjoy the evening.",
    },
  ];

  return (
    <>
      <Navbar hasHero />

      <main className="the-philosophy-page">
        <HeroSlider images={heroSlides} />

        <MarbleSection
          subtitle="THE PHILOSOPHY"
          title="A slower way of staying"
          description={
            <>
              <b>
                Maison Éloi is not about doing more. It is about noticing more.
              </b>{" "}
              The light, the landscape, the food, the people and the quiet
              moments between them.
            </>
          }
          primaryButton={{
            label: "Discover the house",
            onClick: () => navigate("/the-house"),
          }}
          secondaryButton={{
            label: "Book your stay",
            onClick: () => navigate("/booking"),
          }}
        />

        <ImageTextSection data={philosophyData} />

        <section className="philosophy-final">
          <span>MAISON ÉLOI</span>

          <h2>
            Stay a little
            <br />
            longer.
          </h2>

          <p>
            Let Provence set the pace. Leave room for slow mornings, long
            lunches and evenings with nowhere else to be.
          </p>

          <button onClick={() => navigate("/booking")}>BOOK YOUR STAY →</button>
        </section>
      </main>
    </>
  );
};

export default ThePhilosophy;
