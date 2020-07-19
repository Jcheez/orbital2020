import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";

class audchart_m extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    axios
      .get("/currencies/AUD")
      .then((response) => {
        var today = new Date();

        var Month = today.getMonth() + 1;
        var Month_str = Month.toString();

        if (Month_str.length === 1) {
          Month_str = "0" + Month_str;
        }

        var today_dbs = [];
        var today_uob = [];
        var today_ocbc = [];

        for (let i = 0, len = response.data.length; i < len; i++) {
          // let curr_date = response.data[i].Date.split("/");
          let db_date = moment(response.data[i].Date, "DD-MM-YYYY");
          let current_date = moment();
          let date_difference = current_date.diff(db_date, "days");
          let time_recorded = response.data[i].timeRecorded;
          if (
            // curr_date[1] === Month_str &&
            date_difference < 32 &&
            (time_recorded === "09:00" ||
              time_recorded === "09:01" ||
              time_recorded === "09:02" ||
              time_recorded === "09:03" ||
              time_recorded === "09:04 " ||
              time_recorded === "09:05" ||
              time_recorded === "18:00" ||
              time_recorded === "18:01" ||
              time_recorded === "18:02" ||
              time_recorded === "18:03" ||
              time_recorded === "18:04" ||
              time_recorded === "18:05")
          ) {
            if (
              response.data[i].Bank === "DBS" &&
              typeof response.data[i].rates[0].v === "number" &&
              response.data[i].rates[0].v !== 0
            ) {
              today_dbs.push(response.data[i]);
            } else if (
              response.data[i].Bank === "UOB" &&
              typeof response.data[i].rates[0].v === "number" &&
              response.data[i].rates[0].v !== 0
            ) {
              today_uob.push(response.data[i]);
            } else if (
              response.data[i].Bank === "OCBC" &&
              typeof response.data[i].rates[0].v === "number" &&
              response.data[i].rates[0].v !== 0
            ) {
              today_ocbc.push(response.data[i]);
            }
          }
        }

        function get_rates(item) {
          var rate = item.rates[0].v / item.rates[1].v;
          return rate;
        }

        function get_timedate(item) {
          var timedate = [item.Date.slice(0, 5), item.timeRecorded].join(" ");
          return timedate;
        }

        function combiner(rates, dates) {
          var result = [];
          for (let i = 0, len = response.data.length; i < len; i++) {
            var curr_rate = rates[i];
            var curr_date = dates[i];
            var data = { x: curr_date, y: curr_rate };
            result.push(data);
          }
          return result;
        }

        var dbs_rates = today_dbs.map(get_rates);
        var uob_rates = today_uob.map(get_rates);
        var ocbc_rates = today_ocbc.map(get_rates);

        var dbs_timedates = today_dbs.map(get_timedate);
        var uob_timedates = today_uob.map(get_timedate);
        var ocbc_timedates = today_ocbc.map(get_timedate);

        this.setState({
          chartData: {
            labels: dbs_timedates,
            datasets: [
              {
                label: "DBS",
                data: combiner(dbs_rates, dbs_timedates),
                backgroundColor: ["rgba(255, 255, 255, 0)"],
                borderColor: ["rgba(255, 159, 64, 1)"],
                borderWidth: 1,
                lineTension: 0.1,
                labels: dbs_timedates,
                fill: false,
              },
              {
                label: "UOB",
                data: combiner(uob_rates, uob_timedates),
                backgroundColor: ["rgba(255, 255, 255, 0)"],
                borderColor: ["rgba(63, 191, 127, 1)"],
                borderWidth: 1,
                lineTension: 0.1,
                labels: uob_timedates,
                fill: false,
              },
              {
                label: "OCBC",
                data: combiner(ocbc_rates, ocbc_timedates),
                backgroundColor: ["rgba(255, 255, 255, 0)"],
                borderColor: ["rgba(191, 63, 63, 1)"],
                borderWidth: 1,
                lineTension: 0.1,
                labels: ocbc_timedates,
                fill: false,
              },
            ],
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          height="400"
          width="400"
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default audchart_m;
