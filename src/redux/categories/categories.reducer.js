import CATEGORIES from "./categories";

const INITIAL_STATE = {
  categoriesItems: CATEGORIES,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
