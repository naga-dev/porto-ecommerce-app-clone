import MODAL_TYPES from "./modal.types";

export const toggleModal = () => ({
  type: MODAL_TYPES.TOGGLE_HIDDEN_MODAL,
});

export const getModalData = item => ({
  type: MODAL_TYPES.GET_MODAL_DATA,
  payload: item,
});
