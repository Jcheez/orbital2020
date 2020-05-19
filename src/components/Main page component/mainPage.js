import React, { Component } from "react";

class mainpage extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.drawGraph}>Show USD graph</button>
      </div>
    );
  }

  drawGraph() {
    console.log("printing graph");
  }
}

export default mainpage;
