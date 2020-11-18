import React from "react";
import { Route, Switch } from "react-router-dom";

import "./scss/App.scss";

import ProductPage from "./components/ProductPage";
import AppFooter from "./components/AppFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import TextPage from "./pages/TextPage";
import CartPage from "./pages/CartPage";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:product" render={routeProps => <ProductPage {...routeProps} />} />
        <Route path="/user/account" component={UserAccount} />
        <Route path="/cart" component={CartPage} />
        <Route path="/test" component={TextPage} />
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
