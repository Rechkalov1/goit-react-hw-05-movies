import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/fetch';

import { Loader } from 'shared/Loader/Loader';
import CastMoviesList from './CastMoviesList/CastMoviesList';

export default function CastMovies() {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchCastActor = async () => {
      if (!id) {
        return;
      }
      setLoading(true);
      try {
        const data = await fetchCast({ id });
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCastActor();
  }, [id]);
  return (
    <>
      {cast && <CastMoviesList cast={cast} />}
      {loading && <Loader />}
      {error && <p>Please try again.</p>}
    </>
  );
}
