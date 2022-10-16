import { useEffect } from 'react';
import { useState } from 'react';

import { fetchTrending } from 'components/fetch';
import { Loader } from 'shared/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Navbar from 'components/Navbar/Navbar';

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
      <Navbar />
      {movies.length !== 0 && (
        <div>
          <h1>Trending Today</h1>
          <MoviesList movies={movies} />
        </div>
      )}

      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
    </>
  );
}
