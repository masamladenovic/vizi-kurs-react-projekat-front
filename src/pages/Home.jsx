import HeroSlider from "../components/HeroSlider"
import Navbar from "../components/navigation/Navbar"
import "./css/Home.css"


const Home = () => {
  return (
    <>
      <Navbar hasHero />

      <main>
        <section
          style={{
            height: "100vh",
            background: "#7C8178",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "40px",
          }}
        >
          HERO
        </section>

        <section
          style={{
            height: "100vh",
            background: "#F7F4EE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          CONTENT
        </section>
      </main>
    </>
  );
};

export default Home;