import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login page component/login";
import Signup from "./components/signup component/signup";
import Home from "./components/home component/home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/home" exact component={Home} />
    </Router>
  );
}

export default App;
