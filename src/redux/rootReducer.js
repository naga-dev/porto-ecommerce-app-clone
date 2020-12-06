import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSidebarReducer from "./cart-menu/cart-sidebar.reducer";
import modalReducer from "./modal/modal.reducer";
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
});

export default persistReducer(persistConfig, rootReudcer);
