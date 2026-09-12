import Navbar from "../components/navigation/Navbar";
import JournalCategoryPage from "../components/JournalCategoryPage";
import HeroSlider from "../components/HeroSlider";

const Stories = () => {
  const stories = [
    {
      imageSrc: "/images/journal/Stories/morning-at-maison-eloi.jpg",
      imageAlt: "Morning light at Maison Éloi",
      title: "Mornings at Maison Éloi",
      description:
        "The house wakes slowly. Morning light moves across the stone walls, shutters open onto the garden and the first coffee of the day is poured without hurry. There is something comforting about having nowhere to be, allowing the morning to unfold naturally before the rest of the house comes to life.",
    },

    {
      imageSrc: "/images/journal/Stories/the-art-of-slowing-down.jpg",
      imageAlt: "A quiet moment at Maison Éloi",
      title: "The Art of Slowing Down",
      description:
        "Not every moment needs a plan. At Maison Éloi, time is measured differently — by the length of an afternoon beneath the trees, a book left open beside the pool or a conversation that continues long after the sun has moved across the terrace. Sometimes the best part of a stay is simply doing less.",
    },

    {
      imageSrc: "/images/journal/Stories/afternoon-by-the-pool.jpg",
      imageAlt: "Afternoon by the pool at Maison Éloi",
      title: "Afternoons by the Pool",
      description:
        "The warmest hours of the day are made for the water. A slow swim, a shaded lounger and the sound of the garden moving gently in the breeze become their own kind of ritual. There is no schedule to follow and no reason to leave the pool until the afternoon light begins to soften.",
    },

    {
      imageSrc: "/images/journal/Stories/golden-hour-at-maison-eloi.jpg",
      imageAlt: "Golden hour at Maison Éloi",
      title: "When the House Turns Golden",
      description:
        "Towards evening, Provence changes colour. The stone becomes warmer, the shadows grow longer and the garden seems to become quieter with every passing minute. Golden hour is one of the moments we return to again and again — a brief pause between the heat of the day and the beginning of the evening.",
    },

    {
      imageSrc: "/images/journal/Stories/morning-market.jpg",
      imageAlt: "Morning market in Provence",
      title: "A Morning at the Market",
      description:
        "A Provençal morning often begins at the market. Baskets fill with seasonal fruit, vegetables, flowers and warm bread, while the stalls slowly come alive around them. We like to take our time here, choosing what looks best that morning and bringing a little of the market back to Maison Éloi.",
    },

    {
      imageSrc: "/images/journal/Stories/the-village-nearby.jpg",
      imageAlt: "Village near Maison Éloi",
      title: "The Village Nearby",
      description:
        "Beyond the house, a small Provençal village invites you to wander without a plan. Stop for coffee beneath an old plane tree, explore a quiet side street or sit a little longer than you intended. These small detours are often the moments that stay with you long after a journey ends.",
    },

    {
      imageSrc: "/images/journal/Stories/walk-through-provence.jpg",
      imageAlt: "Walking through the Provençal countryside",
      title: "A Walk Through Provence",
      description:
        "Some of the best views are reached slowly. Follow a path between olive trees, pass old stone walls and let the landscape open gradually around you. Walking through Provence is less about reaching a destination and more about noticing the changing light, the scent of the herbs and the quiet of the countryside.",
    },
  ];

  
  const storiesHeroImages = [
    {
      imageUrl: "/images/journal/Stories/morning-at-maison-eloi.jpg",
      alt: "Hero",
    },
    {
      imageUrl: "/images/journal/Stories/the-art-of-slowing-down.jpg",
      alt: "Architectural detail",
    },
    {
      imageUrl: "/images/journal/Stories/afternoon-by-the-pool.jpg",
      alt: "Architecture entrance",
    },
    {
      imageUrl: "/images/journal/Stories/golden-hour-at-maison-eloi.jpg",
      alt: "Pool detail",
    },
    {
      imageUrl: "/images/journal/Stories/morning-market.jpg",
      alt: "Couple on the terrace",
    },
    {
      imageUrl: "/images/journal/Stories/the-village-nearby.jpg",
      alt: "Evening",
    },
    {
      imageUrl: "/images/journal/Stories/walk-through-provence.jpg",
      alt: "Woman walking towards the house",
    },
  ];

  return (
    <>
      <Navbar hasHero/>

      <HeroSlider images={storiesHeroImages} />

      <JournalCategoryPage
        eyebrow="STORIES"
        title={
          <>
            Life at the pace
            <br />
            of Maison Éloi
          </>
        }
        intro="Stories, rituals and quiet moments from the house — the little things that make a stay at Maison Éloi feel different."
        data={stories}
      />
    </>
  );
};

export default Stories;
