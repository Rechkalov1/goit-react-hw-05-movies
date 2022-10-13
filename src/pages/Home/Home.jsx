import { useEffect } from 'react';
import { useState } from 'react';

import { fetchTrending } from 'components/fetch';
import { Loader } from 'shared/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const data = await fetchTrending();
        setMovies(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      {movies.length !== 0 && (
        <div>
          <h2>Trending movies</h2>
          <MoviesList items={movies} />
        </div>
      )}

      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
    </>
  );
}
