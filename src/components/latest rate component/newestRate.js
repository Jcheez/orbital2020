import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class usdrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date1: "",
      Bank1: "",
      Timestamp1: "",
      rates1: "",
      Date2: "",
      Bank2: "",
      Timestamp2: "",
      rates2: "",
      Date3: "",
      Bank3: "",
      Timestamp3: "",
      rates3: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/currencies/USD")
      .then((response) => {
        var today = new Date();

        var Day = today.getDate();
        var Month = today.getMonth() + 1;
        var Month_str = Month.toString();
        var Year = today.getFullYear();

        if (Month_str.length === 1) {
          Month_str = "0" + Month_str;
        }

        var today_date = Day + "/" + Month_str + "/" + Year;
        var previous_date = Day - 1 + "/" + Month_str + "/" + Year;

        var data_array = [];
        for (let i = 0, len = response.data.length; i < len; i++) {
          let curr_date = response.data[i].Date;
          if (curr_date === today_date) {
            data_array.push(response.data[i]);
          }
        }

        if (data_array.length === 0) {
          for (let i = 0, len = response.data.length; i < len; i++) {
            let curr_date = response.data[i].Date;
            if (curr_date === previous_date) {
              data_array.push(response.data[i]);
            }
          }
        }

        this.setState({
          Date1: data_array[0].Date,
          Bank1: data_array[0].Bank,
          Timestamp1: data_array[0].Timestamp,
          rates1: data_array[0].rates[0].v,
          Date2: data_array[1].Date,
          Bank2: data_array[1].Bank,
          Timestamp2: data_array[1].Timestamp,
          rates2: data_array[1].rates[0].v,
          Date3: data_array[2].Date,
          Bank3: data_array[2].Bank,
          Timestamp3: data_array[2].Timestamp,
          rates3: data_array[2].rates[0].v,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Currency</th>
              <th scope="col">{this.state.Bank1}</th>
              <th scope="col">{this.state.Bank2}</th>
              <th scope="col">{this.state.Bank3}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">USD</th>
              <td>{this.state.rates1}</td>
              <td>{this.state.rates2}</td>
              <td>{this.state.rates3}</td>
            </tr>
          </tbody>
        </table>
        <h4>
          {this.state.Bank1}: On {this.state.Date1}, One USD can be exchanged
          for {this.state.rates1} Singapore Dollars
        </h4>
        <h4>
          {this.state.Bank2}: On {this.state.Date2}, One USD can be exchanged
          for {this.state.rates2} Singapore Dollars
        </h4>
        <h4>
          {this.state.Bank3}: On {this.state.Date3}, One USD can be exchanged
          for {this.state.rates3} Singapore Dollars
        </h4>
      </div>
    );
  }
}

export default usdrate;
