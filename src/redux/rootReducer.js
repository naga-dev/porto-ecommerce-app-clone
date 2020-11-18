import { combineReducers } from "redux";
import cartSidebarReducer from "./cart-menu/cart-sidebar.reducer";
import modalReducer from "./modal/modal.reducer";

const rootReudcer = combineReducers({
  cartSidebar: cartSidebarReducer,
  modal: modalReducer,
});

export default rootReudcer;
