import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import Header from "./structure/header/Header.component";
import "./app.style.scss";
const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
