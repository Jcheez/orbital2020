import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navBar component/navBar.component";
import logout from "./components/logout component/logout";
import tutorial from "./components/tutorial component/tutorial";
import favourites from "./components/favourite component/favourites";
import mainpage from "./components/Main page component/mainPage";
import usdrate from "./components/Main page component/usdrate";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={mainpage} />
      <Route path="/usdrate" exact component={usdrate} />
      <Route path="/tutorial" exact component={tutorial} />
      <Route path="/favourites" exact component={favourites} />
      <Route path="/logout" exact component={logout} />
    </Router>
  );
}

export default App;
