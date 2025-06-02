import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ moviesList }) {
  const location = useLocation();
  return (
    <div>
      {moviesList.length > 0 && (
        <ul>
          {moviesList.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                style={{ display: "block" }}
                state={location}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
