import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import MarbleSection from "../components/MarbleSection";
import RoomPhotoGallery from "../components/RoomPhotoGallery";
import RoomDetails from "../components/RoomDetails";
import RoomAtmosphere from "../components/RoomAtmosphere";
import RoomAmenities from "../components/RoomAmenities";

import { rooms } from "../data/rooms";

const RoomDetail = () => {
  const navigate = useNavigate();
  const { roomSlug } = useParams();

  const room = rooms[roomSlug];

  if (!room) {
    return <div>Room not found.</div>;
  }

  return (
    <>
      <Navbar />

      <RoomPhotoGallery images={room.gallery} />

      <MarbleSection
        subtitle={room.subtitle}
        title={room.title}
        description={room.description}
        primaryButton={{
          label: "Book this room",
          onClick: () => navigate("/booking"),
        }}
        secondaryButton={{
          label: "Explore all rooms",
          onClick: () => navigate("/rooms"),
        }}
      />

      <RoomDetails details={room.details} />

      <RoomAtmosphere atmosphere={room.atmosphere} />

      <RoomAmenities
        amenities={room.amenities}
        intro={room.amenitiesIntro}
      />
    </>
  );
};

export default RoomDetail;
