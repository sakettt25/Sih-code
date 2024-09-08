import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Admin Dashboard</h1>
      <button className="logout-btn">Log out</button>
    </header>
  );
}

export default Header;
