import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink exact='true' to="/" className="navbar-link" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link" activeclassname="active">
            All Resumes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

