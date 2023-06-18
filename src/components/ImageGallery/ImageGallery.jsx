import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <Gallery className="gallery">
        {images.map(item => (
          <ImageGalleryItem key={item.id} item={item} onImageClick={onImageClick} />
        ))}
      </Gallery>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
