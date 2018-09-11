import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header className="newsfeed-header">
        <h1 className="newsfeed-title"><Link to="/">Newsfeed</Link></h1>
        <nav>
          <ul className="menu">
            <li><NavLink to="/politics">Politics</NavLink></li>
            <li><NavLink to="/sports">Sports</NavLink></li>
            <li><NavLink to="/video">Tagesschau</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;