import { useQuery } from "@tanstack/react-query";
import { fetchTrailer } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./Trailer.css";
import { useParams } from "react-router-dom";

const Trailer = ({ game }) => {
  const params = useParams();
  const {
    data: trailer,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["gameTrailer", params.id],
    queryFn: () => fetchTrailer(game.name),
  });

  const videoId = trailer?.items?.[0]?.id?.videoId;

  return (
    <div className="trailerSection mt">
      <h2>Trailer</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch} />
      ) : trailer?.items?.length > 0 ? (
        <iframe
          loading="lazy"
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        />
      ) : (
        <div className="noTrailer">
          <span>🎮</span>
          <p>No trailer available</p>
        </div>
      )}
    </div>
  );
};

export default Trailer;
