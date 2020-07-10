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

import Dropdown from "react-bootstrap/Dropdown";

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
  }

  showUSD = () => {
    this.setState({
      isEmptyStateUSD: true,
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
    });
  };

  showEuro = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: true,
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
    });
  };

  showGbp = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: true,
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
    });
  };

  showJpy = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: true,
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
    });
  };

  showCny = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: true,
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
    });
  };

  showAud = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: false,
      isEmptyStateAud: true,
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
    });
  };

  showCad = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: false,
      isEmptyStateAud: false,
      isEmptyStateCad: true,
      isEmptyStateNzd: false,
      isEmptyStateHkd: false,
      isEmptyStateChf: false,
      isEmptyStateMyr: false,
      isEmptyStateIdr: false,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showNzd = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: false,
      isEmptyStateAud: false,
      isEmptyStateCad: false,
      isEmptyStateNzd: true,
      isEmptyStateHkd: false,
      isEmptyStateChf: false,
      isEmptyStateMyr: false,
      isEmptyStateIdr: false,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showHkd = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: false,
      isEmptyStateAud: false,
      isEmptyStateCad: false,
      isEmptyStateNzd: false,
      isEmptyStateHkd: true,
      isEmptyStateChf: false,
      isEmptyStateMyr: false,
      isEmptyStateIdr: false,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showChf = () => {
    this.setState({
      isEmptyStateUSD: false,
      isEmptyStateEuro: false,
      isEmptyStateGbp: false,
      isEmptyStateJpy: false,
      isEmptyStateCny: false,
      isEmptyStateAud: false,
      isEmptyStateCad: false,
      isEmptyStateNzd: false,
      isEmptyStateHkd: false,
      isEmptyStateChf: true,
      isEmptyStateMyr: false,
      isEmptyStateIdr: false,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showMyr = () => {
    this.setState({
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
      isEmptyStateMyr: true,
      isEmptyStateIdr: false,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showIdr = () => {
    this.setState({
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
      isEmptyStateIdr: true,
      isEmptyStateThb: false,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showThb = () => {
    this.setState({
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
      isEmptyStateThb: true,
      isEmptyStateKrw: false,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showKrw = () => {
    this.setState({
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
      isEmptyStateKrw: true,
      isEmptyStateNtd: false,
      isEmptyStateAed: false,
    });
  };

  showNtd = () => {
    this.setState({
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
      isEmptyStateNtd: true,
      isEmptyStateAed: false,
    });
  };

  showAed = () => {
    this.setState({
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
      isEmptyStateAed: true,
    });
  };

  render() {
    return (
      <div>
        <div>
          <br></br>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              List of Currencies
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={this.showUSD}>US Dollar</Dropdown.Item>
              <Dropdown.Item onClick={this.showEuro}>Euro</Dropdown.Item>
              <Dropdown.Item onClick={this.showGbp}>
                Sterling Pound
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showJpy}>Japanese Yen</Dropdown.Item>
              <Dropdown.Item onClick={this.showCny}>
                Chinese Renminbi
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showAud}>
                Australian Dollar
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showCad}>
                Canadian Dollar
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showNzd}>
                New Zealand Dollar
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showHkd}>
                Hong Kong Dollar
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showChf}>Swiss Franc</Dropdown.Item>
              <Dropdown.Item onClick={this.showMyr}>
                Malaysian Ringgit
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showIdr}>
                Indonesian Rupiah
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showThb}>Thai Baht</Dropdown.Item>
              <Dropdown.Item onClick={this.showKrw}>Korean Won</Dropdown.Item>
              <Dropdown.Item onClick={this.showNtd}>
                New Taiwan Dollar
              </Dropdown.Item>
              <Dropdown.Item onClick={this.showAed}>UAE Dirham</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
