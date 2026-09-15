import Navbar from "../components/navigation/Navbar";
import JournalCategoryPage from "../components/JournalCategoryPage";
import HeroSlider from "../components/HeroSlider";
import BookNow from "../components/BookNow";

const FoodAndWine = () => {
  const stories = [
    {
      imageSrc: "/images/journal/Food&Wine/provencal-lunch.jpg",
      imageAlt: "Provençal lunch",
      title: "A Long Lunch in Provence",
      description:
        "Lunch in Provence is rarely something to rush. Fresh ingredients arrive at the table, conversation stretches between courses and the afternoon seems to slow down around you. A good lunch is not simply about what is being served, but about giving yourself enough time to enjoy it, one course and one conversation at a time.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/provencal-table.jpg",
      imageAlt: "Provençal table set for lunch",
      title: "The Provençal Table",
      description:
        "Warm bread, golden olive oil, seasonal vegetables and a bottle of local wine are the foundation of a Provençal table. Nothing needs to be complicated. The pleasure comes from good ingredients, a beautiful setting and the people gathered around it. A table is at its best when nobody is watching the clock.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/ratatouille.jpg",
      imageAlt: "Traditional Provençal ratatouille",
      title: "The Comfort of Ratatouille",
      description:
        "Tomatoes, aubergines, courgettes, peppers and herbs come together slowly in one of Provence's most familiar dishes. Ratatouille is simple food at its best — generous, seasonal and full of the flavours of the summer garden. Like much of Provençal cooking, it rewards patience and allows each ingredient to retain its own character.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/tarte.jpg",
      imageAlt: "Provençal fruit tart",
      title: "Something Sweet for the Table",
      description:
        "When summer fruit is at its best, there is little need to do too much with it. A buttery pastry, ripe seasonal fruit and perhaps a little cream are enough. Served at the end of a long lunch, a simple tart becomes another reason to stay at the table a little longer and enjoy the last taste of the afternoon.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/wine.jpg",
      imageAlt: "Wine in Provence",
      title: "Wine at Golden Hour",
      description:
        "There is a particular pleasure in opening a bottle as the afternoon begins to fade. The table is still warm from the day, the garden is quieter and the first glass is poured just as the light turns golden. In Provence, wine is often less about the occasion and more about the rhythm of the evening — something to be enjoyed slowly, never hurried.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/chef-outdoor-kitchen.jpg",
      imageAlt: "Chef cooking in an outdoor kitchen",
      title: "Cooking in the Open Air",
      description:
        "Cooking outside changes the feeling of a meal. Fresh ingredients are prepared in the open air, herbs are picked close to the kitchen and dinner gradually comes together while the evening settles around the house. It is relaxed, generous and very much in keeping with the Provençal way of life, where food and landscape naturally belong together.",
    },

    {
      imageSrc: "/images/journal/Food&Wine/chef-plating-dinner.jpg",
      imageAlt: "Chef plating dinner",
      title: "From Kitchen to Table",
      description:
        "The final details of a meal are often the quietest ones. A plate is finished, herbs are added and everything is carried outside to a waiting table. At Maison Éloi, dining is part of the experience of the house — seasonal, considered and always meant to be enjoyed slowly, surrounded by good food, warm evenings and the people who make them memorable.",
    },
  ];

  const foodHeroImages = [
    {
      imageUrl: "/images/journal/Food&Wine/wine.jpg",
      alt: "Hero",
    },
    {
      imageUrl: "/images/journal/Food&Wine/provencal-table.jpg",
      alt: "Architectural detail",
    },
    {
      imageUrl: "/images/journal/Food&Wine/ratatouille.jpg",
      alt: "Architecture entrance",
    },
    {
      imageUrl: "/images/journal/Food&Wine/tarte.jpg",
      alt: "Pool detail",
    },
    {
      imageUrl: "/images/journal/Food&Wine/provencal-lunch.jpg",
      alt: "Couple on the terrace",
    },
    {
      imageUrl: "/images/journal/Food&Wine/chef-outdoor-kitchen.jpg",
      alt: "Evening",
    },
    {
      imageUrl: "/images/journal/Food&Wine/chef-plating-dinner.jpg",
      alt: "Woman walking towards the house",
    },
  ];

  return (
    <>
      <Navbar hasHero />

      <HeroSlider images={foodHeroImages} />

      <JournalCategoryPage
        eyebrow="FOOD & WINE"
        title={
          <>
            The pleasure of
            <br />
            eating slowly
          </>
        }
        intro="Provençal ingredients, long lunches, local wines and the simple rituals that make food an essential part of life at Maison Éloi."
        data={stories}
      />

      <BookNow />
    </>
  );
};

export default FoodAndWine;
