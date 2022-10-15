import img from '../../../no_img.jpg';
import { CastUl, Img } from './CastMoviesList.styled';
const image_URL = 'https://image.tmdb.org/t/p/w500';
export default function CastMoviesList({ cast }) {
  const castMovie = cast.cast;
  return (
    <div>
      <CastUl>
        {castMovie.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            {profile_path ? (
              <Img src={`${image_URL}${profile_path}`} alt={name} />
            ) : (
              <Img src={img} alt="name" />
            )}

            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </CastUl>
    </div>
  );
}
