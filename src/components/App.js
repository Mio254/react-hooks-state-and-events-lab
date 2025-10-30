import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${mode}`}>
      <h1>Hello World</h1>
      <button onClick={toggleMode}>{mode === "light" ? "Dark Mode" : "Light Mode"}</button>
    </div>
  );
}

export default App;
