import { combineReducers } from "redux";
import dossiers from "./dossiers";
import notesToSelf from "./notesToSelf";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

import gallery_reducer from "./gallery.js";

export default combineReducers({
  dossiers,
  notesToSelf,
  errors,
  messages,
  gallery_reducer,
  auth
});
