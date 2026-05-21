import PCCard from "../PCCard/PCCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPCGames } from "../../service/rawg";
import Header from "../ContentHeader/Header";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./PCCards.css";

const PCCards = () => {
  const {
    data: games,
    error,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["PCGames"],
    queryFn: fetchPCGames,
  });

  return (
    <div className="PCCards mt container">
      <Header title="Hot PC Releases" />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch}/>
      ) : (
        <div className="PCCardsContainer">
          {games?.results.map((game) => (
            <PCCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PCCards;
