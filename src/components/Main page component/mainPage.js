import React, { Component } from "react";
import Usdrate from "../Main page component/usdrate";

class mainpage extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.drawGraph}>Show USD graph</button>
        <Usdrate />
      </div>
    );
  }

  drawGraph() {
    console.log("printing graph");
  }
}

export default mainpage;
