import {
  ADD_PERSONAL_ADDRESS,
  REMOVE_PERSONAL_ADDRESS,
} from "../actions/personalAddress";

export function personalAddress(state = {}, action) {
  switch (action.type) {
    case ADD_PERSONAL_ADDRESS:
      return action.entry;

    case REMOVE_PERSONAL_ADDRESS:
      return {};

    default:
      return state;
  }
}
