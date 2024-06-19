import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTokens } from "./services/Tokens";

function App() {
  useEffect(() => {
    getTokens().then((data) => {
      console.log(data);
    });
  }, []);

  return <div className='App'></div>;
}

export default App;
