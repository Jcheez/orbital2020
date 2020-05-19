import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navBar component/navBar.component";
import logout from "./components/logout component/logout";
import tutorial from "./components/tutorial component/tutorial";
import latestRates from "./components/latest rate component/latestRate";
import mainpage from "./components/Main page component/mainPage";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={mainpage} />
      <Route path="/tutorial" exact component={tutorial} />
      <Route path="/latestRates" exact component={latestRates} />
      <Route path="/logout" exact component={logout} />
    </Router>
  );
}

export default App;
