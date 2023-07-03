import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="App-header">
      <NavLink className="App-link" to="">
        Main page
      </NavLink>
      <NavLink className="App-link" to="/about">
        About us
      </NavLink>
      <NavLink className="App-link" to="/form">
        Form
      </NavLink>
    </header>
  );
}

export default Header;
