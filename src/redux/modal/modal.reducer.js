import MODAL_TYPES from "./modal.types";

const INITIAL_STATE = {
  showModal: false,
  modalData: {},
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_TYPES.TOGGLE_HIDDEN_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case MODAL_TYPES.GET_MODAL_DATA:
      return {
        ...state,
        modalData: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
