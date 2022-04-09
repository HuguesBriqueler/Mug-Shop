import * as actions from "./actions";

const INITIAL_STATE = { cart: [] };

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ADDITEM:
      console.log("ADDITEM");
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case actions.REMOVEITEM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case actions.UPDATEITEM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}
