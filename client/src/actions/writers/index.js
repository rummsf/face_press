import writers from "../../apis/books";
import history from "../../history";
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
