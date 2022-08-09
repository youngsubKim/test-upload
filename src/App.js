import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile?.current?.click();
  };

  return (
    <div className="App">
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <button onClick={onButtonClick}>업로드</button>
    </div>
  );
}

export default App;
