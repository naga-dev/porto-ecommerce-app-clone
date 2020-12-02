import { combineReducers } from "redux";
import cartSidebarReducer from "./cart-menu/cart-sidebar.reducer";
import modalReducer from "./modal/modal.reducer";
import shoppingCartReducer from "./shopping-cart/shopping-cart.reducer";

const rootReudcer = combineReducers({
  cartSidebar: cartSidebarReducer,
  modal: modalReducer,
  cart: shoppingCartReducer,
});

export default rootReudcer;
