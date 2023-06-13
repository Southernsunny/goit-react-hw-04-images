import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onImageClick }) => {
  const { webformatURL, tags, largeImageURL } = item;

  const handleImageClick = () => {
    onImageClick(largeImageURL, tags);
  };

  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt={tags} onClick={handleImageClick} loading="lazy" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
