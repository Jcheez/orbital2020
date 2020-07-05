import React, { Component } from "react";

import Logout from "../components/logout component/logout";
import Nav from "../components/navBar component/navBar.component";

class logout2 extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Logout />
      </div>
    );
  }
}

export default logout2;
