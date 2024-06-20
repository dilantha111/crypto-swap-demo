import React, { useEffect } from "react";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";
import SwapComponent from "./components/SwapComponent";
import { TokenContext } from "./contexts/TokenContext";
import { Coin } from "./types/coin.type";
import { getTokens } from "./services/token.service";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
    });
  }, []);

  return (
    <div className='App'>
      <TokenContext.Provider value={tokens}>
        <h1>Swap</h1>
        <SwapComponent />
        <ConnectWalletButton />
      </TokenContext.Provider>
    </div>
  );
}

export default App;
