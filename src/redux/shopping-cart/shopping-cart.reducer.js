import addItemToCart from "./shoping-cart.utils";
import SHOPPING_CART_TYPES from "./shopping-cart.types";

const INITIAL_STATE = {
  cartItems: [],
};

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOPPING_CART_TYPES.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
