import { useNavigate } from "react-router-dom";
import "./css/NotFound.css";
import Navbar from "../components/navigation/Navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <main className="not-found">
      <div className="not-found__content">
        <span className="not-found__eyebrow">MAISON ÉLOI</span>

        <span className="not-found__number">404</span>

        <h1>
          This page
          <br />
          could not be found.
        </h1>

        <p>
          It seems this quiet corner of Maison Éloi does not exist.
          <br />
          Let us take you back home.
        </p>

        <button className="not-found__button" onClick={() => navigate("/")}>
          Return home
          <span>→</span>
        </button>
      </div>

      <div className="not-found__footer">
        <span>PROVENCE · FRANCE</span>
        <span>EST. MAISON ÉLOI</span>
      </div>
    </main>
    </>
    
  );
};

export default NotFound;
