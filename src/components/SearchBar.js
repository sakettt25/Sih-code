import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Enter name or faculty code" />
      <button className="search-btn">Search
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
