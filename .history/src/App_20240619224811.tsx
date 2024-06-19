import React, { useEffect } from "react";
import "./App.css";
import SwapComponent from "./components/SwapComponent";
import { TokenContext } from "./contexts/TokenContext";
import { getTokens } from "./services/Tokens.service";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);

  const [value, setValue] = React.useState<number>(0);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
    });
  }, []);

  return (
    <div className='App'>
      <TokenContext.Provider value={tokens}>
        <SwapComponent />
        {/* <TokenField labelText='sell' onChange={setValue} value={value} /> */}
      </TokenContext.Provider>
    </div>
  );
}

export default App;
