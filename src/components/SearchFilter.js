import React from 'react';
import './SearchFilter.css';

function SearchFilter() {
  return (
    <div className="search-filter">
      <div className="search-bar">
        <input type="text" placeholder="Enter name or faculty code" />
        <button className="search-btn">Search
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="filter">
        <label>Filter:</label>
        <select>
          <option>Experience</option>
        </select>
        <select>
          <option>Domain</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
