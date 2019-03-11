import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  handleClick() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
    document.body.style.overflow = this.state.menuIsOpen ? "auto" : "hidden";
  }

  renderMenu() {
    return (
      <ul className="menu">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/politics">Politics</NavLink></li>
        <li><NavLink to="/germany">Germany</NavLink></li>
        <li><NavLink to="/sports">Sports</NavLink></li>
        <li><NavLink to="/architecture">Architecture</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
    )
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
          {this.renderMenu()}
        </nav>
        <nav className="mobile" onClick={this.handleClick}>
          {this.renderMenu()}
        </nav>
      </header>
    );
  }
}

export default Header;