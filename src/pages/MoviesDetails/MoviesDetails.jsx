import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesOne } from '../../components/fetch';
import { Loader } from 'shared/Loader/Loader';
import MovieComponents from './Moviecomponents/MovieComponents';
export function MoviesDetails() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      try {
        const data = await fetchMoviesOne({ id });
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);
  const goBack = () => navigate(from);
  return (
    <div>
      {movies && (
        <button type="button" onClick={goBack}>
          Go Back
        </button>
      )}
      {loading && <Loader />}
      {movies && <MovieComponents items={movies} />}
      {error && <p>Please try again.</p>}
      <Outlet />
    </div>
  );
}
