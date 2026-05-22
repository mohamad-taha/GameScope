import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchScreenshots } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./Screenshots.css";

const ScreenShots = () => {
  const params = useParams();

  const {
    data: screenshots,
    error,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["gameScreenshots"],
    queryFn: () => fetchScreenshots(params.id),
  });

  return (
    <div className="screenshotsSection mt">
      <h2>Screenshots</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch}/>
      ) : (
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
