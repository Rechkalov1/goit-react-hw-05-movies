import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title } from './MovieList.styled';
export default function MoviesList({ movies }) {
  const item = movies.results;
  const location = useLocation();
  return (
    <ul>
      {item.map(({ title, id }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <Title>{title}</Title>
          </Link>
        </li>
      ))}
    </ul>
  );
}
