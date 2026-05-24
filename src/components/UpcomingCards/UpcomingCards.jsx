import { useQuery } from "@tanstack/react-query";
import Header from "../ContentHeader/Header";
import { fetchUpcomingGames } from "../../service/rawg";
import Carousel from "../Carousel/Carousel";
import ErrorMsg from "../Error/ErrorMsg";
import Loader from "../Loader/Loader";

const UpcomingCards = () => {
  // React Query لجلب الألعاب القادمة
  const {
    data: games,
    error,
    isLoading,
  } = useQuery({
    // كاش خاص بالـ upcoming section
    queryKey: ["upcomingGames"],

    // fetch البيانات من RAWG
    queryFn: () => fetchUpcomingGames(1), // جلب الصفحة الأولى فقط للكاروسيل
  });

  return (
    <div className="mt container upcomingCards">
      {/* عنوان القسم + رابط */}
      <Header title="Upcoming Games" link="/upcoming" />

      {/* حالة التحميل */}
      {isLoading ? (
        <Loader />
      ) : // حالة الخطأ
      error ? (
        <ErrorMsg />
      ) : (
        // عرض الكاروسيل
        <Carousel games={games} />
      )}
    </div>
  );
};

export default UpcomingCards;
