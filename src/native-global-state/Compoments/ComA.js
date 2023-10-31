import { useContext } from "react";
import { CounterContext } from "../../App";
import { ADD, MINUS, RESET } from "../action";
export default function ComA() {
  const [state, dispatch] = useContext(CounterContext);
  return (
    <div>
      <h2> Component A is children of Main </h2>
      -----
      <div>Count root :{state.count} </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: ADD, value: 5 });
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            dispatch({ type: RESET });
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            dispatch({ type: MINUS, value: 5 });
          }}
        >
          MINUS
        </button>
      </div>
      ---
    </div>
  );
}
