import React, { useEffect } from "react";
import "./App.css";
import { getTokens } from "./services/Tokens";
import CoinDropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
      setSelectedValue(data[0].text);
    });
  }, []);

  return (
    <div className='App'>
      {selectedValue ? (
        <CoinDropDown
          itemList={tokens}
          selectedCoin={selectedValue}
          onSelect={(val) => {
            setSelectedValue(val);
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
