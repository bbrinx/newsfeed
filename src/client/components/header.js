import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
    document.body.style.overflow = this.state.menuIsOpen ? "auto" : "hidden";
  }

  render() {
    return (
      <header className={`newsfeed-header ${this.state.menuIsOpen ? 'open' : ''}`}>
        <div className="header-wrapper">
          <h1 className="newsfeed-title"><Link to="/">Newsfeed</Link></h1>
          <div className="hamburger" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className="desktop">
          <ul className="menu">
            <li><NavLink to="/politics">Politics</NavLink></li>
            <li><NavLink to="/germany">Germany</NavLink></li>
            <li><NavLink to="/sports">Sports</NavLink></li>
            <li><NavLink to="/architecture">Architecture</NavLink></li>
            <li><NavLink to="/food">Food</NavLink></li>
          </ul>
        </nav>
        <nav className="mobile" onClick={this.handleClick}>
          <ul className="menu">
            <li><NavLink to="/politics">Politics</NavLink></li>
            <li><NavLink to="/germany">Germany</NavLink></li>
            <li><NavLink to="/sports">Sports</NavLink></li>
            <li><NavLink to="/architecture">Architecture</NavLink></li>
            <li><NavLink to="/food">Food</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;