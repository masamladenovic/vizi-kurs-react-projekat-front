import "./css/RoomAmenities.css";

const RoomAmenities = ({ amenities = [], intro }) => {
  return (
    <section className="room-amenities">
      <div className="room-amenities__container">
        <div className="room-amenities__header">
          <span className="room-amenities__eyebrow">THE EXPERIENCE</span>

          <h2 className="room-amenities__title">
            Everything you need,
            <br />
            nothing you don't.
          </h2>
        </div>

        <div className="room-amenities__content">
          <div className="room-amenities__intro">
            <p>{intro}</p>
          </div>

          <div className="room-amenities__list">
            {amenities.map((amenity, index) => (
              <div className="room-amenities__item" key={amenity}>
                <span className="room-amenities__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="room-amenities__name">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomAmenities;
