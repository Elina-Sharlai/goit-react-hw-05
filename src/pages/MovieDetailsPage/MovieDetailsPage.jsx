import { useEffect, useRef, useState } from 'react';
import { fetchMovieInfo } from '../../services/movieServices';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state) ?? '/movies';

  useEffect(() => {
    setIsLoading(true);
    fetchMovieInfo(movieId)
      .then(data => setMovieInfo(data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <BackButton to={backLinkHref.current} />
      {isLoading && <p>Loading...</p>}
      {movieInfo && <MovieDetails movieInfo={movieInfo} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
