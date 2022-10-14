import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../components/fetch';
import { Loader } from 'shared/Loader/Loader';

import Search from 'components/Search/Search';
import Navbar from 'components/Navbar/Navbar';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const OnChangeQuery = query => {
    setSearchParams({ query: query });
    setMovies([]);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      setLoading(true);
      try {
        const data = await fetchMovies({ query });
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [query]);

  return (
    <div>
      <Navbar />
      <Search onSubmit={OnChangeQuery} />
      {loading && <Loader />}
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {error && <p>Please try again.</p>}
    </div>
  );
}
