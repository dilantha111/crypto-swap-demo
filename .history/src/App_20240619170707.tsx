import React, { useEffect } from "react";
import "./App.css";
import { getTokens } from "./services/Tokens";
import CoinDropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = React.useState<Coin | null>(null);

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
    </div>
  );
}

export default App;
