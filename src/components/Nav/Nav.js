import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 
import ThemeToggle from '../ThemeSwitch/ThemeSwitch';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <a href="/">Dashboard</a>
      <a href="/books">Books</a>
      <a href="/selectedBooks">Book Collection</a>
    </div>
    <div className="navbar-theme-toggle">
      <ThemeToggle />
    </div>
  </nav>
  );
}

export default Navbar;
