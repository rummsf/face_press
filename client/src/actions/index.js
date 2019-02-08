import { books, writers } from "../apis/books";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BOOK,
  FETCH_BOOK,
  FETCH_BOOKS,
  DELETE_BOOK,
  EDIT_BOOK,
  CREATE_WRITER,
  FETCH_WRITER,
  FETCH_WRITERS,
  DELETE_WRITER,
  EDIT_WRITER,
  UPDATE_FILTER
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
  const response = await books.post("/api/v1/books", { ...formValues, userId });
  dispatch({ type: CREATE_BOOK, payload: response.data });
  history.push("/");
};

export const fetchBooks = () => async dispatch => {
  const response = await books.get("/api/v1/books");
  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const fetchBook = id => async dispatch => {
  const response = await books.get(`api/v1/books/${id}`);
  dispatch({ type: FETCH_BOOK, payload: response.data });
};

export const editBook = (id, formValues) => async dispatch => {
  const response = await books.patch(`api/v1/books/${id}`, formValues);
  dispatch({ type: EDIT_BOOK, payload: response.data });
  history.push("/");
};

export const deleteBook = id => async dispatch => {
  await books.delete(`/api/v1/books/${id}`);
  dispatch({ type: DELETE_BOOK, payload: id });
  history.push("/");
};

//WRITERS

export const createWriter = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await writers.post("/api/v1/writers", {
    ...formValues,
    userId
  });
  dispatch({ type: CREATE_WRITER, payload: response.data });
  history.push("/");
};

export const fetchWriters = () => async dispatch => {
  const response = await writers.get("/api/v1/writers");
  dispatch({ type: FETCH_WRITERS, payload: response.data });
};

export const fetchWriter = id => async dispatch => {
  const response = await writers.get(`api/v1/writers/${id}`);
  dispatch({ type: FETCH_WRITER, payload: response.data });
};

export const editWriter = (id, formValues) => async dispatch => {
  const response = await writers.patch(`api/v1/writers/${id}`, formValues);
  dispatch({ type: EDIT_WRITER, payload: response.data });
  history.push("/");
};

export const deleteWriter = id => async dispatch => {
  await writers.delete(`/api/v1/writers/${id}`);
  dispatch({ type: DELETE_WRITER, payload: id });
  history.push("/");
};
//

export function updateFilter(newFilter) {
  return { type: UPDATE_FILTER, newFilter };
}
