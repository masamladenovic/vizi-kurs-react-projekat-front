import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import ImageTextSection from "../components/ImageTextSection";
import "./css/TheGrounds.css";

const TheGrounds = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      imageUrl: "/images/house/the-grounds/landscape.jpg",
      title: "THE GROUNDS",
      alt: "The landscape is part of the stay.",
    },
    {
      imageUrl: "/images/house/the-grounds/yard.jpg",
      title: "THE GARDENS",
      alt: "Olive trees, stone paths and quiet corners.",
    },
    {
      imageUrl: "/images/house/the-grounds/provencal-road.jpg",
      title: "BEYOND THE HOUSE",
      alt: "Discover the countryside at your own pace.",
    },
  ];

  const groundsData = [
    {
      imageSrc: "/images/house/the-grounds/landscape.jpg",
      imageAlt: "Provençal landscape surrounding Maison Éloi",
      title: "THE LANDSCAPE AROUND US",
      description:
        "Maison Éloi sits within the landscape rather than apart from it. Olive trees, open fields, distant hills and the soft colours of Provence create a setting that changes throughout the day, from the pale light of morning to the warmth of sunset.",
    },

    {
      imageSrc: "/images/house/the-grounds/yard.jpg",
      imageAlt: "Garden and yard at Maison Éloi",
      title: "THE GARDENS",
      description:
        "The gardens are made for wandering without a destination. Follow the stone paths, find a quiet place beneath the trees or simply let the afternoon pass outside. There is always another corner to discover, but never any reason to hurry.",
    },

    {
      imageSrc: "/images/house/the-grounds/architecture-garden.jpg",
      imageAlt: "Maison Éloi architecture surrounded by gardens",
      title: "WHERE HOUSE MEETS LANDSCAPE",
      description:
        "The architecture and gardens are closely connected. Stone walls open towards the greenery, windows frame the changing landscape and outdoor spaces become natural extensions of the house. Inside and outside are never quite separate.",
    },

    {
      imageSrc: "/images/house/the-grounds/provencal-road.jpg",
      imageAlt: "Provençal road near Maison Éloi",
      title: "THE ROADS OF PROVENCE",
      description:
        "Some of the most memorable moments begin with no particular destination. Quiet roads wind between villages, vineyards and olive groves, revealing a different view around every corner. Take the long way whenever you can.",
    },

    {
      imageSrc: "/images/house/the-grounds/road.jpg",
      imageAlt: "Quiet country road in Provence",
      title: "TAKE THE SCENIC ROUTE",
      description:
        "A morning drive through Provence can be an experience in itself. Leave the main roads behind, stop when something catches your attention and allow the landscape to set the pace. The best discoveries are often the ones that were never planned.",
    },
  ];

  return (
    <>
      <Navbar hasHero />

      <main className="the-grounds-page">
        <HeroSlider images={heroSlides} />

        <MarbleSection
          subtitle="THE GROUNDS"
          title="The landscape is part of the stay"
          description={
            <>
              <b>
                Olive trees, gardens, stone paths and the changing light of
                Provence.
              </b>{" "}
              Around Maison Éloi, there is space to wander, pause and simply
              enjoy being outside.
            </>
          }
          primaryButton={{
            label: "Discover Provence",
            onClick: () => navigate("/provence"),
          }}
          secondaryButton={{
            label: "Explore the house",
            onClick: () => navigate("/the-house"),
          }}
        />

        <ImageTextSection data={groundsData} />

        <section className="grounds-quote">
          <p>“The best way to experience the landscape is to give it time.”</p>
          <span>MAISON ÉLOI</span>
        </section>
      </main>
    </>
  );
};

export default TheGrounds;
