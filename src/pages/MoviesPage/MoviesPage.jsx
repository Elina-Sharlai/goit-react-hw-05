import MovieSearch from '../../components/MovieSearch/MovieSearch';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../../services/movieServices';

export default function MoviesPage() {
    const [searchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchSearch(searchParams.get('query'))
            .then(data => setMoviesList(data.results))
            .finally(() => setIsLoading(false));
    }, [searchParams]);

    return (
        <div>
            <MovieSearch />
            {isLoading && <p>Loading...</p>}
            {moviesList.length > 0 && <MovieList moviesList={moviesList} />}
        </div>
    );
}