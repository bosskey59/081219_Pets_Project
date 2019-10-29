import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">Pet Shop</NavLink>
          <ul className="right">
            <li><NavLink to="/pets/new">Create Pet</NavLink></li>
            <li><NavLink to="/pets">Pet List</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
