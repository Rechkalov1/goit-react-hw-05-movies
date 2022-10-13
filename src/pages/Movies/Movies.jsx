import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesOne } from '../../components/fetch';
import { Loader } from 'shared/Loader/Loader';
import MovieComponents from '../MoviesDetails/Moviecomponents/MovieComponents';
import Search from 'components/Search/Search';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const OnChangeQuery = query => {
    setSearchParams({ query: query });
    setMovies({});
  };

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      setLoading(true);
      try {
        const data = await fetchMoviesOne({ query });
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
      <Search onSubmit={OnChangeQuery} />
      {loading && <Loader />}
      {movies && <MovieComponents items={movies} />}
      {error && <p>Please try again.</p>}
    </div>
  );
}
