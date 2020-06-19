import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Axios from "axios";

class fav_button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "Add to Favourites",
      text2: "Added to favourites",
      favourites: [],
      added: "",
      email: "",
    };
    this.logger = this.logger.bind(this);
    this.button_function = this.button_function.bind(this);
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

        var currency_added = "";
        for (let i = 0, len = data_array.length; i < len; i++) {
          if (data_array[i] === this.props.currency) {
            currency_added = true;
          }
        }

        this.setState({
          favourites: data_array,
          email: curr_email,
          added: currency_added,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logger() {
    console.log(this.state.email);
    console.log(this.state.favourites);
    console.log(this.props.currency);
    console.log(this.state.added);
  }

  button_function() {
    if (this.state.added) {
      Axios.post("http://localhost:5000/users/userdeletefav", {
        email: this.state.email,
        favourites: this.props.currency,
      });
      this.setState({
        added: false,
      });
    } else {
      Axios.post("http://localhost:5000/users/userupdatefav", {
        email: this.state.email,
        favourites: this.props.currency,
      });
      this.setState({
        added: true,
      });
    }
  }

  button_text() {
    if (this.state.added) {
      return this.state.text2;
    } else {
      return this.state.text1;
    }
  }

  render() {
    return <button onClick={this.button_function}>{this.button_text()}</button>;
  }
}

const mapStateToProps = (state) => {
  if (state.auth.emaildata !== undefined) {
    localStorage.setItem("email", state.auth.emaildata.email);
    return { email: state.auth.emaildata.email };
  }
};

export default connect(mapStateToProps, { loginUser })(fav_button);
