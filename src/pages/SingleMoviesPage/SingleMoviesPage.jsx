import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovies } from 'components/fetch';
import { Loader } from 'shared/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function SingleMoviesPage(searchMovies) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    if (!searchMovies) {
      return;
    }
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const result = await fetchMovies(page);
        const items = result.results;
        setMovies(prevItems => {
          return [...items];
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie(page);
  }, [page]);
  const loadMore = () => {
    setPage(state => state + 1);
  };
  const isPosts = Boolean(movies.length);
  return (
    <div>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {isPosts && <button onClick={loadMore}>loadMore</button>}
      {isPosts && <MoviesList items={movies} />}
      <Outlet />
    </div>
  );
}

// export default function ImageGallery({ searchImages }) {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);

//   const [urlLarge, setUlrLarge] = useState('');
//   const [title, setTitle] = useState('');
//   useEffect(() => {
//     setPage(1);
//     setImages([]);
//   }, [searchImages]);
//   useEffect(() => {
//     if (!searchImages) {
//       setImages([]);
//       return;
//     }
//     const fetchImages = async (currentName, currentPage) => {
//       try {
//         setLoading(true);
//         const result = await fetchRequest(currentName, currentPage);
//         const items = result.hits;
//         setImages(prevItems => {
//           return [...prevItems, ...items];
//         });
//         if (items.length === 0) {
//           return toast.warn(
//             "We didn't find your request, please try again later"
//           );
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages(searchImages, page);
//   }, [searchImages, page]);

//   const openModal = (urlLarge, title) => {
//     setModalOpen(true);
//     setUlrLarge(urlLarge);
//     setTitle(title);
//   };
//   const closeModal = () => {
//     setModalOpen(false);
//     setUlrLarge('');
//     setTitle('');
//   };

//   const loadMore = () => {
//     setPage(state => state + 1);
//   };
//   const isImages = Boolean(images.length);
//   return (
//     <div>
//       {error && <p>Try later.</p>}
//       <Div> {loading && <Loader />}</Div>

//       {isImages && <ImageList items={images} onClick={openModal} />}
//       {isImages && <LoadMode onClick={loadMore}>loadMore</LoadMode>}
//       {modalOpen && (
//         <Modal
//           onClose={closeModal}
//           largeImageURL={urlLarge}
//           imageTitle={title}
//         />
//       )}
//     </div>
//   );
