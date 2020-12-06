import { createSelector } from "reselect";

// Main selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartIems =>
    cartIems.reduce(
      (accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQty, cartItem) =>
        accumalatedQty + cartItem.quantity * cartItem.price,
      0
    )
);
