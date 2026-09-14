import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import ImageTextSection from "../components/ImageTextSection";
import "./css/Pool.css";

const Pool = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      imageUrl: "/images/house/the-pool/morning-pool.jpg",
      title: "POOL & SPA",
      alt: "Water, warmth and long afternoons.",
    },
    {
      imageUrl: "/images/house/the-pool/the-water.jpg",
      title: "THE WATER",
      alt: "A quiet place to cool off and linger.",
    },
    {
      imageUrl: "/images/house/the-pool/afternoon-by-the-pool.jpg",
      title: "AFTERNOON BY THE POOL",
      alt: "Afternoons are made for doing nothing.",
    },
    {
      imageUrl: "/images/house/the-pool/evening-pool.jpg",
      title: "EVENING",
      alt: "As the sun sets, the water turns golden.",
    },
  ];

  const poolData = [
    {
      imageSrc: "/images/house/the-pool/morning-pool.jpg",
      imageAlt: "Maison Éloi pool in the morning",
      title: "BEGIN BESIDE THE WATER",
      description:
        "The morning begins quietly at the pool. Before the heat of the day arrives, the water is still and the garden is soft with early light. Take a swim, sit beside the water with a coffee or simply enjoy the first peaceful moments of the day.",
    },

    {
      imageSrc: "/images/house/the-pool/woman-by-the-pool.jpg",
      imageAlt: "Woman relaxing beside the pool at Maison Éloi",
      title: "TIME TO DO NOTHING",
      description:
        "There is no schedule beside the pool. Read a few pages, listen to the garden or let the afternoon pass without deciding what comes next. At Maison Éloi, doing nothing is considered a perfectly good way to spend the day.",
    },

    {
      imageSrc: "/images/house/the-pool/woman-walking-by-the-pool.jpg",
      imageAlt: "Woman walking beside the pool",
      title: "A SLOW AFTERNOON",
      description:
        "The warmest hours are made for slowing down. A walk around the pool, a few minutes in the shade and a return to the water become small rituals that require no planning at all.",
    },

    {
      imageSrc: "/images/house/the-pool/pool-detail.jpg",
      imageAlt: "Detail of the pool at Maison Éloi",
      title: "THE SIMPLE PLEASURE OF WATER",
      description:
        "Water, stone and sunlight are enough. The pool is intentionally simple — a place to cool down, pause between moments and reconnect with the rhythm of the day.",
    },

    {
      imageSrc: "/images/house/the-pool/pool-detail-2.jpg",
      imageAlt: "Quiet pool detail at Maison Éloi",
      title: "STILLNESS",
      description:
        "Sometimes the most memorable moments are the quietest ones. The surface of the water catches the changing light while the rest of the garden seems to slow down around it.",
    },

    {
      imageSrc: "/images/house/the-pool/evening-pool.jpg",
      imageAlt: "Maison Éloi pool at sunset",
      title: "WHEN THE DAY TURNS GOLDEN",
      description:
        "Towards evening, the pool becomes part of the sunset. The water reflects the last light of the day and the garden settles into a softer, quieter atmosphere. Another slow day comes gently to an end.",
    },
  ];

  return (
    <>
      <Navbar hasHero />

      <main className="pool-page">
        <HeroSlider images={heroSlides} />

        <MarbleSection
          subtitle="THE ART OF SLOW LIVING"
          title="POOL & SPA"
          description={
            <>
              <b>Where water, light and stillness become part of the stay.</b>{" "}
              Begin the morning with a swim, retreat into the warmth of the spa,
              or spend the afternoon beneath the olive trees. At Maison Éloi,
              wellness is not a routine, but a slower way of experiencing
              Provence.
            </>
          }
          primaryButton={{
            label: "Discover the pool",
            onClick: () => navigate("/pool"),
          }}
          secondaryButton={{
            label: "Book your stay",
            onClick: () => navigate("/booking"),
          }}
        />

        <ImageTextSection data={poolData} />

        <section className="pool-final">
          <span>POOL & SPA</span>

          <h2>
            Stay in the water
            <br />a little longer.
          </h2>

          <button onClick={() => navigate("/booking")}>BOOK YOUR STAY →</button>
        </section>
      </main>
    </>
  );
};

export default Pool;
