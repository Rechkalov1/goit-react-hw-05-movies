import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function MoviesList({ items }) {
  const item = items.results;
  const location = useLocation();
  return (
    <ul>
      {item.map(({ title, id }) => (
        <li key={id}>
          <Link state={{ frrom: location }} to={`/movies/${id}`}>
            <h2>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
