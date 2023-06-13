import React, { Component } from 'react';
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

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showModal: false,
    largeImageURL: '',
    loading: false,
    firstSearchCompleted: false,
    reachedEnd: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) return;
    try {
      this.setState({ loading: true });
      const { hits, totalHits } = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        firstSearchCompleted: true,
        error: hits.length === 0 ? 'No image found' : null,
        reachedEnd: page >= Math.ceil(totalHits / 12),
      }));
    } catch (err) {
      console.log(err);
      this.setState({ error: 'An error occurred while retrieving images' });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [], error: null, reachedEnd: false });
  };

  handleBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags, showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      images,
      showModal,
      largeImageURL,
      tags,
      loading,
      firstSearchCompleted,
      reachedEnd,
      error,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {firstSearchCompleted && (
          <Container>
            {error && <SorryAlert images={images} />}
            <ImageGallery images={images} onImageClick={this.handleImageClick} />
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <ImgLarge src={largeImageURL} alt={tags} loading="lazy" />
              </Modal>
            )}
            {!reachedEnd && loading && <Loader />}
            {!reachedEnd && images.length > 0 && !loading && (
              <Button loadMore={this.handleBtnClick} />
            )}
          </Container>
        )}

        <ToastContainer autoClose={2500} theme="dark" />
      </>
    );
  }
}

export default App;
