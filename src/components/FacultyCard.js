import React from 'react';
import './FacultyCard.css';

function FacultyCard({ name, facultyCode, department, designation }) {
  return (
    <div className="faculty-card">
      <div className="faculty-avatar">
        {/* <img src="https://via.placeholder.com/150" alt="Avatar" /> */}
      </div>
      <div className="faculty-info">
        <h3>{name}</h3>
        <p>{facultyCode}</p>
        <p>{department}</p>
        <p>{designation}</p>
        <div className="faculty-buttons">
          <button>Assign task</button>
          <button>Details</button>
        </div>
      </div>
    </div>
  );
}

export default FacultyCard;
