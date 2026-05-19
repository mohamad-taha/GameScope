import { Link } from "react-router-dom";
import "./PCCard.css";

const PCCard = ({ game }) => {
  return (
    <div className="PCCard">
      <img src={game.background_image} alt={game.name} />
      <div className="PCCardInfo">
        <h2>{game.name}</h2>
        <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <span>⭐ {game.rating}</span>
      </div>
      <Link className="primaryBtn" to={`/game/${game.id}`} aria-label={`View details for ${game.name}`}>
        View Details
      </Link>
    </div>
  );
};

export default PCCard;
