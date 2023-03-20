import React from 'react';
import './Search.scss';

const Search = ({ setSearch }) => {
  return (
    <form className='search-form' action="">
        <div className='search-form-icon'></div>
        <input 
            onChange={e => {
                setSearch(e.target.value);
        }} 
            placeholder='Filter by name...' 
            type="text" 
            className='search-form-input' />
    </form>
  );
};

export default Search;
