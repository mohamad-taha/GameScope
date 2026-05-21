import { useQuery } from "@tanstack/react-query";
import { fetchTrailer } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import { useParams } from "react-router-dom";
import "./Trailer.css";

const Trailer = () => {
  const params = useParams();

  const {
    data: trailer,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["gameTrailer"],
    queryFn: () => fetchTrailer(params.id),
  });

  console.log(trailer);

  return (
    <div className="trailerSection mt">
      <h2>Trailer</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch} />
      ) : trailer?.results?.length !== 0 ? (
        trailer?.results[0] && (
          <video controls className="trailerVideo">
            <source src={trailer.results[0].data.max} type="video/mp4" />
          </video>
        )
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
