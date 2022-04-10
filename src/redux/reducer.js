import * as actions from "./actions";

const INITIAL_STATE = { cart: [] };

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ADDITEM:
      console.log("ADDITEM");
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        return {
          cart: [...state.cart, action.payload],
        };
      } else {
        return {
          cart: [
            ...state.cart.slice(0, itemIndex),
            {
              ...state.cart[itemIndex],
              quantity:
                state.cart[itemIndex].quantity + action.payload.quantity,
            },
            ...state.cart.slice(itemIndex + 1),
          ],
        };
      }
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
