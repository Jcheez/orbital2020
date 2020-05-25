import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class myrrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date1: "",
      Bank1: "",
      Timestamp1: "",
      rates1: "",
      timeRecorded: "",
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
      .get("http://localhost:5000/currencies/MYR")
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
          rates1:
            typeof data_array[0].rates[0].v === "number"
              ? (
                  data_array[0].rates[0].v / data_array[0].rates[1].v
                ).toPrecision(4)
              : "Not Found",
          timeRecorded: data_array[0].timeRecorded,
          Date2: data_array[1].Date,
          Bank2: data_array[1].Bank,
          Timestamp2: data_array[1].Timestamp,
          rates2:
            typeof data_array[1].rates[0].v === "number"
              ? (
                  data_array[1].rates[0].v / data_array[1].rates[1].v
                ).toPrecision(4)
              : "Not Found",
          Date3: data_array[2].Date,
          Bank3: data_array[2].Bank,
          Timestamp3: data_array[2].Timestamp,
          rates3:
            typeof data_array[2].rates[0].v === "number"
              ? (
                  data_array[2].rates[0].v / data_array[2].rates[1].v
                ).toPrecision(4)
              : "Not Found",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <p> </p>
          Last updated on {this.state.Date1} at {this.state.timeRecorded}
          <p></p>
        </div>
        <div>
          <table className="table table-bordered">
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
                <th scope="row">MYR</th>
                <td>{this.state.rates1}</td>
                <td>{this.state.rates2}</td>
                <td>{this.state.rates3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default myrrate;
