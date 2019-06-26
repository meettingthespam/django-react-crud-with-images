import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from "./types";

// Get Notes
// Only showing notes to user's who are logged in
// and only their notes

export const getNotes = () => (dispatch, getState) => {
  axios
    .get("api/notestoself/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Notes
export const deleteNote = id => (dispatch, getState) => {
  axios
    .delete(`/api/notestoself/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteNote: "Note Deleted" }));
      dispatch({
        type: DELETE_NOTE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addNote = note => (dispatch, getState) => {
  axios
    .post("/api/notestoself/", note, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addNote: "Note Added" }));
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
