import HeroSlider from "../components/HeroSlider"
import Navbar from "../components/navigation/Navbar"
import "./css/Home.css"


const Home = () => {
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
       <HeroSlider images={homeHeroImages}/>
      </main>
    </>
  );
};

export default Home;