import { NavLink, useLocation } from 'react-router-dom';

export default function PatchToInfoFilms() {
  const location = useLocation();
  const from = location.state?.from ?? '/movies';
  return (
    <div>
      <h2>Information</h2>
      <ul>
        <li>
          <NavLink state={{ from }} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink state={{ from }} to="reviews">
            Rewiews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
