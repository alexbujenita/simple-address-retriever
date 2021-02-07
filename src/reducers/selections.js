import { ADD_PERSONAL_ADDRESS } from "../actions/personalAddress";

export const ADD_SELECTION = "ADD_SELECTION";

export const selections = (state = { postcode: "" }, action) => {
  switch (action.type) {
    case ADD_SELECTION:
      return {
        ...state,
        [action.selectionType]: action.selected,
      };

    case ADD_PERSONAL_ADDRESS:
      return { postcode: "" };

    default:
      return state;
  }
};
