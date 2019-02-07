import _ from "lodash";
import {
  CREATE_WRITER,
  FETCH_WRITER,
  FETCH_WRITERS,
  DELETE_WRITER,
  EDIT_WRITER
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WRITER:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_WRITERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_WRITER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_WRITER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_WRITER:
      return _.omit(state, [action.payload]);
    default:
      return state;
  }
};
