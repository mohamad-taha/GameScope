import Cards from "../Cards/Cards";
import Header from "../ContentHeader/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./TrendingCards.css";

const TrendingCards = () => {
  const {
    data: games,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  return (
    <div className="mt container popularCards">
      <Header title="Popular Games" link="/popular" />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        <div className="cardsContainer">
          {games?.results.map((game) => (
            <Cards key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingCards;
