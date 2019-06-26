import { GET_GALLERY_IMAGES } from "../actions/types.js";

// initializing an empty state
const initialState = {
  gallery_images: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GALLERY_IMAGES:
      return {
        ...state,
        gallery_images: action.payload
      };
    default:
      return state;
  }
}
