import HomePage from 'pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<HomePage />} />
        <Route path="my-books/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
