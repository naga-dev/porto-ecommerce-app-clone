import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeLanding from "./components/HomeLanding";
import { HomePage } from "./components/HomePage";
import Navbar from "./components/Navbar";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeLanding />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
