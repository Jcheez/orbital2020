import React, { Component } from "react";
import Dropdown from "./dropdown bar/dropdown";

class latestRate extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Dropdown />
        <br />
        <p>
          <strong>Disclaimer:</strong> Please confirm the rates with your bank
          before making any transactions. We are not responsible for any
          discrepancies in rates.
        </p>
      </div>
    );
  }
}

export default latestRate;
