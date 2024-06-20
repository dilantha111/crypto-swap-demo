import React, { useEffect } from "react";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";
import Navigation from "./components/Navigation";
import SwapComponent from "./components/SwapComponent";
import { TokenContext } from "./contexts/TokenContext";
import { getTokens } from "./services/token.service";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
    });
  }, []);

  return (
    <div className='App'>
      <Navigation />

      <TokenContext.Provider value={tokens}>
        <h1 className='main-title'>Swap anytime, anywhere</h1>
        <div className='main-container'>
          <SwapComponent />
          <ConnectWalletButton />
        </div>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
