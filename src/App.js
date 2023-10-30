import React from "react";
import ExampleManageState from "./corehook/ExampleManageState";
import ExampleUseContext from "./corehook/ExampleUseContext";

function App() {
  return (
    <div className="App">
      <h1> Example mange state</h1>
      <ExampleManageState></ExampleManageState>
      <div>================================================</div>

    
      <ExampleUseContext></ExampleUseContext>
      <div>================================================</div>
    </div>
  );
}

export default App;
