import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Welcome from "./components/welcome page component/welcome";
import Signup from "./components/signup component/signup";
import Login from "./components/login component/login";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
