import PCCard from "../PCCard/PCCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPCGames } from "../../service/rawg";
import Header from "../ContentHeader/Header";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import usePlatformNavigation from "../../hooks/HandlePlatformChange";

const PCCards = () => {
  const handlePlatformChange = usePlatformNavigation();

  // React Query لجلب ألعاب PC
  const {
    data: games,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["PCGames"], // كاش خاص بهالسكشن
    queryFn: fetchPCGames, // دالة fetch خاصة بألعاب PC
  });

  return (
    <div className="PCCards mt container">
      {/* عنوان القسم */}
      <Header title="Hot PC Releases" click={() => handlePlatformChange(4)} />

      {/* حالة التحميل */}
      {isLoading ? (
        <Loader />
      ) : // حالة الخطأ
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        // عرض البيانات
        <div className="cardsContainer">
          {/* عرض ألعاب PC */}
          {games?.results.map((game) => (
            <PCCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PCCards;
