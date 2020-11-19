import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import "./scss/App.scss";

import ProductPage from "./components/ProductPage";
import AppFooter from "./components/AppFooter";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import TextPage from "./pages/TextPage";
import UserAccount from "./pages/UserAccount";
import CartSidebar from "./components/cart-sidebar/cart-sidebar.comp";
import Checkout from "./pages/checkout/checkout.comp";
import CartPage from "./pages/cart-page/cart-page.comp";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <CartSidebar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/:product" render={routeProps => <ProductPage {...routeProps} />} />
          <Route path="/user/account" component={UserAccount} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/test" component={TextPage} />
        </Switch>
      </AnimatePresence>
      <AppFooter />
    </div>
  );
}

export default App;

// TODO
// Animate your app
// Move from SCSS
