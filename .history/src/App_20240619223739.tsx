import React, { useEffect } from "react";
import "./App.css";
import { getTokens } from "./services/Tokens";
import CoinDropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";
import TokenField from "./components/TokenField";
import { TokenContext } from "./contexts/TokenContext";

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
        <TokenField labelText='sell' onChange={setValue} value={value} />
      </TokenContext.Provider>
    </div>
  );
}

export default App;
