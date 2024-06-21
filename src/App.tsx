import React, { useEffect } from "react";
import "./App.css";
import ConnectWalletButton from "./components/ConnectWalletButton";
import Navigation from "./components/Navigation";
import SwapComponent from "./components/SwapComponent";
import { TokenContext } from "./contexts/TokenContext";
import { getTokens } from "./services/token.service";
import { Coin } from "./types/coin.type";

/**
 *
 * Main App component act as the TokenContext provider and main container for the application.
 */
function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [account, setAccount] = React.useState<string | undefined>();

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
    });
  }, []);

  return (
    <div className='App'>
      <Navigation account={account} />

      <TokenContext.Provider value={tokens}>
        <h1 className='main-title'>Swap anytime, anywhere</h1>
        <div className='main-container'>
          <SwapComponent />
          <ConnectWalletButton account={account} setAccount={setAccount} />
        </div>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
