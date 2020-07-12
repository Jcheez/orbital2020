import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "./welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div
        style={{
          height: "75vh",
          marginTop: "150px",
        }}
        className="container valign-wrapper"
      >
        <div className="container">
          <p
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Welcome to Foreign Exchange Rates Monitoring System (FERMS)
          </p>
          <br></br>
          <p style={{ fontSize: "20px", marginLeft: "82px" }}>
            With Ferms, you can:
            <ol>
              <li>
                Monitor exchange rates live with our graphs (Data is updated
                roughly every 30 minutes)
              </li>
              <li>
                Favourite your most commonly used exchange rates, viewing them
                with ease
              </li>
              <li>
                Estimate the amount of foreign currency you will get with our
                in-built calculator
              </li>
            </ol>
          </p>
        </div>
        <div className="row">
          <div className="col s12 center-align" style={{ textAlign: "center" }}>
            <Button
              variant="outline-primary"
              style={{ marginRight: "150px", marginTop: "100px" }}
              size="lg"
            >
              <Link
                to="/signup"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                style={{ fontSize: "20px", width: "160px" }}
              >
                Register
              </Link>
            </Button>
            <Button
              variant="outline-info"
              size="lg"
              style={{ marginleft: "150px", marginTop: "100px" }}
            >
              <Link
                to="/login"
                className="btn btn-large btn-flat waves-effect white black-text"
                style={{
                  fontSize: "20px",
                  width: "160px",
                }}
              >
                Log In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
