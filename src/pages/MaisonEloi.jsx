import Navbar from "../components/navigation/Navbar";
import JournalCategoryPage from "../components/JournalCategoryPage";
import HeroSlider from "../components/HeroSlider";
import BookNow from "../components/BookNow";
import Breadcrumbs from "../components/navigation/Breadcrumbs";

const MaisonEloi = () => {
  const stories = [
    {
      imageSrc: "/images/journal/Maison-Eloi/exterior.jpg",
      imageAlt: "Maison Éloi exterior",
      title: "The House in Provence",
      description:
        "Maison Éloi was imagined as a place where architecture, landscape and everyday life could exist quietly together. Rather than competing with its surroundings, the house takes its character from them — warm stone, natural textures, changing light and the slower rhythm of the Provençal countryside. Everything begins with the feeling of the house itself.",
    },

    {
      imageSrc: "/images/journal/Maison-Eloi/architecture-entrance.jpg",
      imageAlt: "Entrance to Maison Éloi",
      title: "A Quiet Arrival",
      description:
        "The first impression of Maison Éloi is deliberately understated. An old stone entrance, softened light and the feeling that the house has been here for much longer than you have. Nothing announces itself too loudly. The house reveals its character gradually, one detail at a time, inviting you to leave the outside world behind.",
    },

    {
      imageSrc: "/images/journal/Maison-Eloi/architecture-courtyyard.jpg",
      imageAlt: "Courtyard at Maison Éloi",
      title: "The Courtyard",
      description:
        "At the heart of the house, the courtyard becomes a natural place to pause. Morning light moves across the walls, the garden surrounds the space and the rhythm of the day can be felt without ever needing to be hurried. It is a place for coffee, conversation and quiet afternoons in the shade, always connected to the life of the house.",
    },

    {
      imageSrc: "/images/journal/Maison-Eloi/stone-staircase.jpg",
      imageAlt: "Stone staircase at Maison Éloi",
      title: "Stone, Time and Texture",
      description:
        "The character of an old house lives in its materials. Worn stone, softened edges and surfaces shaped by time create a sense of permanence that cannot be recreated overnight. At Maison Éloi, these details are allowed to remain visible — part of the story rather than something to be hidden. They give the house its quiet sense of history.",
    },

    {
      imageSrc: "/images/journal/Maison-Eloi/interior-detail.jpg",
      imageAlt: "Interior detail at Maison Éloi",
      title: "The Beauty of Simplicity",
      description:
        "Inside, the rooms remain quiet and considered. Linen, wood, stone and natural light create an atmosphere that feels comfortable without becoming overly decorated. Every detail has a purpose, but nothing asks for attention. The result is a space designed first and foremost for rest, where the beauty comes from what has been left simple.",
    },

    {
      imageSrc: "/images/journal/Maison-Eloi/architectural-detail.jpg",
      imageAlt: "Architectural detail at Maison Éloi",
      title: "Details Worth Noticing",
      description:
        "A doorway, the curve of an old wall, a beam of afternoon light across the floor — the smallest details often tell the longest stories. They are easy to overlook when moving quickly, which is perhaps why slowing down changes the way a house is experienced. At Maison Éloi, these quiet details are part of what makes every corner feel personal.",
    },

    {
      imageSrc: "/images/journal/Maison-Eloi/evening.jpg",
      imageAlt: "Maison Éloi in the evening",
      title: "When Evening Arrives",
      description:
        "By evening, Maison Éloi becomes quieter still. Windows begin to glow softly, the garden settles into the dusk and the last light rests on the stone walls. There is very little left to do, and that is exactly the point. Another slow day at the house comes gently to an end, leaving only the warmth of the evening and the promise of another unhurried morning.",
    },
  ];

   const maisonHeroImages = [
    {
      imageUrl: "/images/journal/Maison-Eloi/exterior.jpg",
      alt: "Hero",
    },
    {
      imageUrl: "/images/journal/Maison-Eloi/architecture-entrance.jpg",
      alt: "Architectural detail",
    },
    {
      imageUrl: "/images/journal/Maison-Eloi/architecture-courtyyard.jpg",
      alt: "Architecture entrance",
    },
    {
      imageUrl: "/images/journal/Maison-Eloi/stone-staircase.jpg",
      alt: "Pool detail",
    },
    {
      imageUrl: "/images/journal/Maison-Eloi/interior-detail.jpg",
      alt: "Couple on the terrace",
    },
    {
      imageUrl: "/images/journal/Maison-Eloi/architectural-detail.jpg",
      alt: "Evening",
    },
    {
      imageUrl: "/images/journal/Maison-Eloi/evening.jpg",
      alt: "Woman walking towards the house",
    },
  ];

  return (
    <>
      <Navbar hasHero/>
      <Breadcrumbs/>

      <HeroSlider images={maisonHeroImages} />

      <JournalCategoryPage
        eyebrow="MAISON ÉLOI"
        title={
          <>
            The story of
            <br />
            the house
          </>
        }
        intro="A closer look at the architecture, details and philosophy behind Maison Éloi — a house shaped by Provence and designed for slower days."
        data={stories}
      />
      <BookNow/>
    </>
  );
};

export default MaisonEloi;
