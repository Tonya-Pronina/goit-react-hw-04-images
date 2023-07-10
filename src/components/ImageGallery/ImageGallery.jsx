import React from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits, handleClick }) => {
  // return (
  //   <ul className={css.gallery}>
  //     {hits.map(hit => {
  //       return (
  //         <ImageGalleryItem
  //           key={id}
  //           webformatURL={webformatURL}
  //           hit={hit}
  //           onClick={() => {
  //             onClick(largeImageURL);
  //           }}
  //         ></ImageGalleryItem>
  //       );
  //     })}
  //     {hits.map(({ id, webformatURL, largeImageURL, hit }) => (
  //       <ImageGalleryItem
  //         key={id}
  //         webformatURL={webformatURL}
  //         hit={hit}
  //         onClick={() => {
  //           handleModal(largeImageURL);
  //         }}
  //       ></ImageGalleryItem>
  //     ))}
  //   </ul>
  // );

  return (
    <ul className={css.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, hit }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          hit={hit}
          onClick={() => {
            handleClick(largeImageURL);
          }}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  handleModal: PropTypes.func.isRequired,
};
