import { useQuery } from "@tanstack/react-query";
import { fetchPS5Games } from "../../service/rawg";
import { FaPlaystation } from "react-icons/fa";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./GamesSpotlight.css";

const BrandShowCase = () => {
  // React Query لجلب ألعاب PS5 (أو حسب API اللي عاملها)
  const {
    data: games,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["PS5Games"], // كاش خاص بهيك component
    queryFn: fetchPS5Games, // دالة جلب بيانات PS5 من RAWG
  });

  return (
    <div className="wrapper mt">
      {/* حالة التحميل */}
      {isLoading ? (
        <Loader />
      ) : // حالة الخطأ
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        // عرض البيانات
        <div
          className="inner"
          style={{ "--quantity": 10 }} // CSS variable للتحكم بعدد الكروت/الأنيميشن
        >
          {/* عرض أول 10 ألعاب فقط */}
          {games?.results?.slice(0, 10).map((game, index) => (
            <div
              className="rotatingCards"
              key={game.id}
              // CSS variable لتحديد موقع الكرت بالأنيميشن
              style={{ "--index": index }}
            >
              {/* صورة اللعبة */}
              <img
                className="img"
                src={game.background_image}
                alt={game.name}
              />

              {/* overlay يظهر فوق الصورة */}
              <div className="overlayContent">
                <h3>{game.name}</h3>

                <p>
                  {/* تقييم اللعبة */}
                  <span>⭐ {game.rating}</span>

                  {/* أيقونة PS */}
                  <FaPlaystation />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandShowCase;
