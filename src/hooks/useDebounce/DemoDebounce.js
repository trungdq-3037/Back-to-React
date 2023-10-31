import React, { useEffect, useState } from "react";
import useDebounce from "./index"; // Import your custom hook

function DemoDebounce() {
  const [inputValue, setInputValue] = useState("");
  
  // delay set value
  const debouncedValue = useDebounce(inputValue, 1000); // Debounce with a 300ms delay

  const fetchData = (value) => {
    console.log("Fetched data =", value);
  };

  // Whenever debouceValue changes, call api to fetch data
  useEffect(() => {
    fetchData(debouncedValue);
  }, [debouncedValue]);

  // You can use debouncedValue in your component to access the debounced input value
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default DemoDebounce;
