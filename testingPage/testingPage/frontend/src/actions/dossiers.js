import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_DOSSIERS, DELETE_DOSSIER, ADD_DOSSIER } from "./types";

// Get Dossiers
// Only showing the current user their Dossiers
export const getDossiers = () => (dispatch, getState) => {
  axios
    .get("/api/dossiers/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DOSSIERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE DOSSIER
export const deleteDossier = id => (dispatch, getState) => {
  axios
    .delete(`/api/dossiers/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteDossier: "Dossier Deleted" }));
      dispatch({
        type: DELETE_DOSSIER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD DOSSIER
export const addDossier = dossier => (dispatch, getState) => {
  axios
    .post("/api/dossiers/", dossier, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addDossier: "Dossier Added" }));
      dispatch({
        type: ADD_DOSSIER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
