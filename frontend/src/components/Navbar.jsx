import React from 'react';
import './Navbar.css';

const Navbar = ({ setView }) => {
  return (
    <nav className="navbar">
      <h2>🎯 Job Tracker</h2>
      <div className="nav-buttons">
        <button onClick={() => setView('add')}>Add Job</button>
        <button onClick={() => setView('list')}>View Applications</button>
      </div>
    </nav>
  );
};

export default Navbar;
