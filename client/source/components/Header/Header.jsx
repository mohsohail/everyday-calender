import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = props => {
  return (
    <nav className="nav-styles">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
