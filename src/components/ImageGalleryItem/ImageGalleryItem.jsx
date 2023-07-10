import React from 'react';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ onClick, webformatURL, largeImageURL }) {
  // const { largeImageURL, webformatURL } = hit;

  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={webformatURL}
        alt=""
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
