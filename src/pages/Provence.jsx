import Navbar from "../components/navigation/Navbar";
import JournalCategoryPage from "../components/JournalCategoryPage";
import HeroSlider from "../components/HeroSlider";

const Provence = () => {
  const stories = [
    {
      imageSrc: "/images/journal/Provence/luberon-at-sunset.jpg",
      imageAlt: "Luberon landscape at sunset",
      title: "The Luberon at Golden Hour",
      description:
        "As the sun begins to disappear behind the hills, the Luberon takes on a softer character. The villages turn golden, the fields become quiet and the last light settles over the landscape. It is the kind of evening that asks you to stop for a moment, take in the view and simply let the day come to an end.",
    },

    {
      imageSrc: "/images/journal/Provence/lavender-fields.jpg",
      imageAlt: "Lavender fields in Provence",
      title: "When the Lavender Blooms",
      description:
        "For a few weeks each summer, Provence becomes a landscape of violet fields and warm afternoon light. The scent of lavender carries through the countryside as the rows follow the shape of the hills. Early mornings are especially beautiful, before the day becomes warm and the fields begin to fill with visitors.",
    },

    {
      imageSrc: "/images/journal/Provence/provencal-market.jpg",
      imageAlt: "Provençal market",
      title: "Market Mornings in Provence",
      description:
        "Markets are part of the everyday rhythm of Provençal life. Seasonal fruit, vegetables, flowers, handmade goods and fresh bread fill the stalls, while locals stop to talk and catch up. The best way to experience one is without a list — simply wander, look around and see what catches your eye.",
    },

    {
      imageSrc: "/images/journal/Provence/village-cafe.jpg",
      imageAlt: "Café in a Provençal village",
      title: "Coffee in the Village",
      description:
        "Find a table beneath the shade of an old plane tree and let the morning pass slowly. A coffee becomes an excuse to stay a little longer, watch the village move around you and enjoy the simple pleasure of having nowhere else to be. These are the moments that make travelling through Provence feel effortless.",
    },

    {
      imageSrc: "/images/journal/Provence/cycling-through-luberon.jpg",
      imageAlt: "Cycling through the Luberon",
      title: "A Day on Two Wheels",
      description:
        "The quiet roads of the Luberon make an ideal way to discover the countryside at a slower pace. Ride between olive groves, vineyards and hilltop villages, stopping whenever a view catches your attention. There is no need to cover too much ground — the landscape is best enjoyed one small road at a time.",
    },

    {
      imageSrc: "/images/journal/Provence/a-walk-through-lavender.jpg",
      imageAlt: "Walking through lavender fields",
      title: "A Walk Through the Lavender",
      description:
        "There is something particularly peaceful about walking through lavender in the early morning. The air is still cool, the scent is unmistakable and the landscape stretches quietly towards the horizon. It is a simple experience, but one that captures the slower rhythm of summer in Provence.",
    },

    {
      imageSrc: "/images/journal/Provence/local-pottery.jpg",
      imageAlt: "Handmade Provençal pottery",
      title: "The Beauty of Things Made Slowly",
      description:
        "From handmade ceramics to woven baskets and simple kitchenware, Provence has a long tradition of objects shaped by hand. Their beauty comes from the small imperfections, natural materials and the knowledge that they were made to be used. We love bringing a little of that philosophy into Maison Éloi.",
    },
  ];

  
  const provenceHeroImages = [
    {
      imageUrl: "/images/journal/Provence/luberon-at-sunset.jpg",
      alt: "Hero",
    },
    {
      imageUrl: "/images/journal/Provence/lavender-fields.jpg",
      alt: "Architectural detail",
    },
    {
      imageUrl: "/images/journal/Provence/provencal-market.jpg",
      alt: "Architecture entrance",
    },
    {
      imageUrl: "/images/journal/Provence/village-cafe.jpg",
      alt: "Pool detail",
    },
    {
      imageUrl: "/images/journal/Provence/cycling-through-luberon.jpg",
      alt: "Couple on the terrace",
    },
    {
      imageUrl: "/images/journal/Provence/a-walk-through-lavender.jpg",
      alt: "Evening",
    },
    {
      imageUrl: "/images/journal/Provence/local-pottery.jpg",
      alt: "Woman walking towards the house",
    },
  ];

  return (
    <>
      <Navbar hasHero/>

       <HeroSlider images={provenceHeroImages} />

      <JournalCategoryPage
        eyebrow="PROVENCE"
        title={
          <>
            A slower side
            <br />
            of Provence
          </>
        }
        intro="Villages, landscapes, markets and small discoveries from the Luberon and the countryside surrounding Maison Éloi."
        data={stories}
      />
    </>
  );
};

export default Provence;
