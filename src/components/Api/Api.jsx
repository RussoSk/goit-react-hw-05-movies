
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b0c24f4300d90d0bb33ad49b06fe89dd'; 

const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then((response) => response.data);
};

const searchMovies = (query) => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`).then((response) => response.data);
};

const getMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then((response) => response.data);
};

const getMovieCredits = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then((response) => response.data);
};

const getMovieReviews = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then((response) => response.data);
};

export { getTrendingMovies, searchMovies, getMovieDetails, getMovieCredits, getMovieReviews };
