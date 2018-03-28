import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.css';

const Link = (props) => <NavLink activeClassName="active" {...props} />;

class NavHeader extends Component {
  render() {
    return (
      <div className="nav-indicator-_wrapper">
        <ul>
          <Link to="/form"><li>Form</li></Link>
          <Link to="/review"><li>Review</li></Link>
          <Link to="/final"><li>Final</li></Link>
        </ul>
      </div>
    )
  }
}
export default NavHeader;
