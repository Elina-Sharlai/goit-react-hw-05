import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_AUTH = import.meta.env.VITE_API_AUTH;

if (!API_AUTH) {
    throw new Error(
        'API key is missing. Please set API_AUTH in your environment variables.'
    );
}
const options = {
    params: {
        language: 'en-US',
    },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_AUTH}`,
    },
};

export const fetchTrending = async () => {
    const response = await axios.get('trending/movie/day', {
        params: options.params,
        headers: options.headers,
    });
    return response.data;
};

export const fetchSearch = async (query, page = 1) => {
    const response = await axios
        .get('search/movie', {
            params: {
                ...options.params,
                query: query,
                include_adult: 'false',
                page: page,
            },
            headers: options.headers,
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};

export const fetchMovieInfo = async movieId => {
    const response = await axios
        .get(`movie/${movieId}`, {
            params: options.params,
            headers: options.headers,
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};

export const fetchMovieCast = async movieId => {
    const response = await axios
        .get(`movie/${movieId}/credits`, {
            params: options.params,
            headers: options.headers,
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};

export const fetchMovieReviews = async (movieId, page = 1) => {
    const response = await axios
        .get(`movie/${movieId}/reviews`, {
            params: {
                ...options.params,
                page: page,
            },
            headers: options.headers,
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};