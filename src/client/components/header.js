import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Politics from '../pages/politics'
import Sports from '../pages/sports'
import Video from '../pages/video'

class Header extends Component {

  render() {
    return (
      <header className="newsfeed-header">
        <h1 className="newsfeed-title"><Link to="/">Newsfeed</Link></h1>
        <nav>
          <ul className="menu">
            <li><Link to="/politics">Politics</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/video">Tagesschau</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;