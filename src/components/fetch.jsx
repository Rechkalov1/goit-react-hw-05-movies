import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const MY_KEY = '14bbbaf17264a85a2229a09d03b6c904';

const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${MY_KEY}`
  );

  return response.data;
};
const fetchMoviesOne = async ({ id }) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${MY_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
};

const fetchMovies = async ({ query = '', page = 1 }) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${MY_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  );

  return response.data;
};
const fetchCast = async ({ id }) => {
  const response = await axios.get(`
  ${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=en-US`);

  return response.data;
};
const fetchReviews = async ({ id }) => {
  const response = await axios.get(`
  ${BASE_URL}/movie/${id}/reviews?api_key=${MY_KEY}&language=en-US&page=1`);

  return response.data.results;
};
export { fetchTrending, fetchMovies, fetchMoviesOne, fetchCast, fetchReviews };
