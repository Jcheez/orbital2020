import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class aed_table extends Component {
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
      .get("/currencies/AED")
      .then((response) => {
        var today = new Date();

        var Day = today.getDate();
        var Day_str = Day.toString();
        var Month = today.getMonth() + 1;
        var Month_str = Month.toString();
        var Year = today.getFullYear();

        if (Day_str.length === 1) {
          Day_str = "0" + Day_str;
        }

        if (Month_str.length === 1) {
          Month_str = "0" + Month_str;
        }

        var today_date = Day_str + "/" + Month_str + "/" + Year;
        var previous_date = Day_str - 1 + "/" + Month_str + "/" + Year;

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
          Date1: data_array[data_array.length - 1].Date,
          Bank1: data_array[data_array.length - 1].Bank,
          Timestamp1: data_array[data_array.length - 1].Timestamp,
          rates1:
            typeof data_array[data_array.length - 1].rates[0].v === "number"
              ? (
                  data_array[data_array.length - 1].rates[0].v /
                  data_array[data_array.length - 1].rates[1].v
                ).toPrecision(5)
              : "Not Found",
          timeRecorded: data_array[data_array.length - 1].timeRecorded,
          Date2: data_array[data_array.length - 2].Date,
          Bank2: data_array[data_array.length - 2].Bank,
          Timestamp2: data_array[data_array.length - 2].Timestamp,
          rates2:
            typeof data_array[data_array.length - 2].rates[0].v === "number"
              ? (
                  data_array[data_array.length - 2].rates[0].v /
                  data_array[data_array.length - 2].rates[1].v
                ).toPrecision(5)
              : "Not Found",
          Date3: data_array[data_array.length - 3].Date,
          Bank3: data_array[data_array.length - 3].Bank,
          Timestamp3: data_array[data_array.length - 3].Timestamp,
          rates3:
            typeof data_array[data_array.length - 3].rates[0].v === "number"
              ? (
                  data_array[data_array.length - 3].rates[0].v /
                  data_array[data_array.length - 3].rates[1].v
                ).toPrecision(5)
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
        <div
          className="ib"
          style={{
            width: "40%",
            verticalAlign: "top",
            display: "inline-block",
          }}
        >
          <table className="table table-bordered" style={{ marginTop: "5px" }}>
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
                <th scope="row">AED</th>
                <td>{this.state.rates1}</td>
                <td>{this.state.rates2}</td>
                <td>{this.state.rates3}</td>
              </tr>
              {/* <tr>
                <td colspan="4">
                  Last updated on {this.state.Date1} at{" "}
                  {this.state.timeRecorded} Singapore Time (GMT+8)
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default aed_table;
