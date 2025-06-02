import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/movieServices";
import { useEffect, useState } from "react";

export default function MovieCast() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then((data) => setCastList(data.cast))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {castList.length > 0 &&
        castList.map((actor) => (
          <div key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt="photo"
              width="168"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))}
      {!isLoading && castList.length === 0 && (
        <div>We dont have any cast info for this movie...</div>
      )}
    </div>
  );
}
