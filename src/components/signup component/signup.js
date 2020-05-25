import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div>
        <button>
          <Link to="/">Click for login page</Link>
        </button>
      </div>
    );
  }
}

export default Signup;
