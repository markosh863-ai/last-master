import React from 'react';
import './Search.css';

const Search = ({ value, onChange }) => {
  return (
    <div className="shop-search">
      <input 
        type="text" 
        className="ui-input" 
        placeholder="Search products..." 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;