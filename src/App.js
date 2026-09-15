import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/navigation/Footer";
import Home from "./pages/Home"
import TheHousePage from "./pages/TheHousePage"
import TheHouse from "./pages/TheHouse"
import TheGrounds from "./pages/TheGrounds"
import Pool from "./pages/Pool"
import Dining from "./pages/Dining"
import ThePhilosophy from "./pages/ThePhilosophy"
import AllRooms from "./pages/AllRooms"
import Journal from "./pages/Journal"
import Stories from "./pages/Stories"
import Provence from "./pages/Provence"
import FoodAndWine from "./pages/FoodAndWine"
import MaisonEloi from "./pages/MaisonEloi"
import Booking from "./pages/Booking"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import "./App.css";

// Umesto direktnog uvoza komponente RoomDetails, uvozimo stranicu RoomPage koja upravlja podacima sobe:
import RoomPage from "./components/RoomPage"; 
import PhotoGallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-house-page" element={<TheHousePage />} />
        <Route path="/the-house" element={<TheHouse />} />
        <Route path="/the-grounds" element={<TheGrounds />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/the-philosophy" element={<ThePhilosophy />} />
        <Route path="/rooms" element={<AllRooms />} />
        
        {/* Ovde je izmenjeno da ruta vodi na RoomPage */}
        <Route path="/rooms/:roomSlug" element={<RoomPage />} />

        <Route path="/journal" element={<Journal />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/provence" element={<Provence />} />
        <Route path="/food-and-wine" element={<FoodAndWine />} />
        <Route path="/maison-eloi" element={<MaisonEloi />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;