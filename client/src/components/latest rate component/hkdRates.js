import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Hkdchartdaily from "./hkdgraph_daily";
import Hkdchartmonthly from "./hkdgraph_monthly";
import Favourite from "../favourite component/favourite_button";

class hkdrate extends Component {
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
      bestrate: "",
      newAmount: "",
      newAmount1: "",
      showdaily: false,
      button_text: "Daily",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/currencies/HKD")
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

        var best =
          data_array[data_array.length - 1].rates[0].v /
          data_array[data_array.length - 1].rates[1].v;
        if (
          best >
            data_array[data_array.length - 2].rates[0].v /
              data_array[data_array.length - 2].rates[1].v &&
          data_array[data_array.length - 2].rates[0].v /
            data_array[data_array.length - 2].rates[1].v <
            data_array[data_array.length - 3].rates[0].v /
              data_array[data_array.length - 3].rates[1].v
        ) {
          best =
            data_array[data_array.length - 2].rates[0].v /
            data_array[data_array.length - 2].rates[1].v;
        } else if (
          best >
            data_array[data_array.length - 3].rates[0].v /
              data_array[data_array.length - 3].rates[1].v &&
          data_array[data_array.length - 2].rates[0].v /
            data_array[data_array.length - 2].rates[1].v >
            data_array[data_array.length - 3].rates[0].v /
              data_array[data_array.length - 3].rates[1].v
        ) {
          best =
            data_array[data_array.length - 3].rates[0].v /
            data_array[data_array.length - 3].rates[1].v;
        }

        this.setState({
          Date1: data_array[data_array.length - 1].Date,
          Bank1: data_array[data_array.length - 1].Bank,
          Timestamp1: data_array[data_array.length - 1].Timestamp,
          rates1:
            typeof data_array[data_array.length - 1].rates[0].v === "number"
              ? data_array[data_array.length - 1].rates[0].v /
                data_array[data_array.length - 1].rates[1].v
              : "Not Found",
          timeRecorded: data_array[data_array.length - 1].timeRecorded,
          Date2: data_array[data_array.length - 2].Date,
          Bank2: data_array[data_array.length - 2].Bank,
          Timestamp2: data_array[data_array.length - 2].Timestamp,
          rates2:
            typeof data_array[data_array.length - 2].rates[0].v === "number"
              ? data_array[data_array.length - 2].rates[0].v /
                data_array[data_array.length - 2].rates[1].v
              : "Not Found",
          Date3: data_array[data_array.length - 3].Date,
          Bank3: data_array[data_array.length - 3].Bank,
          Timestamp3: data_array[data_array.length - 3].Timestamp,
          rates3:
            typeof data_array[data_array.length - 3].rates[0].v === "number"
              ? data_array[data_array.length - 3].rates[0].v /
                data_array[data_array.length - 3].rates[1].v
              : "Not Found",
          bestrate: best,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  newAmount = (event) => {
    this.setState({ newAmount: event.target.value });
  };

  newAmount1 = (event) => {
    this.setState({ newAmount1: event.target.value });
  };

  show_chart = () => {
    if (this.state.showdaily === true) {
      this.setState({ showdaily: false, button_text: "Daily" });
    } else {
      this.setState({ showdaily: true, button_text: "Current Month" });
    }
  };

  render() {
    return (
      <div>
        <div
          className="ib"
          style={{
            width: "40%",
            verticalAlign: "top",
            display: "inline-block",
            height: "218px",
          }}
        >
          <table className="table table-bordered" style={{ marginTop: "20px" }}>
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
                <th scope="row">HKD</th>
                <td>{this.state.rates1}</td>
                <td>{this.state.rates2}</td>
                <td>{this.state.rates3}</td>
              </tr>
              <tr>
                <td colspan="4">
                  Last updated on {this.state.Date1} at{" "}
                  {this.state.timeRecorded} Singapore Time (GMT+8)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="ib"
          style={{
            width: "45%",
            verticalAlign: "top",
            display: "inline-block",
            marginTop: "20px",
            paddingLeft: "50px",
          }}
        >
          <p>
            Using the best rate of {this.state.bestrate}, the exchange rate is
            as follows:
          </p>
          <table className="table size=sm">
            <tr>
              <td>
                <form>
                  <input type="number" onChange={this.newAmount} min="0" /> HKD
                  ≈{" "}
                  {(this.state.bestrate * this.state.newAmount).toPrecision(6)}{" "}
                  SGD
                </form>
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                <form>
                  <input type="number" onChange={this.newAmount1} min="0" /> SGD
                  ≈{" "}
                  {(this.state.newAmount1 / this.state.bestrate).toPrecision(6)}{" "}
                  HKD
                </form>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p>
            Click{" "}
            <button onClick={this.show_chart}>{this.state.button_text}</button>{" "}
            to toggle between the daily chart and monthly chart!
          </p>
        </div>
        <div style={{ paddingRight: "20px", height: "80%" }}>
          {!this.state.showdaily && <Hkdchartdaily />}
        </div>
        <div style={{ paddingRight: "20px", height: "80%" }}>
          {this.state.showdaily && <Hkdchartmonthly />}
        </div>
        <div>
          <Favourite currency="HKD" />
        </div>
      </div>
    );
  }
}

export default hkdrate;