import React, { useState } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [queryInput, setQueryInput] = useState('');

  const handleChange = e => {
    setQueryInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(queryInput.trim());
  };

  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchFormInput}
          value={queryInput}
          autoComplete="off"
          autoFocus
          placeholder="Search..."
          onChange={handleChange}
        />

        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormLabel}>Search</span>
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
