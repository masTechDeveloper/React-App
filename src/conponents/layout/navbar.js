import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <h3>Company Name</h3>
      </Link>
      <ul>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
