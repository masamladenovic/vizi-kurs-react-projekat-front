import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/navigation/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RoomPage from "./components/RoomPage";

import Home from "./pages/Home";

// THE HOUSE
import TheHousePage from "./pages/TheHousePage";
import TheHouse from "./pages/TheHouse";
import TheGrounds from "./pages/TheGrounds";
import Pool from "./pages/Pool";
import Dining from "./pages/Dining";
import ThePhilosophy from "./pages/ThePhilosophy";

// ROOMS
import AllRooms from "./pages/AllRooms";
// RoomPage handles individual rooms through :roomSlug

// JOURNAL
import Journal from "./pages/Journal";
import Stories from "./pages/Stories";
import Provence from "./pages/Provence";
import FoodAndWine from "./pages/FoodAndWine";
import MaisonEloi from "./pages/MaisonEloi";

// BOOKING
import Booking from "./pages/Booking";

// OTHER
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* =========================================
            HOME
        ========================================= */}
        <Route path="/" element={<Home />} />


        {/* =========================================
            THE HOUSE
        ========================================= */}

        {/* Main The House page */}
        <Route path="/the-house-page" element={<TheHousePage />} />

        {/* The House details */}
        <Route path="/the-house-page/the-house" element={<TheHouse />} />

        {/* The House sections */}
        <Route path="/the-house-page/the-grounds" element={<TheGrounds />} />
        <Route path="/the-house-page/pool" element={<Pool />} />
        <Route path="/the-house-page/dining" element={<Dining />} />
        <Route
          path="/the-house-page/the-philosophy"
          element={<ThePhilosophy />}
        />


        {/* =========================================
            ROOMS
        ========================================= */}

        {/* All rooms */}
        <Route path="/rooms" element={<AllRooms />} />

        {/* Individual rooms */}
        <Route
          path="/rooms/:roomSlug"
          element={<RoomPage />}
        />


        {/* =========================================
            JOURNAL
        ========================================= */}

        {/* Journal main page */}
        <Route path="/journal" element={<Journal />} />

        {/* Journal categories */}
        <Route
          path="/journal/stories"
          element={<Stories />}
        />

        <Route
          path="/journal/provence"
          element={<Provence />}
        />

        <Route
          path="/journal/food-and-wine"
          element={<FoodAndWine />}
        />

        <Route
          path="/journal/maison-eloi"
          element={<MaisonEloi />}
        />


        {/* =========================================
            BOOKING
        ========================================= */}

        <Route path="/booking" element={<Booking />} />


        {/* =========================================
            OTHER
        ========================================= */}

        <Route
          path="/photo-gallery"
          element={<PhotoGallery />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =========================================
            404
        ========================================= */}

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;