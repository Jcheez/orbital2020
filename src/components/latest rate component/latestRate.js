import React, { Component } from "react";
import Dropdown from "./dropdown bar/dropdown";

class latestRate extends Component {
  state = {};
  render() {
    return (
      <div>
        <Dropdown />
        <br />
        <p>
          Disclaimer: Please Double confirm the rates with your bank before
          making any transactions. We will not be responsible for any
          discrepancies in rates.
        </p>
      </div>
    );
  }
}

export default latestRate;
