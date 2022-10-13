import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActor } from '';
import { CastMoviesList } from './CastMoviesList/CastMoviesList';
import { Loader } from 'shared/Loader/Loader';
export default function CastMovies() {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      try {
        const data = await fetchActor({ id });
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [id]);
  return (
    <>
      {cast && <CastMoviesList cast={cast} />}
      {loading && <Loader />}
      {error && <p>Please try again.</p>}
    </>
  );
}
