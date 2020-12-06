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
    case SHOPPING_CART_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
