import React, { useEffect } from "react";
import "./App.css";
import { getTokens } from "./services/Tokens";
import CoinDropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";
import TokenField from "./components/TokenField";
import { TokenContext } from "./contexts/TokenContext";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = React.useState<Coin | null>(null);

  const [value, setValue] = React.useState<number>(0);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
      setSelectedCoin(data[0]); // Select the first coin by default. Since we are stubbing. Otherwise will have to set the ETC as default.
    });
  }, []);

  return (
    <div className='App'>
      {selectedCoin ? (
        <CoinDropDown
          itemList={tokens}
          selectedCoin={selectedCoin}
          onSelect={(val) => {
            setSelectedCoin(val);
          }}
        />
      ) : null}

      <TokenContext.Provider value={tokens}>
        <TokenField labelText='sell' onChange={setValue} value={value} />
      </TokenContext.Provider>
    </div>
  );
}

export default App;
