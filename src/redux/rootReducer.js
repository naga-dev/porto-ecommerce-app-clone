import { combineReducers } from "redux";
import cartSidebarReducer from "./cart-menu/cart-sidebar.reducer";

const rootReudcer = combineReducers({
  cartSidebar: cartSidebarReducer,
});

export default rootReudcer;
