import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.css';

const Link = (props) => <NavLink activeClassName="active" {...props} />;

class NavHeader extends Component {
  render() {
    return (
      <div className="nav_wrapper">
        <ul className="nav">
          <Link to="/form" className="nav_link"><li>Form</li></Link>
          <Link to="/review" className="nav_link"><li>Review</li></Link>
          <Link to="/final" className="nav_link"><li>Final</li></Link>
        </ul>
      </div>
    )
  }
}
export default NavHeader;
