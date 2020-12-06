import SHOPPING_CART_TYPES from "./shopping-cart.types";

export const AddItems = item => ({
  type: SHOPPING_CART_TYPES.ADD_ITEMS_TO_CART,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: SHOPPING_CART_TYPES.CLEAR_ITEM_FROM_CART,
  payload: item,
});
