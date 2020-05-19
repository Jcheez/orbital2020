import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navBar.component";
import logout from "./components/logout";
import tutorial from "./components/tutorial";
import favourites from "./components/favourites";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/tutorial" exact component={tutorial} />
      <Route path="/favourites" exact component={favourites} />
      <Route path="/logout" exact component={logout} />
    </Router>
  );
}

export default App;
