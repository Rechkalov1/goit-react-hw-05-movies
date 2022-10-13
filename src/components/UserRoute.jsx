import Home from '../pages/Home/Home';

import Movies from '../pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import CastMovies from './CastMovies/CastMovies';

export function UserRoute() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<CastMovies />} />
          <Route path="reviews" element={<div>Привет</div>} />
        </Route>
        <Route path="/Movies" element={<Movies />} />
        <Route path=":id" element={<MoviesDetails />}>
          <Route path="cast" element={<CastMovies />} />
          <Route path="reviews" element={<div>Привет</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
