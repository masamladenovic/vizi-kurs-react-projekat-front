import "./css/RoomDetails.css";

const RoomDetails = ({ details = [] }) => {
  return (
    <section className="room-details">
      <div className="room-details__container">
        <div className="room-details__intro">
          <span className="room-details__eyebrow">THE ESSENTIALS</span>

          <h2 className="room-details__title">Everything you need</h2>

          <p className="room-details__description">
            Thoughtfully considered details create a stay that feels effortless,
            comfortable and entirely at home.
          </p>
        </div>

        <div className="room-details__grid">
          {details.map(([label, value]) => (
            <div className="room-details__item" key={label}>
              <span className="room-details__label">{label}</span>

              <span className="room-details__value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
