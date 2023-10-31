import { RESET, ADD, MINUS } from "./action";

export const initialState = { count: 0 };

export default function stateReducer(state, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case ADD:
      return { ...state, count: state.count + 1 };
    case MINUS:
      return { ...state, count: state.count - 1 };
    default:
      throw new Error("Invalid action type: " + action.type);
  }
}
