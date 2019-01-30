import React, { Component } from 'react';
import Slideshow from './Slideshow/Slideshow.js';
import NavBar from '../Navbar/Navbar.js';
import Schedule from './Schedule/Schedule.js';
import Sponsors from './Sponsors/Sponsors.js';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Slideshow />
        <div className="content">
          <Schedule />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Home;
