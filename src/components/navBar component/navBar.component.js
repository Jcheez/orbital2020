import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div>
          <Link to="/" className="navbar-brand">
            FERMS
            <span role="img" aria-label="house">
              🏠
            </span>
          </Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/tutorial" className="nav-link">
                Tutorial
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/favourites" className="nav-link">
                Favourites
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/logout" className="nav-link">
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
