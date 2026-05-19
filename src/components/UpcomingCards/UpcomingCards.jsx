import { useQuery } from "@tanstack/react-query";
import Header from "../ContentHeader/Header";
import { fetchUpcomingGames } from "../../service/rawg";
import Carousel from "../Carousel/Carousel";
import ErrorMsg from "../Error/ErrorMsg";
import Loader from "../Loader/Loader";

const UpcomingCards = () => {
  const {
    data: games,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["upcomingGames"],
    queryFn: fetchUpcomingGames,
  });

  return (
    <div className="mt container upcomingCards">
      <Header title="Upcoming Games" link="/upcoming" />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg />
      ) : (
        <Carousel games={games} />
      )}
    </div>
  );
};

export default UpcomingCards;
