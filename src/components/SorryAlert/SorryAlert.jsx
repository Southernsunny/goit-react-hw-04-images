import React from 'react';
import PropTypes from 'prop-types';
import { TfiFaceSad } from 'react-icons/tfi';
import { SorryImg, Text } from './SorryAlert.styled';

const SorryAlert = ({ images }) => {
  return (
    <>
      {images && !images.length && (
        <div>
          <SorryImg src="https://i.pinimg.com/originals/20/84/02/2084021a6145d635737c1da3752caa9b.gif" />
          <Text>
            Sorry, these photos were not found
            <TfiFaceSad />
          </Text>
        </div>
      )}
    </>
  );
};

SorryAlert.propTypes = {
  images: PropTypes.array.isRequired,
};

export default SorryAlert;
