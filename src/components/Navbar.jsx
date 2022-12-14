import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <ul className="navlinks" data-testid="navlinks">
        <li className="navItem">
          <NavLink
            to="/Crypto-Analysis"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Coins
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>

);

export default Navbar;
