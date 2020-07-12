import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/privateRoute";

import Home from "./components/home component/home";
import Tutorial from "./Refreshed components/tutorial2";
import Latest from "./Refreshed components/latestRates2";
import Logout from "./Refreshed components/logout2";

import Welcome from "./components/welcome page component/welcome";
import Signup from "./components/signup component/signup";
import Login from "./components/login component/login";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/home/tutorial" component={Tutorial} />
          <PrivateRoute exact path="/home/latestRates" component={Latest} />
          <PrivateRoute exact path="/home/logout" component={Logout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
