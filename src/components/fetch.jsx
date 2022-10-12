import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const MY_KEY = '14bbbaf17264a85a2229a09d03b6c904';

const fetchRequest = async page => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${MY_KEY}&page=${page}}`
  );
  console.log(response.data);
  return response.data;
};
const fetchMoviesOne = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${MY_KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data;
};

const fetchMovies = async (searchName, currentPage) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie/?api_key=${MY_KEY}&language=en-US&query=${searchName}&page=${currentPage}&include_adult=false`
  );
  console.log(response.data);
  return response.data;
};
const fetchActor = async id => {
  const response = await axios.get(`
  ${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=en-US`);
  console.log(response.data);
  return response.data;
};
const fetchReviews = async (id, currentPage) => {
  const response = await axios.get(`
  ${BASE_URL}/movie/${id}/reviews?api_key=${MY_KEY}&language=en-US&page=${currentPage}`);
  console.log(response.data);
  return response.data;
};
export { fetchRequest, fetchMovies, fetchMoviesOne, fetchActor, fetchReviews };
