import React, { Component } from "react";
import { Link } from "react-router-dom";

class login extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <button>
            <Link to="/home">Click for home page</Link>
          </button>
        </div>

        <div>
          <Link to="/signup">Click for signup page</Link>
        </div>
      </div>
    );
  }
}

export default login;
