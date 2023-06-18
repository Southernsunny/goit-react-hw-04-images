import { useState,useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from 'service/image-service';
import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import SorryAlert from 'components/SorryAlert';
import { Container, ImgLarge } from './App.styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [firstSearchCompleted, setFirstSearchCompleted] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
      if (!query) return;
      const getPhotos = async () => {
        try {
          setLoading(true);
          const { hits, totalHits } = await getImages(query, page);
          setImages(prevImages => [...prevImages, ...hits]);
          setFirstSearchCompleted(true);
          setError(hits.length === 0 ? 'No image found' : null);
          setReachedEnd(page >= Math.ceil(totalHits / 12));
        } catch (err) {
          console.log(err);
          setError('An error occurred while retrieving images');
        } finally {
          setLoading(false);
        }
      };
      getPhotos();
    }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
    setReachedEnd(false);
  };

  const handleBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {firstSearchCompleted && (
        <Container>
          {error && <SorryAlert images={images} />}
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {showModal && (
            <Modal onClose={toggleModal}>
              <ImgLarge src={largeImageURL} alt={tags} loading="lazy" />
            </Modal>
          )}
          {!reachedEnd && loading && <Loader />}
          {!reachedEnd && images.length > 0 && !loading && <Button loadMore={handleBtnClick} />}
        </Container>
      )}

      <ToastContainer autoClose={2500} theme="dark" />
    </>
  );
};

export default App;
