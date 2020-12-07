import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSidebarReducer from "./cart-menu/cart-sidebar.reducer";
import categoriesReducer from "./categories/categories.reducer";
import modalReducer from "./modal/modal.reducer";
import shopReducer from "./shop/shop.reducer";
import shoppingCartReducer from "./shopping-cart/shopping-cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReudcer = combineReducers({
  cartSidebar: cartSidebarReducer,
  modal: modalReducer,
  cart: shoppingCartReducer,
  categories: categoriesReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReudcer);
