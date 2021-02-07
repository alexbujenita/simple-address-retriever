import { ADD_ADDRESS, ADD_ADDRESS_ERROR } from "../actions/getAddress";
import { ADD_PERSONAL_ADDRESS } from "../actions/personalAddress";

export const getAddress = (state = {}, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return { addresses: action.addresses };

    case ADD_ADDRESS_ERROR:
      return { error: action.message };

    case ADD_PERSONAL_ADDRESS:
      return {};

    default:
      return state;
  }
};
