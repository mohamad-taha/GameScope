import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchScreenshots } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./Screenshots.css";

const ScreenShots = () => {
  // جلب id اللعبة من الـ URL (مثلاً /game/123)
  const params = useParams();

  const {
    data: screenshots,
    error,
    isLoading,
    refetch,
  } = useQuery({
    // مفتاح الكاش (مهم جداً لـ React Query)
    queryKey: ["gameScreenshots"],

    // جلب الصور حسب id اللعبة
    queryFn: () => fetchScreenshots(params.id),
  });

  return (
    <div className="screenshotsSection mt">
      <h2>Screenshots</h2>

      {/* حالة التحميل */}
      {isLoading ? (
        <Loader />
      ) : // حالة الخطأ
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : (
        // عرض الصور
        <div className="screenshotsGrid">
          {screenshots?.results.map((image) => (
            <img key={image.id} src={image.image} alt="game screenshot" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreenShots;
