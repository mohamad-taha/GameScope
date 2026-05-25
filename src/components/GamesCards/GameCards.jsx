import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../../service/rawg";
import Cards from "../../components/Cards/Cards";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import Pagination from "../Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const GameCards = () => {
  // بنجيب ونعدل الـ query params من URL
  const [searchParams, setSearchParams] = useSearchParams();

  // رقم الصفحة من الـ URL (إذا ما موجود = 1)
  const page = Number(searchParams.get("page")) || 1;

  // المنصة من الـ URL (مثلاً 187 = PS5)
  const platform = searchParams.get("platform");

  // اسم اللعبة من الـ URL (إذا ما موجود = "")
  const gameName = searchParams.get("search") || "";

  // React Query لجلب الألعاب حسب الصفحة والمنصة
  const {
    data: games,
    error,
    isLoading,
    refetch,
  } = useQuery({
    // مهم: كل ما page أو platform يتغيروا، يعمل refetch
    queryKey: ["games", page, platform, gameName],

    // fetch البيانات مع تمرير الفلاتر
    queryFn: () => fetchGames(page, platform, gameName),
  });

  return (
    <div className="mt">
      <Searchbar setSearchParams={setSearchParams} value={gameName} />

      {/* حالة التحميل */}
      {isLoading ? (
        <Loader />
      ) : // حالة الخطأ
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        // عرض البيانات
        <div className="cardsContainer">
          {games?.results.map((game) => (
            <Cards key={game.id} game={game} />
          ))}
        </div>
      )}

      {/* pagination مربوط مباشرة بالـ URL */}
      <Pagination
        setSearchParams={setSearchParams}
        page={page}
        searchParams={searchParams}
        totalCount={games?.count}
      />
    </div>
  );
};

export default GameCards;
