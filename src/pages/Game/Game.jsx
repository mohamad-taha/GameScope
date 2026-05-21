import { useLocation } from "react-router-dom";
import GameDetailsCard from "../../components/GameDetailsCard/GameDetailsCard";
import Trailer from "../../components/Trailer/Trailer";
import Screenshots from "../../components/screenShots/Screenshots";
import { useEffect } from "react";
const Game = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container">
      <GameDetailsCard />
      <Screenshots />
      <Trailer />
    </div>
  );
};

export default Game;
