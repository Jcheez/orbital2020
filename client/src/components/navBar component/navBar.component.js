import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div>
          <Link to="/home" className="navbar-brand">
            FERMS
            <span role="img" aria-label="house">
              🏠
            </span>
          </Link>
        </div>

        <div className="navbar-nav mr-auto">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/home/tutorial" className="nav-link">
                Tutorial
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/home/latestRates" className="nav-link">
                Latest Rates
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/home/logout" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
