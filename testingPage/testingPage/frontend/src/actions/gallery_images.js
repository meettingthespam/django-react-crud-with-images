import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_GALLERY_IMAGES } from "./types.js";

// getting the gallery images
export const getGalleryImages = () => (dispatch, getState) => {
  axios
    .get("/api/gallery")
    .then(res => {
      dispatch({
        type: GET_GALLERY_IMAGES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
