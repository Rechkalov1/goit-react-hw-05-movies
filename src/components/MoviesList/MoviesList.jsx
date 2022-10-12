import React from 'react';
import { Link } from 'react-router-dom';
export default function MoviesList({ items }) {
  const elements = items.map(({ id, title, name }) => {
    return (
      <li key={id}>
        <Link to={`/movies/${id}`}>
          <p>{title ? title : name}</p>
        </Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
