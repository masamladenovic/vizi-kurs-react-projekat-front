import { useNavigate } from "react-router-dom";

import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import Navbar from "../components/navigation/Navbar";

import "./css/Home.css";
import ImageTextSection from "../components/ImageTextSection";
import FAQ from "../components/FAQ";

const Home = () => {
  const navigate = useNavigate();

  const homeFaq = [
    {
      question: "What is Maison Éloi?",
      answer:
        "Maison Éloi is a private Provençal retreat created for slower days, thoughtful spaces and an intimate connection with the landscape of southern France.",
    },
    {
      question: "Where is Maison Éloi located?",
      answer:
        "Maison Éloi is set in the Provençal countryside, surrounded by olive trees, gardens and the villages and landscapes of the Luberon.",
    },
    {
      question: "How many guests can stay at the house?",
      answer:
        "The house offers several individually designed rooms and is intended to create an intimate and comfortable stay for a small group of guests.",
    },
    {
      question: "Is breakfast available?",
      answer:
        "Breakfast can be enjoyed at the house with fresh pastries, seasonal produce, coffee and other local favourites prepared for a slow Provençal morning.",
    },
    {
      question: "Can we book the entire house?",
      answer:
        "Private stays can be arranged depending on availability. Contact us to discuss your preferred dates and the experience you have in mind.",
    },
    {
      question: "How do I book my stay?",
      answer:
        "Choose your preferred dates and room, then continue through our booking process. If you need help planning your stay, our team will be happy to assist.",
    },
  ];

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

  const homeSectionsData = [
    {
      title: "A HOUSE WITH A QUIET HISTORY",
      description:
        "An old Provençal stone house, thoughtfully restored with respect for its history and an appreciation for the simple beauty of modern Mediterranean living.",
      imageSrc: "../../images/house/the-house/exterior.jpg",
      imageAlt: "Maison Éloi stone house surrounded by the Provençal landscape",
      button: { label: "DISCOVER THE HOUSE", to: "/the-house" },
    },
    {
      title: "ROOMS MADE FOR SLOW MORNINGS",
      description:
        "LA SUITE BASTIDE · 54 m² · 2 GUESTS. A peaceful room opening onto the gardens, where natural textures, soft light and quiet views invite you to settle into the slower rhythm of Provence.",
      imageSrc: "../../images/house/the-house/living-room.jpg",
      imageAlt:
        "Elegant Provençal living room with natural stone and warm neutral interiors",
      button: { label: "EXPLORE OUR ROOMS", to: "/rooms" },
    },
    {
      title: "DAYS WITHOUT PLANS, TIME WITHOUT HURRY",
      description:
        "Swim before breakfast, read beneath an olive tree, or simply follow the afternoon sun. At Maison Éloi, there is nowhere you need to be and nothing you need to rush.",
      imageSrc: "../../images/house/the-pool/pool-detail-2.jpg",
      imageAlt:
        "Quiet swimming pool surrounded by stone and Mediterranean greenery",
      button: { label: "THE ART OF DOING LESS", to: "/art-of-doing-less" },
    },
    {
      title: "DINNER UNDER THE PLANE TREES",
      description:
        "Long lunches and unhurried dinners inspired by the generous flavours of Provence. Seasonal produce, local ingredients and simple dishes made to be shared beneath the trees.",
      imageSrc: "../../images/journal/Food&Wine/ratatouille.jpg",
      imageAlt:
        "Traditional Provençal ratatouille prepared with fresh seasonal vegetables",
      button: { label: "DISCOVER DINING", to: "/dining" },
    },
    {
      title: "NOTES FROM A SLOWER SIDE OF PROVENCE",
      description:
        "Stories, places and small rituals from around Maison Éloi. Discover the villages of the Luberon, the pleasures of a long lunch and the quiet moments that make a stay linger long after you leave.",
      imageSrc: "../../images/journal/Stories/afternoon-by-the-pool.jpg",
      imageAlt: "Quiet afternoon by the pool at Maison Éloi in Provence",
      button: { label: "READ THE JOURNAL", to: "/journal" },
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

        <ImageTextSection data={homeSectionsData} />

        <FAQ items={homeFaq} />
        
      </main>
    </>
  );
};

export default Home;
