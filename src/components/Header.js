import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Header and Navigation Bar
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="nav navbar-menu">
        <a className="navbar-brand" href="/">WORLD EVENTS</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/event">CREATE AN EVENT</a>
        </div>
      </div>
      <div className="navbar-time">
        <FontAwesomeIcon icon="clock" color="#f57c00" size="sm" />&nbsp;&nbsp;
        <span id="clock" className="navbar-text"></span>
      </div>
    </nav>
  );
};
export default Header;
