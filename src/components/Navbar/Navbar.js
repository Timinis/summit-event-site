import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <a href="https://www.swfinstitute.org/landing/index.html">
          Become a Member
        </a>
      </nav>
    );
  }
}

export default NavBar;
