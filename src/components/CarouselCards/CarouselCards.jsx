import { useState } from "react";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./CarouselCards.css";

const CarouselCards = ({ game }) => {
  const [hide, setHide] = useState(true);

  return (
    <div
      onClick={() => setHide(false)}
      onMouseOver={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
      className="carouselCards"
    >
      <img src={game.background_image} alt={game.name} />
      <div className={`carouselCardsContent ${hide ? "hidden" : ""}`}>
        <h2>{game.name}</h2>
        <div>
          {game.parent_platforms.map((platform) => (
            <span
              key={platform.platform.id}
              aria-label={platform.platform.name}
              role="img"
            >
              {platform.platform.name === "PlayStation" && (
                <FaPlaystation fontSize={25} />
              )}
              {platform.platform.name === "Xbox" && <FaXbox fontSize={25} />}
              {platform.platform.name === "PC" && (
                <HiDesktopComputer fontSize={25} />
              )}
            </span>
          ))}
          <p>{game.released}</p>
          <Link
            className="primaryBtn"
            to={`/game/${game.id}`}
            aria-label={`View details for ${game.name}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;
