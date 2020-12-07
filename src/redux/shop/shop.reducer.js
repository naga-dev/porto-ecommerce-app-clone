import SHOP_DATA from "./popular_products";

const INITIAL_SATE = {
  shopItems: SHOP_DATA,
};

const shopReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
