import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>OOPS the page you were looking for is </h1>
      <h2>Maybe those links can help you </h2>
      <ul>
        <li>
          <Link to={'/movies'}> Movies</Link>
        </li>
      </ul>
    </div>
  );
}
