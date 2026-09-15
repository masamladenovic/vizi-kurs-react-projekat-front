import { useNavigate } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import HeroSlider from "../components/HeroSlider";
import MarbleSection from "../components/MarbleSection";
import ImageTextSection from "../components/ImageTextSection";
import BookNow from "../components/BookNow";

import "./css/TheHouse.css";

const TheHouse = () => {
  const navigate = useNavigate();

  const heroSlides = [
    {
      imageUrl: "/images/house/the-house/exterior.jpg",
      title: "THE HOUSE",
      alt: "A Provençal house shaped by light, stone and time.",
    },
    {
      imageUrl: "/images/house/the-house/entrance.jpg",
      title: "A QUIET ARRIVAL",
      alt: "A place where the pace of the outside world begins to fade.",
    },
    {
      imageUrl: "/images/house/the-house/living-room.jpg",
      title: "LIVING SPACES",
      alt: "Rooms designed for conversation, reading and slow afternoons.",
    },
  ];

  const houseSections = [
    {
      imageSrc: "/images/house/the-house/exterior.jpg",
      imageAlt: "Maison Éloi stone house surrounded by the Provençal landscape",
      title: "A HOUSE ROOTED IN ITS LANDSCAPE",
      description:
        "Built from local stone and surrounded by the landscape of Provence, Maison Éloi feels less like a retreat created apart from its surroundings and more like a natural continuation of them. Olive trees, warm stone and changing light shape the experience throughout the day.",
    },

    {
      imageSrc: "/images/house/the-house/entrance.jpg",
      imageAlt: "Entrance to Maison Éloi",
      title: "AN ARRIVAL IN PROVENCE",
      description:
        "The entrance introduces the quiet character of the house. Natural materials, understated details and the warmth of the stone create a sense of arrival that is simple, intimate and deliberately unhurried.",
    },

    {
      imageSrc: "/images/house/the-house/living-room.jpg",
      imageAlt: "Living room inside Maison Éloi",
      title: "ROOMS MADE FOR SLOW DAYS",
      description:
        "The living spaces are designed around the rituals of staying: morning coffee by the window, a book in the afternoon and long conversations after dinner. Nothing is excessive, allowing the architecture and natural light to remain at the centre.",
    },

    {
      imageSrc: "/images/house/the-house/kitchen.jpg",
      imageAlt: "Kitchen at Maison Éloi",
      title: "THE HEART OF THE HOUSE",
      description:
        "The kitchen brings the house to life. It is a space for preparing simple Provençal meals, sharing local produce and gathering around the table. Here, cooking becomes part of the rhythm of the stay rather than a separate experience.",
    },

    {
      imageSrc: "/images/house/the-house/stone-staircase.jpg",
      imageAlt: "Stone staircase inside Maison Éloi",
      title: "STONE, LIGHT & TEXTURE",
      description:
        "Throughout Maison Éloi, natural materials create a quiet visual language. Stone, plaster, linen and wood are softened by changing daylight, giving every room its own character while keeping the house connected as a whole.",
    },

    {
      imageSrc: "/images/house/the-house/architectural-detail.jpg",
      imageAlt: "Architectural detail at Maison Éloi",
      title: "THE BEAUTY OF THE DETAILS",
      description:
        "Small architectural details reveal the character of the house: an old stone surface, a softened edge, a quiet corner catching the afternoon light. These are the moments that make Maison Éloi feel lived in rather than simply designed.",
    },

    {
      imageSrc: "/images/house/the-house/interior-detail.jpg",
      imageAlt: "Interior detail at Maison Éloi",
      title: "A QUIETER KIND OF LUXURY",
      description:
        "Luxury here is found in the atmosphere rather than abundance. Thoughtful materials, comfortable spaces and an absence of unnecessary distraction create a house that invites you to stay a little longer.",
    },

    {
      imageSrc: "/images/house/the-house/architecture-courtyyard.jpg",
      imageAlt: "Courtyard architecture at Maison Éloi",
      title: "INSIDE AND OUT",
      description:
        "The boundaries between the house and its surroundings remain deliberately soft. Courtyards, terraces and open windows allow Provence to become part of everyday life, changing the mood of the house as the day unfolds.",
    },
  ];

  return (
    <>
      <Navbar hasHero />

      <main className="the-house-page">
        {/* HERO */}
        <HeroSlider images={heroSlides} />

        {/* INTRO */}
        <MarbleSection
          subtitle="THE HOUSE"
          title="A house with a quieter rhythm"
          description={
            <>
              <b>
                Maison Éloi is a Provençal house shaped by natural materials,
                generous spaces and the changing light of the landscape.
              </b>{" "}
              From its stone architecture to its intimate interiors, every part
              of the house is designed around a slower way of living.
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

        {/* HOUSE STORY */}
        <ImageTextSection data={houseSections} />

        {/* FINAL CTA */}
        <section className="house-final-section">
          <div className="house-final-section__content">
            <span className="house-final-section__eyebrow">
              YOUR STAY AT MAISON ÉLOI
            </span>

            <h2>
              Come slowly.
              <br />
              Stay a little longer.
            </h2>

            <p>
              Discover the rooms, the gardens and the quieter pleasures of life
              at Maison Éloi.
            </p>

            <button
              className="house-final-section__button"
              onClick={() => navigate("/booking")}
            >
              Book your stay
            </button>
          </div>
        </section>
      </main>
      <BookNow/>
    </>
  );
};

export default TheHouse;
