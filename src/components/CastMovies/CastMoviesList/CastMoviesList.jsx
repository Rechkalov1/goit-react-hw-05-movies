import noImg from '../../../no_img.jpg';
const image_URL = 'https://image.tmdb.org/t/p/w500';
export default function CastMoviesList({ cast }) {
  const castMovie = cast.data.cast;
  return (
    <div>
      <ul>
        {castMovie.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            {profile_path ? (
              <img src={`${image_URL}${profile_path}`} alt={name} />
            ) : (
              <img src={noImg} alt={name} />
            )}

            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
