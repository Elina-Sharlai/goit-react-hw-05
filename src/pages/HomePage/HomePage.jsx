import MovieList from "../../components/MovieList/MovieList";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTrending } from "../../services/movieServices";

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrending()
      .then((data) => setMoviesList(data.results))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      <MovieList moviesList={moviesList} />
    </div>
  );
}
