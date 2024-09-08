import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className="filter">
      <label>Filter:</label>
      <select>
        <option>Experience</option>
      </select>
      <select>
        <option>Domain</option>
      </select>
    </div>
  );
}

export default Filter;
