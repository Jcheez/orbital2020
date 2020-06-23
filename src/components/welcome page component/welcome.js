import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <button
              className="col s6"
              style={{
                paddingLeft: "1px",
                paddingRight: "1px",
                borderRightWidth: "2px",
                borderLeftWidth: "2px",
              }}
            >
              <Link
                to="/signup"
                style={{
                  width: "1105px",
                  borderRadius: "1px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </button>
            <button
              className="col s6"
              style={{
                paddingLeft: "1px",
                paddingRight: "1px",
                borderRightWidth: "2px",
                borderLeftWidth: "2px",
              }}
            >
              <Link
                to="/login"
                style={{
                  width: "1105px",
                  borderRadius: "1px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
