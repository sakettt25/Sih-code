import React from 'react';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import FacultyCard from './components/FacultyCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <SearchFilter />
      <div className="faculty-list">
        <FacultyCard name="John Doe" facultyCode="FC123" department="Computer Science" designation="Professor" />
        <FacultyCard name="Jane Smith" facultyCode="FC124" department="Mathematics" designation="Associate Professor" />
        <FacultyCard name="Alice Johnson" facultyCode="FC125" department="Physics" designation="Assistant Professor" />
        <FacultyCard name="Bob Brown" facultyCode="FC126" department="Chemistry" designation="Lecturer" />
      </div>
    </div>
  );
}

export default App;
