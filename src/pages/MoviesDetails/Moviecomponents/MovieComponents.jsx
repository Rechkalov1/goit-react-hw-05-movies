import React from 'react';

export default function MovieComponents({ items }) {
  const image_URL = 'https://image.tmdb.org/t/p/w300';
  const { title, poster_path, vote_average, overview, genres, release_date } =
    items.data;
  const score = () => {
    return Math.round(Number(vote_average) * 10);
  };
  return (
    <div>
      <img src={`${image_URL}${poster_path}`} alt={title} />
      <h2>
        {title} ({release_date.slice(0.4)})
      </h2>
      <p>User score:{score()}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <div>
        {genres.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ))}
      </div>
    </div>
  );
}
