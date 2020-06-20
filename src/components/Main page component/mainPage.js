import React, { Component } from "react";
import Axios from "axios";
import USD from "./usd_table";
import EUR from "./eur_table";
import GBP from "./gbp_table";
import JPY from "./jpy_table";
import CNY from "./cny_table";
import AUD from "./aud_table";
import CAD from "./cad_table";
import NZD from "./nzd_table";
import HKD from "./hkd_table";
import CHF from "./chf_table";
import MYR from "./myr_table";
import IDR from "./idr_table";
import THB from "./thb_table";
import KRW from "./krw_table";
import NTD from "./ntd_table";
import AED from "./aed_table";

class mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USD: false,
      EUR: false,
      GBP: false,
      JPY: false,
      CNY: false,
      AUD: false,
      CAD: false,
      NZD: false,
      HKD: false,
      CHF: false,
      MYR: false,
      IDR: false,
      THB: false,
      KRW: false,
      NTD: false,
      AED: false,
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/users/user")
      .then((response) => {
        var curr_email = localStorage.getItem("email");
        var data_array = [];

        for (let i = 0, len = response.data.length; i < len; i++) {
          let email = response.data[i].email;

          if (curr_email === email) {
            data_array = response.data[i].favourites;
          }
        }

        for (let i = 0, len = data_array.length; i < len; i++) {
          if (data_array[i] === "USD") {
            this.setState({ USD: true });
          } else if (data_array[i] === "EUR") {
            this.setState({ EUR: true });
          } else if (data_array[i] === "GBP") {
            this.setState({ GBP: true });
          } else if (data_array[i] === "JPY") {
            this.setState({ JPY: true });
          } else if (data_array[i] === "CNY") {
            this.setState({ CNY: true });
          } else if (data_array[i] === "AUD") {
            this.setState({ AUD: true });
          } else if (data_array[i] === "CAD") {
            this.setState({ CAD: true });
          } else if (data_array[i] === "NZD") {
            this.setState({ NZD: true });
          } else if (data_array[i] === "HKD") {
            this.setState({ HKD: true });
          } else if (data_array[i] === "CHF") {
            this.setState({ CHF: true });
          } else if (data_array[i] === "MYR") {
            this.setState({ MYR: true });
          } else if (data_array[i] === "IDR") {
            this.setState({ IDR: true });
          } else if (data_array[i] === "THB") {
            this.setState({ THB: true });
          } else if (data_array[i] === "KRW") {
            this.setState({ KRW: true });
          } else if (data_array[i] === "NTD") {
            this.setState({ NTD: true });
          } else if (data_array[i] === "AED") {
            this.setState({ AED: true });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.USD && <USD />}</div>
        <div>{this.state.EUR && <EUR />}</div>
        <div>{this.state.GBP && <GBP />}</div>
        <div>{this.state.JPY && <JPY />}</div>
        <div>{this.state.CNY && <CNY />}</div>
        <div>{this.state.AUD && <AUD />}</div>
        <div>{this.state.CAD && <CAD />}</div>
        <div>{this.state.NZD && <NZD />}</div>
        <div>{this.state.HKD && <HKD />}</div>
        <div>{this.state.CHF && <CHF />}</div>
        <div>{this.state.MYR && <MYR />}</div>
        <div>{this.state.IDR && <IDR />}</div>
        <div>{this.state.THB && <THB />}</div>
        <div>{this.state.KRW && <KRW />}</div>
        <div>{this.state.NTD && <NTD />}</div>
        <div>{this.state.AED && <AED />}</div>
      </div>
    );
  }

  drawGraph() {
    console.log("printing graph");
  }
}

export default mainpage;
