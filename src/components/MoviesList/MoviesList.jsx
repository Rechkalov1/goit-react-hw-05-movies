import React from 'react';
import img from '../../no_img.jpg';
import { Link, useLocation } from 'react-router-dom';
import {
  Title,
  ThumbPoster,
  PosterList,
  PosterMovies,
} from './MovieList.styled';
export default function MoviesList({ movies }) {
  const item = movies.results;
  const location = useLocation();
  return (
    <div>
      <ThumbPoster>
        {item.map(({ title, id, poster_path }) => (
          <PosterList key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <PosterMovies
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : img
                }
                alt={title}
              />
              <Title>{title}</Title>
            </Link>
          </PosterList>
        ))}
      </ThumbPoster>
    </div>
  );
}
