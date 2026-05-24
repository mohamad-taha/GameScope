import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img loading="lazy" src={game.background_image} alt={game.name} />
      <div className="cardOverlay">
        {}
        <button
          onClick={() => navigate(`/games/${game.id}`)}
          className="primaryBtn"
          aria-label={`View details for ${game.name}`}
        >
          View Details
        </button>
      </div>
      <div className="cardInfo">
        <h3>{game.name}</h3>
        <span>⭐ {game.rating}</span>
      </div>
    </div>
  );
};

export default Cards;
