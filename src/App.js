import React from "react";
import { Route, Switch } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
