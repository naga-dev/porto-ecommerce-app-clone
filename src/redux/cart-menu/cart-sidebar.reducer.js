import cartSidebarTypes from "./cart-sidebar.types";

const INITIAL_STATE = {
  hidden: false,
};

const cartSidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartSidebarTypes.TOGGLE_HIDDEN_SDIEBAR:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartSidebarReducer;
