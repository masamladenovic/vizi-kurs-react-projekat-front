import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Home from "./pages/Home"
import TheHousePage from "./pages/TheHousePage"
import TheHouse from "./pages/TheHouse"
import TheGrounds from "./pages/TheGrounds"
import Pool from "./pages/Pool"
import Dining from "./pages/Dining"
import ThePhilosophy from "./pages/ThePhilosophy"
import Rooms from "./pages/Rooms"
import AllRooms from "./pages/AllRooms"
import Journal from "./pages/Journal"
import Stories from "./pages/Stories"
import Provence from "./pages/Provence"
import FoodAndWine from "./pages/FoodAndWine"
import MaisonEloi from "./pages/MaisonEloi"
import Booking from "./pages/Booking"
import Dates from "./pages/Dates"
import Guests from "./pages/Guests"
import Confirmation from "./pages/Confirmation"
import StaySummary from "./pages/StaySummary"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import "./App.css";

// Umesto direktnog uvoza komponente RoomDetails, uvozimo stranicu RoomPage koja upravlja podacima sobe:
import RoomPage from "./components/RoomPage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-house-page" element={<TheHousePage />} />
        <Route path="/the-house" element={<TheHouse />} />
        <Route path="/the-grounds" element={<TheGrounds />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/the-philosophy" element={<ThePhilosophy />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/all-rooms" element={<AllRooms />} />
        
        {/* Ovde je izmenjeno da ruta vodi na RoomPage */}
        <Route path="/rooms/:roomSlug" element={<RoomPage />} />

        <Route path="/journal" element={<Journal />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/provence" element={<Provence />} />
        <Route path="/food-and-wine" element={<FoodAndWine />} />
        <Route path="/maison-eloi" element={<MaisonEloi />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dates" element={<Dates/>} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/stay-summary" element={<StaySummary />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;