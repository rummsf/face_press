import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  books: bookReducer
});
