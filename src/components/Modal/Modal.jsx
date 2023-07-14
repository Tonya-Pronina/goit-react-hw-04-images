// import React from 'react';
// import css from 'components/Modal/Modal.module.css';
// import PropTypes from 'prop-types';
// import { useEffect } from 'react';

// export const Modal = ({ onModalClose, largeImageURL }) => {
//   const handleKeyDown = e => {
//     if (e.keyCode === 27 || e.currentTarget === e.target) {
//       onModalClose();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'auto';
//     };
//   }, [onModalClose, handleKeyDown]);

//   return (
//     <div className={css.backdrop} onClick={handleKeyDown}>
//       <div className={css.modal}>
//         <img src={largeImageURL} alt="" />
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   onModalClose: PropTypes.func.isRequired,
// };

import React, { useEffect, useCallback } from 'react';
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ onModalClose, largeImageURL }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 27 || e.currentTarget === e.target) {
        onModalClose();
      }
    },
    [onModalClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  return (
    <div className={css.backdrop} onClick={handleKeyDown}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
