import React from 'react';
import './SearchBar.css'; 

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>
        <img src="/assets/Search Icon.png" alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
