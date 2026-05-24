import { useQuery } from "@tanstack/react-query";
import { fetchTrailer } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./Trailer.css";
import { useParams } from "react-router-dom";

const Trailer = ({ game }) => {
  // جلب id اللعبة من URL
  const params = useParams();

  const {
    data: trailer,
    error,
    isLoading,
    refetch,
  } = useQuery({
    // كاش خاص بالفيديو + مربوط بالـ game id
    queryKey: ["gameTrailer", params.id],

    // جلب التريلر باستخدام اسم اللعبة
    queryFn: () => fetchTrailer(game.name),
  });

  // استخراج videoId من YouTube response
  const videoId = trailer?.items?.[0]?.id?.videoId;

  return (
    <div className="trailerSection mt">
      <h2>Trailer</h2>

      {/* loading state */}
      {isLoading ? (
        <Loader />
      ) : // error state
      error ? (
        <ErrorMsg refetch={refetch} />
      ) : // إذا في فيديوهات
      trailer?.items?.length > 0 ? (
        <iframe
          loading="lazy"
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        />
      ) : (
        // إذا ما في trailer
        <div className="noTrailer">
          <span>🎮</span>
          <p>No trailer available</p>
        </div>
      )}
    </div>
  );
};

export default Trailer;
