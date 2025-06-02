import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/movieServices";
import { useEffect, useState } from "react";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then((data) => setReviewsList(data.results))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {reviewsList.length > 0 && (
        <ul>
          {reviewsList.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && reviewsList.length === 0 && (
        <div>We dont have any reviews for this movie...</div>
      )}
    </div>
  );
}
