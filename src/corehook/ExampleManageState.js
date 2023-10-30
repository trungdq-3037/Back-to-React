import { type } from "@testing-library/user-event/dist/type";
import { useReducer, useState } from "react";

export default function ExampleManageState() {
  const [count1, setCount1] = useState(0);

  const initialCount2 = { count: 0 };
  const stateReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, count: state.count + action.value };
      case "MINUS":
        return { ...state, count: state.count - action.value };
      case "RESET":
        return initialCount2;
      default:
        throw new Error("Invalid Action");
    }
  };

  // useReducer là useState bản nâng cao
  // cũng như useState trả về state và 1 func setState
  const [state, dispatch] = useReducer(stateReducer, initialCount2);

  return (
    <div>
      <h1>useState Example count 1</h1>
      <h4>count1: {count1}</h4>
      <div>
        <button
          onClick={() => {
            setCount1((pre) => ++pre);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setCount1((pre) => --pre);
          }}
        >
          -1
        </button>
      </div>

      <h1>useState Example count 2</h1>
      <h4>count2: {state.count}</h4>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "ADD", value: 5 });
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: "MINUS", value: 5 });
          }}
        >
          -5
        </button>
      </div>
    </div>
  );
}
