import React from 'react';
import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

const Button = ({ loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      <span>Load more</span>
    </LoadMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
