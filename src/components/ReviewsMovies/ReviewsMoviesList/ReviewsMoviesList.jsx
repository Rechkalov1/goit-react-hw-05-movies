export const ReviewsMoviesList = ({ review }) => {
  const reviewMovie = review.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p>Author:{author}</p>
        <p>{content}</p>
      </li>
    );
  });
  return (
    <>
      <ul>{reviewMovie}</ul>
    </>
  );
};
