import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.css';

class Inputs extends Component {
  render() {
    return (
      <div className="nav-indicator-_wrapper">
        <ul>
          <NavLink to="/form" activeClassName="active" onClick={e => e.preventDefault()}><li>Form</li></NavLink>
          <NavLink to="/review" activeClassName="active" onClick={e => e.preventDefault()}><li>Review</li></NavLink>
          <NavLink to="/final" activeClassName="active" onClick={e => e.preventDefault()}><li>Final</li></NavLink>
        </ul>
      </div>
    )
  }
}
export default Inputs;