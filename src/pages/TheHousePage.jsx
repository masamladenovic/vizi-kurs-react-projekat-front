import { useNavigate } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import ImageTextSection from "../components/ImageTextSection";
import "./css/TheHousePage.css";
import HouseNavigation from "../components/HouseNavigation";
import FAQ from "../components/FAQ";
import BookNow from "../components/BookNow";
import Breadcrumbs from "../components/navigation/Breadcrumbs";

const TheHousePage = () => {
  const navigate = useNavigate();

  const houseFaq = [
    {
      question: "What is included in a stay?",
      answer:
        "Your stay includes accommodation, access to the house and its outdoor spaces, and the amenities available throughout Maison Éloi.",
    },
    {
      question: "Can we enjoy the house privately?",
      answer:
        "Maison Éloi is designed to feel intimate and private, giving guests space to settle into the house and enjoy its surroundings at their own pace.",
    },
    {
      question: "Is the pool available throughout the stay?",
      answer:
        "The pool is available to guests during the appropriate season. Seasonal availability and opening details can be confirmed when booking.",
    },
    {
      question: "Can we arrange meals at the house?",
      answer:
        "Dining experiences can be arranged around seasonal Provençal ingredients, from relaxed breakfasts to longer lunches and intimate dinners.",
    },
    {
      question: "Is Maison Éloi suitable for longer stays?",
      answer:
        "Absolutely. The house is designed around a slower rhythm, making it especially well suited to guests who want to spend several days settling into Provence.",
    },
  ];

  const heroSlides = [
    {
      imageUrl: "/images/house/the-house/living-room.jpg",
      title: "THE HOUSE",
      alt: "A Provençal house made for slower days.",
    },
    {
      imageUrl: "/images/house/the-house/exterior.jpg",
      title: "A QUIET INTERIOR",
      alt: "Natural materials, soft light and timeless simplicity.",
    },
    {
      imageUrl: "/images/house/the-house/architecture-courtyyard.jpg",
      title: "AT THE HEART OF THE HOUSE",
      alt: "Spaces shaped around light, landscape and everyday life.",
    },
  ];

  const houseData = [
    {
      imageSrc: "/images/house/the-house/exterior.jpg",
      imageAlt: "Maison Éloi exterior surrounded by the Provençal landscape",
      title: "A HOUSE WITH A QUIET HISTORY",
      description:
        "Maison Éloi was imagined as a place where architecture, landscape and everyday life could exist quietly together. Warm stone, natural textures and the changing light of Provence give the house its character, while every room is designed around the simple pleasure of feeling at home.",
    },

    {
      imageSrc: "/images/house/the-house/entrance.jpg",
      imageAlt: "Entrance to Maison Éloi",
      title: "A QUIET ARRIVAL",
      description:
        "The house reveals itself slowly. An understated entrance, old stone and softened Mediterranean light create a feeling of calm from the moment you arrive. Nothing is overly formal or imposing. Maison Éloi is a place that invites you to leave the outside world behind.",
    },

    {
      imageSrc: "/images/house/the-house/living-room.jpg",
      imageAlt: "Living room at Maison Éloi",
      title: "ROOMS MADE FOR LIVING",
      description:
        "Inside, the atmosphere remains warm and uncomplicated. Linen, wood, stone and soft neutral tones create spaces that are comfortable without feeling overdesigned. The living room is made for slow mornings, afternoon reading and conversations that continue long after the coffee has gone cold.",
    },

    {
      imageSrc: "/images/house/the-house/kitchen.jpg",
      imageAlt: "Kitchen at Maison Éloi",
      title: "THE HEART OF THE HOUSE",
      description:
        "The kitchen brings together the everyday rituals that make a house feel lived in. Fresh ingredients, morning coffee and the preparation of long lunches all become part of the experience. Here, cooking is less about formality and more about sharing time together.",
    },

    {
      imageSrc: "/images/house/the-house/stone-staircase.jpg",
      imageAlt: "Stone staircase inside Maison Éloi",
      title: "STONE, LIGHT AND TIME",
      description:
        "The character of an old Provençal house lives in its details. Worn stone, softened edges and natural materials create a sense of permanence. Rather than hiding these imperfections, Maison Éloi allows them to remain visible — small reminders that the house has its own story.",
    },

    {
      imageSrc: "/images/house/the-house/architectural-detail.jpg",
      imageAlt: "Architectural detail at Maison Éloi",
      title: "DETAILS WORTH NOTICING",
      description:
        "A doorway, a textured wall or a beam of afternoon light can change the feeling of an entire room. At Maison Éloi, the smallest details are intentionally quiet. They are there to be noticed slowly rather than immediately understood.",
    },
  ];

  return (
    <>
      <Navbar hasHero />
      <Breadcrumbs/>

      <main className="the-house-page">
        <HeroSlider images={heroSlides} />

        <MarbleSection
          subtitle="THE HOUSE"
          title="A quieter way to experience Provence"
          description={
            <>
              <b>A house shaped by stone, light and the landscape around it.</b>{" "}
              Maison Éloi is designed for slow mornings, long afternoons and
              evenings that have nowhere else to be.
            </>
          }
          primaryButton={{
            label: "Explore the rooms",
            onClick: () => navigate("/rooms"),
          }}
          secondaryButton={{
            label: "Book your stay",
            onClick: () => navigate("/booking"),
          }}
        />

        <HouseNavigation />

        <ImageTextSection data={houseData} />

        <section className="house-final-section">
          <div className="house-final-section__content">
            <span>THE HOUSE</span>

            <h2>Stay a little longer.</h2>

            <p>
              There is no need to see everything. Maison Éloi is made for
              noticing the small things — the morning light, the warmth of the
              stone, the sound of the garden and the quiet at the end of the
              day.
            </p>

            <button onClick={() => navigate("/booking")}>
              BOOK YOUR STAY →
            </button>
          </div>
        </section>

        <FAQ items={houseFaq} />
      </main>
      <BookNow/>
    </>
  );
};

export default TheHousePage;
