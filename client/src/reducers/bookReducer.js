import _ from "lodash";
import {
  CREATE_BOOK,
  FETCH_BOOK,
  FETCH_BOOKS,
  DELETE_BOOK,
  EDIT_BOOK
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_BOOKS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_BOOK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BOOK:
      return _.omit(state, [action.payload]);
    default:
      return state;
  }
};
