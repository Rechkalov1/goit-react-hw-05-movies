import Home from '../pages/Home/Home';

import MoviesDetails from '../pages/MoviesDetails/MoviesDetails';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SingleMoviesPage from '../pages/SingleMoviesPage/SingleMoviesPage';

export function UserRoute() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<MoviesDetails />} />
        <Route path="/Movies/:id" element={<SingleMoviesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
