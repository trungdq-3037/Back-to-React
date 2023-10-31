import { createContext, useReducer } from "react";
import ExampleManageState from "./corehook/ExampleManageState";
import ExampleUseContext from "./corehook/ExampleUseContext";

import stateReducer, { initialState } from "./native-global-state/reducer";
import { MINUS, ADD, RESET } from "./native-global-state/action";
import Main from "./native-global-state/Compoments/Main";
import ComA from "./native-global-state/Compoments/ComA";
import ComB from "./native-global-state/Compoments/ComB";

export const CounterContext = createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <div className="App">
      <h1> Example mange state</h1>
      <ExampleManageState></ExampleManageState>
      <div>================================================</div>

      <ExampleUseContext></ExampleUseContext>
      <div>================================================</div>

      <br />
      <br />
      <br />
      <br />
      <CounterContext.Provider value={[state, dispatch]}>
        <h1>Root state : {state.count}</h1>
        <br />
        <br />
        <div>
          <button
            onClick={() => {
              dispatch({ type: ADD, value: 5 });
            }}
          >
            ADD root
          </button>
          <button
            onClick={() => {
              dispatch({ type: RESET });
            }}
          >
            RESETroot
          </button>
          <button
            onClick={() => {
              dispatch({ type: MINUS, value: 5 });
            }}
          >
            MINUSroot
          </button>
        </div>
        <br />
        <div>=======================</div>
        <Main>
          <ComA></ComA>
          <ComB></ComB>
        </Main>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
