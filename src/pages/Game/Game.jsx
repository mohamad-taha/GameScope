import { useLocation, useParams } from "react-router-dom";
import GameDetailsCard from "../../components/GameDetailsCard/GameDetailsCard";
import Trailer from "../../components/Trailer/Trailer";
import Screenshots from "../../components/screenShots/Screenshots";
import { useEffect } from "react";
import { fetchGame } from "../../service/rawg";
import { useQuery } from "@tanstack/react-query";
import Reviews from "../../components/Reviews/Reviews";
const Game = () => {
  const { pathname } = useLocation();
  const params = useParams();

  const {
    data: game,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["gameDetails", params.id],
    queryFn: () => fetchGame(params.id),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container">
      <GameDetailsCard
        game={game}
        error={error}
        isLoading={isLoading}
        refetch={refetch}
      />
      <Screenshots />
      <Trailer game={game} />
      <Reviews />
    </div>
  );
};

export default Game;
