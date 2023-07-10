import React, { useState, useEffect, useRef } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { FetchImages } from './FetchImages';

export const App = () => {
  const [query, setQuery] = useState(null);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const hitsLengthRef = useRef(hits.length);
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  // useEffect(() => {
  //   const handleFetchImg = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await FetchImages(query, page, perPage);

  //       if (data.hits.length === 0) {
  //         setError({
  //           status: true,
  //           message: `There are no images matching ${query}, try again.`,
  //         });
  //         return;
  //       }
  //       const totalPages = Math.ceil(data.totalHits / perPage);

  //       setHits(prevHits => [...prevHits, data.hits]);
  //       setTotalPages(totalPages);
  //     } catch (error) {
  //       setError({
  //         status: true,
  //         message: 'Something went wrong! Please try again later!',
  //       });
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (query && page > 0) {
  //     handleFetchImg();
  //   }
  // }, [query, page, perPage]);
  useEffect(() => {
    const newSearchQuery = setQuery(prevSearchQuery => prevSearchQuery);
    const newPage = setPage(prevPage => prevPage);
    if (query !== '' && (query !== newSearchQuery || newPage !== page)) {
      setLoading(true);
      FetchImages(query, page)
        .then(({ hits: newHits, totalHits }) => {
          if (query.trim() === '' || totalHits === 0) {
            setError({
              status: true,
              message: `There are no images matching ${query}, try again.`,
            });
            return;
          }
          setHits(prevHits => [...prevHits, ...newHits]);
          setTotalPages(totalPages);
        })
        .catch(error => console.error(error.response))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query, page]);

  useEffect(() => {
    hitsLengthRef.current = hits.length;
  }, [hits]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = newQuery => {
    if (newQuery !== query) {
      setHits([]);
      setQuery(newQuery);
      setPage(1);
      setError({
        status: false,
        message: '',
      });
    }
  };

  const handleModal = (currentLargeImageURL = '') => {
    setCurrentLargeImageURL(currentLargeImageURL);
  };

  const isBtnVisible = hits.length > 0 && page < totalPages && !loading;

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {error.status && !loading && error.message}
      {hits.length > 0 && (
        <ImageGallery hits={hits} handleClick={handleModal} />
      )}
      {loading && <Loader />}
      {isBtnVisible && <Button onClick={handleLoadMore} />}
      {currentLargeImageURL && (
        <Modal
          largeImageURL={currentLargeImageURL}
          onModalClose={handleModal}
        />
      )}
    </div>
  );
};
