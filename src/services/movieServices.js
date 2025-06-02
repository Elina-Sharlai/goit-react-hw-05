import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';



const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
    throw new Error(
        'API key is missing. Please set API_KEY in your environment variables.'
    );
}
const options = {
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
    headers: {
        accept: 'application/json',
    },
};

export const fetchTrending = async () => {
    const response = await axios.get('trending/movie/day', {
        params: options.params,

    });
    return response.data;
};

export const fetchSearch = async (query, page = 1) => {
    const response = await axios
        .get('search/movie', {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                query: query,
                page: page,
            },
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};

// fetchSearch('Inception').then(data => console.log(data));

export const fetchMovieInfo = async movieId => {
    const response = await axios
        .get(`movie/${movieId}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                append_to_response: 'videos,images',
            },
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};

export const fetchMovieCast = async movieId => {
    const response = await axios
        .get(`movie/${movieId}/credits`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                append_to_response: 'videos,images',
            },
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};

export const fetchMovieReviews = async (movieId, page = 1) => {
    const response = await axios
        .get(`movie/${movieId}/reviews`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: page,
            },
        })
        .then(response => response.data)
        .catch(error => console.error(error));
    return response;
};