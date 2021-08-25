import React from 'react';
import {Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="flex">
      <h1>BookStore</h1>
      <ul className="nav-bar flex">
        <li><Link to='/'>Books</Link></li>
        <li><Link to='/Categories'>Categories</Link></li>
      </ul>
    </header>
  );
}

export default Header;