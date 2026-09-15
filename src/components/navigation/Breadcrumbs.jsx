import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./Breadcrumbs.css";

const routes = [
  { path: "/", breadcrumb: "Home" },

  // The House
  { path: "/the-house-page", breadcrumb: "The House" },
  { path: "/the-house", breadcrumb: "The House" },
  { path: "/the-grounds", breadcrumb: "The Grounds" },
  { path: "/pool", breadcrumb: "Pool" },
  { path: "/dining", breadcrumb: "Dining" },
  { path: "/the-philosophy", breadcrumb: "The Philosophy" },

  // Rooms
  { path: "/rooms", breadcrumb: "Rooms" },
  { path: "/rooms", breadcrumb: "All Rooms" },
  { path: "/la-suite-bastide", breadcrumb: "La Suite Bastide" },
  { path: "/chambre-oliviers", breadcrumb: "Chambre Oliviers" },
  { path: "/chambre-jardin", breadcrumb: "Chambre Jardin" },
  { path: "/chambre-luberon", breadcrumb: "Chambre Luberon" },
  { path: "/room-detail", breadcrumb: "Room Details" },

  // Journal
  { path: "/journal", breadcrumb: "Journal" },
  { path: "/stories", breadcrumb: "Stories" },
  { path: "/provence", breadcrumb: "Provence" },
  { path: "/food-and-wine", breadcrumb: "Food & Wine" },
  { path: "/maison-eloi", breadcrumb: "Maison Éloi" },

  // Booking
  { path: "/booking", breadcrumb: "Booking" },
  { path: "/dates", breadcrumb: "Dates" },
  { path: "/guests", breadcrumb: "Guests" },
  { path: "/stay-summary", breadcrumb: "Stay Summary" },
  { path: "/confirmation", breadcrumb: "Confirmation" },

  // Account
  { path: "/register", breadcrumb: "Register" },
  { path: "/login", breadcrumb: "Login" },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span className="breadcrumb-item" key={match.pathname}>
          <Link to={match.pathname}>{breadcrumb}</Link>

          {index < breadcrumbs.length - 1 && (
            <span className="breadcrumb-separator"> / </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
