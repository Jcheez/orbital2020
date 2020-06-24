import React, { Component } from "react";
import Usdrate from "../usdRates";
import Eurorate from "../euroRates";
import Gbprate from "../gbpRates";
import Jpyrate from "../jpyRates";
import Cnyrate from "../cnyRates";
import Audrate from "../audRates";
import Cadrate from "../cadRates";
import Nzdrate from "../nzdRates";
import Hkdrate from "../hkdRates";
import Myrrate from "../myrRates";
import Chfrate from "../chfRates";
import Idrrate from "../idrRates";
import ThbRate from "../thbRates";
import Krwrate from "../krwRates";
import Ntdrate from "../ntdrates";
import Aedrate from "../aedRates";

class dropdownbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: false,
      isEmptyStateAud: false,
      isEmptyStateCad: false,
      isEmptyStateNzd: false,
      isEmptyStateHkd: false,
      isEmptyStateChf: false,
      isEmptyStateMyr: false,
      isEmptyStateIdr: false,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    };

    this.showmenu = this.showmenu.bind(this);
    this.closemenu = this.closemenu.bind(this);
  }

  showmenu(event) {
    event.preventDefault();
    this.setState(
      {
        dropdown: true,
        isEmptyStateUSD: false,
        isEmptyStateEuro: false,
        isEmptyStateGbp: false,
        isEmptyStateJpy: false,
        isEmptyStateCny: false,
        isEmptyStateAud: false,
        isEmptyStateCad: false,
        isEmptyStateNzd: false,
        isEmptyStateHkd: false,
        isEmptyStateChf: false,
        isEmptyStateMyr: false,
        isEmptyStateIdr: false,
        isEmptyStateThb: false,
        isEmptyStateKrw: false,
        isEmptyStateNtd: false,
        isEmptyStateAed: false,
      },
      () => {
        document.addEventListener("click", this.closemenu);
      }
    );
  }

  closemenu() {
    this.setState({ dropdown: false }, () => {
      document.removeEventListener("click", this.closemenu);
    });
  }

  showUSD = () => {
    this.setState({
      isEmptyStateUSD: true,
    });
  };

  showEuro = () => {
    this.setState({
      isEmptyStateEuro: true,
    });
  };

  showGbp = () => {
    this.setState({
      isEmptyStateGbp: true,
    });
  };

  showJpy = () => {
    this.setState({
      isEmptyStateJpy: true,
    });
  };

  showCny = () => {
    this.setState({
      isEmptyStateCny: true,
    });
  };

  showAud = () => {
    this.setState({
      isEmptyStateAud: true,
    });
  };

  showCad = () => {
    this.setState({
      isEmptyStateCad: true,
    });
  };

  showNzd = () => {
    this.setState({
      isEmptyStateNzd: true,
    });
  };

  showHkd = () => {
    this.setState({
      isEmptyStateHkd: true,
    });
  };

  showChf = () => {
    this.setState({
      isEmptyStateChf: true,
    });
  };

  showMyr = () => {
    this.setState({
      isEmptyStateMyr: true,
    });
  };

  showIdr = () => {
    this.setState({
      isEmptyStateIdr: true,
    });
  };

  showThb = () => {
    this.setState({
      isEmptyStateThb: true,
    });
  };

  showKrw = () => {
    this.setState({
      isEmptyStateKrw: true,
    });
  };

  showNtd = () => {
    this.setState({
      isEmptyStateNtd: true,
    });
  };

  showAed = () => {
    this.setState({
      isEmptyStateAed: true,
    });
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
              <option onClick={this.showUSD}>US Dollar</option>
              <option onClick={this.showEuro}>Euro</option>
              <option onClick={this.showGbp}>Sterling Pound</option>
              <option onClick={this.showJpy}>Japanese Yen</option>
              <option onClick={this.showCny}>Chinese Renminbi</option>
              <option onClick={this.showAud}>Australian Dollar</option>
              <option onClick={this.showCad}>Canadian Dollar</option>
              <option onClick={this.showNzd}>New Zealand Dollar</option>
              <option onClick={this.showHkd}>Hong Kong Dollar</option>
              <option onClick={this.showChf}>Swiss Franc</option>
              <option onClick={this.showMyr}>Malaysian Ringgit</option>
              <option onClick={this.showIdr}>Indonesian Rupiah</option>
              <option onClick={this.showThb}>Thai Baht</option>
              <option onClick={this.showKrw}>Korean Won</option>
              <option onClick={this.showNtd}>New Taiwan Dollar</option>
              <option onClick={this.showAed}>UAE Dirham</option>
            </ul>
          ) : null}
        </div>
        <div>{this.state.isEmptyStateUSD && <Usdrate />}</div>
        <div>{this.state.isEmptyStateEuro && <Eurorate />}</div>
        <div>{this.state.isEmptyStateGbp && <Gbprate />}</div>
        <div>{this.state.isEmptyStateJpy && <Jpyrate />}</div>
        <div>{this.state.isEmptyStateCny && <Cnyrate />}</div>
        <div>{this.state.isEmptyStateAud && <Audrate />}</div>
        <div>{this.state.isEmptyStateCad && <Cadrate />}</div>
        <div>{this.state.isEmptyStateNzd && <Nzdrate />}</div>
        <div>{this.state.isEmptyStateHkd && <Hkdrate />}</div>
        <div>{this.state.isEmptyStateChf && <Chfrate />}</div>
        <div>{this.state.isEmptyStateMyr && <Myrrate />}</div>
        <div>{this.state.isEmptyStateIdr && <Idrrate />}</div>
        <div>{this.state.isEmptyStateThb && <ThbRate />}</div>
        <div>{this.state.isEmptyStateKrw && <Krwrate />}</div>
        <div>{this.state.isEmptyStateNtd && <Ntdrate />}</div>
        <div>{this.state.isEmptyStateAed && <Aedrate />}</div>
      </div>
    );
  }
}

export default dropdownbar;
