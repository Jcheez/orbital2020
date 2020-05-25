import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "../login page component/login";

class logout extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Login} />
        </Router>
        <div>
          <Link to="/">
            Logout
            <meta http-equiv="refresh" content="1"></meta>
          </Link>
        </div>
      </div>
    );
  }
}

export default logout;
