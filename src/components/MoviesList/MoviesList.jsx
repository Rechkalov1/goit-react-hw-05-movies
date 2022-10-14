import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function MoviesList({ movies }) {
  const item = movies.results;
  const location = useLocation();
  return (
    <ul>
      {item.map(({ title, id }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
