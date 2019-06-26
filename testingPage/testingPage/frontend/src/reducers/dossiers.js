import {
  GET_DOSSIERS,
  DELETE_DOSSIER,
  ADD_DOSSIER,
  CLEAR_DOSSIERS
} from "../actions/types";

const initialState = {
  dossiers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DOSSIERS:
      return {
        ...state,
        dossiers: action.payload
      };
    case DELETE_DOSSIER:
      return {
        ...state,
        dossiers: state.dossiers.filter(
          dossier => dossier.id !== action.payload
        )
      };
    case ADD_DOSSIER:
      return {
        ...state,
        dossiers: [...state.dossiers, action.payload]
      };
    case CLEAR_DOSSIERS:
      return {
        ...state,
        dossiers: []
      };
    default:
      return state;
  }
}
