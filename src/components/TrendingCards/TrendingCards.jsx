import Cards from "../Cards/Cards";
import Header from "../ContentHeader/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import { useNavigate } from "react-router-dom";
import "./TrendingCards.css";

const TrendingCards = () => {
  const navigate = useNavigate();

  // React Query لجلب أول صفحة من الألعاب (Popular games)
  const {
    data: games,
    error,
    isLoading,
    refetch,
  } = useQuery({
    // مفتاح الكاش
    queryKey: ["games"],

    // جلب الألعاب (page 1 فقط)
    queryFn: () => fetchGames(1),
  });

  return (
    <div className="container mt">
      {/* عنوان القسم + رابط لصفحة الألعاب */}
      <Header title="Popular Games" click={() => navigate("/games")} />

      {/* loading state */}
      {isLoading ? (
        <Loader />
      ) : // error state
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        // عرض الكروت
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
