import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Button from "react-bootstrap/Button";

class logout extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <div>
          <br></br>
        </div>
        <div
          style={{
            paddingLeft: "10px",
          }}
        >
          <Button variant="primary" onClick={this.onLogoutClick} size="lg">
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(logout);
