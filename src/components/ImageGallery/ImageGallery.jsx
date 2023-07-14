import React from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits, handleClick }) => {
  return (
    <ul className={css.gallery}>
      {hits.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={() => {
            handleClick(largeImageURL);
          }}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      hit: PropTypes.string,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
