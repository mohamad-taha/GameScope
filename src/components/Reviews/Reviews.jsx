import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "../../service/rawg";
import Loader from "../Loader/Loader";
import ErrorMsg from "../Error/ErrorMsg";
import "./Reviews.css";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const params = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["reviews", params.id],
    queryFn: () => fetchReviews(params.id),
  });

  return (
    <div className="reviewsSection mt">
      <h2 className="reviewsTitle">Reviews</h2>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg refetch={refetch} />
      ) : data?.results?.length > 0 ? (
        <div className="reviewsList">
          {data?.results?.map((review) => (
            <div className="reviewCard" key={review.id}>
              {/* Header */}
              <div className="reviewHeader">
                <div className="userInfo">
                  <div className="avatar">
                    {review.user?.username?.[0] || "U"}
                  </div>

                  <div>
                    <p className="username">
                      {review.user?.username || "Unknown User"}
                    </p>

                    <p className="date">
                      {new Date(review.created).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="rating">⭐ {review.rating || "N/A"}</div>
              </div>

              {/* Content */}
              <p className="reviewText">
                {review.text || review.content || "No comment provided."}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="noReviews">No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
