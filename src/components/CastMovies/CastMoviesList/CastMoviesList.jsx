const image_URL = 'https://image.tmdb.org/t/p/w500';

export default function CastMoviesList({ cast }) {
  const castMovie = cast.data.cast;
  return (
    <div>
      <ul>
        {castMovie.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            {<img src={`${image_URL}${profile_path}`} alt={name} />}

            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
