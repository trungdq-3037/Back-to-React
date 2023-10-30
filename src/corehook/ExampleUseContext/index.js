import { useContext, createContext, useState } from "react";
import Parrent from "./Parrent";
// ================================
const ColorContext = createContext({ color: "RED" });

// this function will be export
export const useGetColor = () => useContext(ColorContext);

// The useContext hook is a technique for passing data down the component tree without having to pass props through components.
// It is used by creating a provider component and often by creating a hook to consume the value in a child component.

export default function ExampleUseContext() {
  const [color, setColor] = useState({ color: "BLUE" });

  return (
    <ColorContext.Provider value={color}>
      <h1> Example useContext state</h1>
      <h2> Color {color?.color}</h2>
      <button
        onClick={() => {
          setColor({ color: "BLUE" });
        }}
      >
        Change to blue
      </button>
      <button
        onClick={() => {
          setColor({ color: "RED" });
        }}
      >
        Change to red
      </button>
      <button
        onClick={() => {
          setColor({ color: "GREEN" });
        }}
      >
        Change to green
      </button>
      ===
      <br />
      <Parrent />
    </ColorContext.Provider>
  );
}
