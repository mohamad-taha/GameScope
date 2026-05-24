import { useQuery } from "@tanstack/react-query";
import Cards from "../Cards/Cards";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import { fetchUpcomingGames } from "../../service/rawg";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const UpcomigGamesCards = () => {
  // قراءة page من URL (مثلاً ?page=2)
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  // React Query لجلب بيانات الألعاب القادمة حسب الصفحة
  const {
    data: games,
    isLoading,
    error,
    refetch,
  } = useQuery({
    // مهم جداً: كل صفحة إلها cache مختلف
    queryKey: ["upcomingGames", page],

    // جلب البيانات من API مع تمرير رقم الصفحة
    queryFn: () => fetchUpcomingGames(page),
  });

  return (
    <div className="mt">
      {/* حالة التحميل */}
      {isLoading ? (
        <Loader />
      ) : // حالة الخطأ
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        // عرض الكروت إذا البيانات جاهزة
        <div className="cardsContainer">
          {/* عرض الألعاب */}
          {games?.results.map((game) => (
            <Cards key={game.id} game={game} />
          ))}
        </div>
      )}

      {/* Pagination للتحكم بالصفحات */}
      <Pagination
        setSearchParams={setSearchParams}
        page={page}
        searchParams={searchParams}
        totalCount={games?.count}
      />
    </div>
  );
};

export default UpcomigGamesCards;
