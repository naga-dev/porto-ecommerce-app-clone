import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { auth, createUserProfileDoc } from "./firebase";

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
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDoc(user);
        userRef.onSnapshot(snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
    });
  });

  return (
    <div className="App">
      <CartSidebar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/shop/:product" render={routeProps => <ProductPage {...routeProps} />} />
          <Route path="/user/account" render={() => <UserAccount user={user} />} />
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
