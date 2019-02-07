import books from "../apis/books";
import history from "../history";
import {
  CREATE_WRITER,
  FETCH_WRITER,
  FETCH_WRITERS,
  DELETE_WRITER,
  EDIT_WRITER
} from "./types";

export const createWriter = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await writers.post("/api/v1/writers", {
    ...formValues,
    userId
  });
  dispatch({ type: CREATE_WRITER, payload: response.data });
  history.push("/");
};

export const fetchBooks = () => async dispatch => {
  const response = await books.get("/api/v1/books");
  dispatch({ type: FETCH_WRITERS, payload: response.data });
};

export const fetchBook = id => async dispatch => {
  const response = await books.get(`api/v1/books/${id}`);
  dispatch({ type: FETCH_WRITER, payload: response.data });
};

export const editBook = (id, formValues) => async dispatch => {
  const response = await books.patch(`api/v1/books/${id}`, formValues);
  dispatch({ type: EDIT_WRITER, payload: response.data });
  history.push("/");
};

export const deleteBook = id => async dispatch => {
  await books.delete(`/api/v1/books/${id}`);
  dispatch({ type: DELETE_WRITER, payload: id });
  history.push("/");
};
