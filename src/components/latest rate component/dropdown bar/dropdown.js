import React, { Component } from "react";
import Usdrate from "../usdRates";
//import Eurorate from "../euroRates";
//import Gbprate from "../gbpRates";
//import Jpyrate from "../jpyRates";
//import Cnyrate from "../cnyRates";
//import Audrate from "../audRates";
//import Cadrate from "../cadRates";
//import Nzdrate from "../nzdRates";
//import Hkdrate from "../hkdRates";
//import Myrrate from "../myrRates";
//import Chfrate from "../chfRates";
//import Idrrate from "../idrRates";
//import ThbRate from "../thbRates";
//import Krwrate from "../krwRates";
//import Ntdrate from "../ntdrates";
//import Aedrate from "../aedRates";

class dropdownbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
      isEmptyStateUSD: false,
    };

    this.showmenu = this.showmenu.bind(this);
    this.closemenu = this.closemenu.bind(this);
  }

  showmenu(event) {
    event.preventDefault();
    this.setState({ dropdown: true }, () => {
      document.addEventListener("click", this.closemenu);
    });
  }

  closemenu() {
    this.setState({ dropdown: false }, () => {
      document.removeEventListener("click", this.closemenu);
    });
  }

  showUSD = () => {
    this.setState({ isEmptyStateUSD: true });
  };

  render() {
    return (
      <div>
        <div
          className="dropdownmenu"
          style={{
            background: "#fff",
            width: "200px",
            border: "1px solid #ccc",
            borderradius: "6px",
          }}
        >
          <div className="button" onClick={this.showmenu}>
            List of Currencies ▼
          </div>
          {this.state.dropdown ? (
            <ul>
              <li onClick={this.showUSD}>US Dollar</li>
              <li>Euro</li>
              <li>Sterling Pound</li>
              <li>Japanese Yen</li>
              <li>Chinese Renminbi</li>
              <li>Australian Dollar</li>
              <li>Canadian Dollar</li>
              <li>New Zealand Dollar</li>
              <li>Hong Kong Dollar</li>
              <li>Swiss Franc</li>
              <li>Malaysian Ringgit</li>
              <li>Indonesian Rupiah</li>
              <li>Thai Baht</li>
              <li>Korean Won</li>
              <li>New Taiwan Dollar</li>
              <li>UAE Dirham</li>
            </ul>
          ) : null}
        </div>
        <span>{this.state.isEmptyStateUSD && <Usdrate />}</span>
      </div>
    );
  }
}

export default dropdownbar;
