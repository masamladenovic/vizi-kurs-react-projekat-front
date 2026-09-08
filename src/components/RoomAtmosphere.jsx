import "./css/RoomAtmosphere.css";

const RoomAtmosphere = ({ atmosphere }) => {
  if (!atmosphere) return null;

  return (
    <section className="room-atmosphere">
      <img
        src={atmosphere.image}
        alt={atmosphere.alt}
        className="room-atmosphere__image"
      />

      <div className="room-atmosphere__overlay">
        <span className="room-atmosphere__eyebrow">{atmosphere.eyebrow}</span>

        <h2 className="room-atmosphere__title">{atmosphere.title}</h2>
      </div>
    </section>
  );
};

export default RoomAtmosphere;
