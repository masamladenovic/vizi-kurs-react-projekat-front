import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import "./css/Booking.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const rooms = [
  {
    id: "luberon",
    name: "Chambre Luberon",
    price: 320,
    image: "/images/rooms/chambre-luberon/luberon-hero.jpg",
    description: "A quiet room above the Luberon.",
  },
  {
    id: "oliviers",
    name: "Chambre Oliviers",
    price: 290,
    image: "/images/rooms/chambre-oliviers/oliviers-evening-atmosphere.jpg",
    description: "Soft mornings among the olive trees.",
  },
  {
    id: "jardin",
    name: "Chambre Jardin",
    price: 270,
    image: "/images/rooms/chambre-jardin/jardin-hero.jpg",
    description: "A peaceful room opening towards the garden.",
  },
  {
    id: "bastide",
    name: "La Suite Bastide",
    price: 390,
    image: "/images/rooms/la-suite-bastide/bastide-hero.jpg",
    description: "Our most spacious and private retreat.",
  },
];

const Booking = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  const [showRoomSelector, setShowRoomSelector] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  /* ========================================
     CALENDAR
  ======================================== */

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const day = new Date(year, month, 1).getDay();

    return day === 0 ? 6 : day - 1;
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((year) => year - 1);
    } else {
      setCurrentMonth((month) => month - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((year) => year + 1);
    } else {
      setCurrentMonth((month) => month + 1);
    }
  };

  /* ========================================
     DATE HELPERS
  ======================================== */

  const formatDate = (date) => {
    if (!date) return "Select date";

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const createDate = (day) => {
    return new Date(currentYear, currentMonth, day);
  };

  const isSameDate = (dateOne, dateTwo) => {
    if (!dateOne || !dateTwo) return false;

    return (
      dateOne.getDate() === dateTwo.getDate() &&
      dateOne.getMonth() === dateTwo.getMonth() &&
      dateOne.getFullYear() === dateTwo.getFullYear()
    );
  };

  const isBetween = (date) => {
    if (!checkIn || !checkOut) return false;

    return date > checkIn && date < checkOut;
  };

  const isPastDate = (date) => {
    const current = new Date();

    current.setHours(0, 0, 0, 0);

    return date < current;
  };

  const handleDateClick = (day) => {
    if (!day) return;

    const selectedDate = createDate(day);

    if (isPastDate(selectedDate)) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(selectedDate);
      setCheckOut(null);
      return;
    }

    if (selectedDate > checkIn) {
      setCheckOut(selectedDate);
    } else {
      setCheckIn(selectedDate);
      setCheckOut(null);
    }
  };

  /* ========================================
     NIGHTS
  ======================================== */

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;

    const difference = checkOut - checkIn;

    return Math.round(difference / (1000 * 60 * 60 * 24));
  };

  const nights = getNights();

  const totalPrice = nights > 0 ? nights * selectedRoom.price : 0;

  const canBook = checkIn && checkOut && nights > 0;

  /* ========================================
     RENDER
  ======================================== */

  return (
    <div className="booking-page">
      <Navbar />

      <main className="booking-main">
        {/* ========================================
            LEFT INTRO
        ======================================== */}

        <aside className="booking-intro">
          <div className="booking-intro-top">
            <span className="booking-eyebrow">YOUR STAY</span>

            <h1>
              Stay a little
              <br />
              longer.
            </h1>

            <p>
              Choose your dates and discover a slower way of staying at Maison
              Éloi.
            </p>
          </div>

          <div className="booking-intro-bottom">
            <div className="booking-location">
              <span>MAISON ÉLOI</span>

              <p>
                Ménerbes
                <br />
                Provence, France
              </p>
            </div>

            <span className="booking-scroll">01 / SELECT YOUR DATES</span>
          </div>
        </aside>

        {/* ========================================
            BOOKING PANEL
        ======================================== */}

        <section className="booking-panel">
          {/* TOP BAR */}

          <div className="booking-panel-top">
            <div className="booking-selection">
              <button
                className={`booking-selection-item ${
                  checkIn ? "is-selected" : ""
                }`}
              >
                <span>ARRIVAL</span>

                <strong>{formatDate(checkIn)}</strong>
              </button>

              <div className="booking-selection-divider"></div>

              <button
                className={`booking-selection-item ${
                  checkOut ? "is-selected" : ""
                }`}
              >
                <span>DEPARTURE</span>

                <strong>{formatDate(checkOut)}</strong>
              </button>
            </div>

            <div className="booking-meta">
              <button
                className="booking-meta-button"
                onClick={() => setShowGuestSelector(!showGuestSelector)}
              >
                <span>GUESTS</span>

                <strong>
                  {guests} {guests === 1 ? "guest" : "guests"}
                </strong>
              </button>

              {showGuestSelector && (
                <div className="booking-dropdown guest-dropdown">
                  <button
                    className="booking-dropdown-close"
                    onClick={() => setShowGuestSelector(false)}
                    aria-label="Close guest selector"
                  >
                    ×
                  </button>
                  <div className="guest-row">
                    <span>Adults</span>

                    <div className="guest-controls">
                      <button
                        onClick={() =>
                          setGuests((value) => Math.max(1, value - 1))
                        }
                      >
                        −
                      </button>

                      <strong>{guests}</strong>

                      <button
                        onClick={() =>
                          setGuests((value) => Math.min(8, value + 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ========================================
              CALENDAR
          ======================================== */}

          <div className="booking-calendar">
            <div className="calendar-header">
              <button
                className="calendar-arrow"
                onClick={previousMonth}
                aria-label="Previous month"
              >
                <FaArrowLeftLong />
              </button>

              <div className="calendar-month">
                <span>{currentYear}</span>

                <h2>{months[currentMonth]}</h2>
              </div>

              <button
                className="calendar-arrow"
                onClick={nextMonth}
                aria-label="Next month"
              >
                <FaArrowRightLong />
              </button>
            </div>

            <div className="calendar-weekdays">
              {weekdays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="calendar-grid">
              {calendarDays.map((day, index) => {
                if (!day) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="calendar-day calendar-day--empty"
                    />
                  );
                }

                const date = createDate(day);

                const selectedStart = isSameDate(date, checkIn);

                const selectedEnd = isSameDate(date, checkOut);

                const between = isBetween(date);

                const past = isPastDate(date);

                return (
                  <button
                    key={day}
                    className={`
                      calendar-day
                      ${selectedStart ? "is-start" : ""}
                      ${selectedEnd ? "is-end" : ""}
                      ${between ? "is-between" : ""}
                      ${past ? "is-past" : ""}
                    `}
                    onClick={() => handleDateClick(day)}
                    disabled={past}
                  >
                    <span>{day}</span>

                    {selectedStart && <small>ARRIVAL</small>}

                    {selectedEnd && <small>DEPARTURE</small>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================
              BOTTOM BOOKING BAR
          ======================================== */}

          <div className="booking-bottom">
            <button
              className="booking-room"
              onClick={() => setShowRoomSelector(!showRoomSelector)}
            >
              <span>ROOM</span>

              <strong>{selectedRoom.name}</strong>

              <small>€{selectedRoom.price} / night</small>
            </button>

            {showRoomSelector && (
              <div className="booking-dropdown room-dropdown">
                <button
                  className="booking-dropdown-close"
                  onClick={() => setShowRoomSelector(false)}
                  aria-label="Close room selector"
                >
                  ×
                </button>

                <div className="room-dropdown-heading">
                  <span>CHOOSE YOUR ROOM</span>
                </div>

                {rooms.map((room) => (
                  <button
                    key={room.id}
                    className={`room-option ${
                      selectedRoom.id === room.id ? "is-active" : ""
                    }`}
                    onClick={() => {
                      setSelectedRoom(room);
                      setShowRoomSelector(false);
                    }}
                  >
                    <img src={room.image} alt={room.name} />

                    <div>
                      <strong>{room.name}</strong>

                      <span>€{room.price} / night</span>
                    </div>

                    {selectedRoom.id === room.id && (
                      <span className="room-check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="booking-total">
              <span>
                {nights > 0
                  ? `${nights} ${nights === 1 ? "night" : "nights"}`
                  : "Your stay"}
              </span>

              <strong>
                {totalPrice > 0 ? `€${totalPrice.toLocaleString()}` : "—"}
              </strong>
            </div>

            <button
              className="booking-submit"
              disabled={!canBook}
              onClick={() => setShowConfirmation(true)}
            >
              <span>BOOK</span>
              <span className="booking-arrow">↗</span>
            </button>
          </div>
        </section>
      </main>

      <section className="booking-quote">
        <div className="booking-quote-inner">
          <span className="booking-quote-eyebrow">A SLOWER WAY OF LIVING</span>

          <blockquote>
            “The best stays are not measured in nights,
            <br />
            but in moments worth remembering.”
          </blockquote>

          <span className="booking-quote-signature">— Maison Éloi</span>
        </div>
      </section>

      {/* ========================================
          CONFIRMATION MODAL
      ======================================== */}

      {showConfirmation && (
        <div
          className="booking-modal-overlay"
          onClick={() => setShowConfirmation(false)}
        >
          <div
            className="booking-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="booking-modal-close"
              onClick={() => setShowConfirmation(false)}
            >
              ×
            </button>

            <div className="booking-modal-header">
              <span>YOUR RESERVATION</span>

              <h2>
                Almost
                <br />
                there.
              </h2>

              <p>Take a moment to review your stay at Maison Éloi.</p>
            </div>

            <div className="booking-summary">
              <div className="booking-summary-room">
                <img src={selectedRoom.image} alt={selectedRoom.name} />

                <div>
                  <span>ROOM</span>

                  <strong>{selectedRoom.name}</strong>

                  <p>{selectedRoom.description}</p>
                </div>
              </div>

              <div className="booking-summary-grid">
                <div>
                  <span>ARRIVAL</span>
                  <strong>{formatDate(checkIn)}</strong>
                </div>

                <div>
                  <span>DEPARTURE</span>
                  <strong>{formatDate(checkOut)}</strong>
                </div>

                <div>
                  <span>GUESTS</span>
                  <strong>{guests}</strong>
                </div>

                <div>
                  <span>DURATION</span>
                  <strong>{nights} nights</strong>
                </div>
              </div>

              <div className="booking-summary-total">
                <span>TOTAL</span>

                <strong>€{totalPrice.toLocaleString()}</strong>
              </div>
            </div>

            <button
              className="booking-confirm-button"
              onClick={() => {
                setShowConfirmation(false);
              }}
            >
              CONFIRM RESERVATION
              <span>↗</span>
            </button>

            <p className="booking-modal-note">
              Your reservation details will be confirmed once booking is
              completed.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
