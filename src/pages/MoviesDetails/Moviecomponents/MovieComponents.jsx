import img from '../../../no_img.jpg';
const MovieComponents = ({ movies }) => {
  const image_URL = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, vote_average, overview, genres, release_date } =
    movies;
  const score = () => {
    return Math.round(Number(vote_average) * 10);
  };
  return (
    <div>
      {poster_path ? (
        <img src={`${image_URL}${poster_path}`} alt={DataTransferItemList} />
      ) : (
        <img src={img} alt="no img" />
      )}

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
};
export default MovieComponents;
