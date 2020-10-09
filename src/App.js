import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import AppFooter from "./components/AppFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/product" component={ProductPage} />
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
