import { useQuery } from "@tanstack/react-query";
import { fetchPS5Games } from "../../service/rawg";
import { FaPlaystation } from "react-icons/fa";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./GamesSpotlight.css";

const BrandShowCase = () => {
  const {
    data: games,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["PS5Games"],
    queryFn: fetchPS5Games,
  });

  return (
    <div className="wrapper mt">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        <div className="inner" style={{ "--quantity": 10 }}>
          {games.results.slice(0, 10).map((game, index) => (
            <div
              className="rotatingCards"
              key={game.id}
              style={{ "--index": index }}
            >
              <img
                className="img"
                src={game.background_image}
                alt={game.name}
              />

              <div className="overlayContent">
                <h3>{game.name}</h3>
                <p>
                  <span>⭐ {game.rating}</span>
                  <FaPlaystation />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandShowCase;
