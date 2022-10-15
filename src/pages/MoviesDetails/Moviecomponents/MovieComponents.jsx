import img from '../../../no_img.jpg';
import { Thumb, ThumbText, ImgPoster } from './MovieComponents.styled';
const MovieComponents = ({ movies }) => {
  const image_URL = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, vote_average, overview, genres, release_date } =
    movies;
  const year = new Date(release_date);
  const score = () => {
    return Math.round(Number(vote_average) * 10);
  };
  return (
    <Thumb>
      <div>
        {poster_path ? (
          <ImgPoster
            src={`${image_URL}${poster_path}`}
            alt={DataTransferItemList}
          />
        ) : (
          <ImgPoster src={img} alt="no img" />
        )}
      </div>
      <ThumbText>
        <h2>
          {title} ({year.getFullYear()})
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
      </ThumbText>
    </Thumb>
  );
};
export default MovieComponents;
