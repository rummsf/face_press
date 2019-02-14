import items from "../apis/items";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BOOK,
  FETCH_BOOK,
  FETCH_BOOKS,
  // DELETE_BOOK,
  // EDIT_BOOK,
  //
  FETCH_WRITER,
  FETCH_WRITERS

  // UPDATE_FILTER
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = userId => {
  return { type: SIGN_OUT, payload: userId };
};

export const createBook = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await items.post("/api/v1/books", { ...formValues, userId });
  dispatch({ type: CREATE_BOOK, payload: response.data });
  history.push("/books");
};

export const fetchBooks = () => async dispatch => {
  const response = await items.get("/api/v1/books");
  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const fetchBook = id => async dispatch => {
  const response = await items.get(`api/v1/books/${id}`);
  dispatch({ type: FETCH_BOOK, payload: response.data });
};

// export const editBook = (id, formValues) => async dispatch => {
//   const response = await items.patch(`api/v1/books/${id}`, formValues);
//   dispatch({ type: EDIT_BOOK, payload: response.data });
//   history.push("/");
// };

// export const deleteBook = id => async dispatch => {
//   await items.delete(`/api/v1/books/${id}`);
//   dispatch({ type: DELETE_BOOK, payload: id });
//   history.push("/");
// };

//WRITERS

export const fetchWriters = () => async dispatch => {
  const response = await items.get("/api/v1/writers");
  dispatch({ type: FETCH_WRITERS, payload: response.data });
};

export const fetchWriter = id => async dispatch => {
  const response = await items.get(`api/v1/writers/${id}`);
  dispatch({ type: FETCH_WRITER, payload: response.data });
};

// FILTER

// export function updateFilter(newFilter) {
//   return { type: UPDATE_FILTER, newFilter };
// }
