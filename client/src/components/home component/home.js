import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navBar component/navBar.component";
import logout from "../logout component/logout";
import tutorial from "../tutorial component/tutorial";
import latestRates from "../latest rate component/latestRate";
import mainpage from "../Main page component/mainPage";

function home() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/home" exact component={mainpage} />
      <Route path="/home/tutorial" exact component={tutorial} />
      <Route path="/home/latestRates" exact component={latestRates} />
      <Route path="/home/logout" exact component={logout} />
    </Router>
  );
}

export default home;
