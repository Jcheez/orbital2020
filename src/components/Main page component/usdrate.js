import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class usdrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date: "",
      Bank: "",
      Timestamp: "",
      rates: new Object(),
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/currencies/USD")
      .then((response) => {
        console.log(response.data[1]);
        this.setState({
          Date: response.data[1].Date,
          Bank: response.data[1].Bank,
          Timestamp: response.data[1].Timestamp,
          rates: new Object(response.data[1].rates),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h4>USD Rates on {this.state.Date} is xxx</h4>
      </div>
    );
  }
}

export default usdrate;
