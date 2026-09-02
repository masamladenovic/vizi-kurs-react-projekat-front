import { useNavigate } from "react-router-dom";

import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import Navbar from "../components/navigation/Navbar";

import "./css/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const homeHeroImages = [
    {
      imageUrl: "/images/home/hero.jpg",
      alt: "Hero",
    },
    {
      imageUrl: "/images/home/architectural-detail.jpg",
      alt: "Architectural detail",
    },
    {
      imageUrl: "/images/home/architecture-entrance.jpg",
      alt: "Architecture entrance",
    },
    {
      imageUrl: "/images/house/the-pool/pool-detail.jpg",
      alt: "Pool detail",
    },
    {
      imageUrl: "/images/home/couple-on-the-terrace.jpg",
      alt: "Couple on the terrace",
    },
    {
      imageUrl: "/images/home/evening.jpg",
      alt: "Evening",
    },
    {
      imageUrl: "/images/home/woman-walking-towards-the-house.jpg",
      alt: "Woman walking towards the house",
    },
  ];

  return (
    <>
      <Navbar hasHero />

      <main>
        <HeroSlider images={homeHeroImages} />

        <MarbleSection
          subtitle="The charm of a Provençal village property"
          title="MAISON ÉLOI"
          description={
            <>
              <b>A house shaped by light, stone and silence.</b> Hidden among
              the olive groves of the Luberon, Maison Éloi is a private retreat
              for long lunches, slow mornings and evenings beneath the plane
              trees. Nestled among olive groves and ancient stone walls, Maison
              Éloi sits quietly above the Luberon valley, just outside the
              village of Ménerbes.
            </>
          }
          primaryButton={{
            label: "Discover the house",
            onClick: () => navigate("/the-house-page"),
          }}
          secondaryButton={{
            label: "Book your stay",
            onClick: () => navigate("/booking"),
          }}
        />

        {/* Ostale Home sekcije */}
      </main>
    </>
  );
};

export default Home;
