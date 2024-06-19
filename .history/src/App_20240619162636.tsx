import React, { useEffect } from "react";
import "./App.css";
import { getTokens } from "./services/Tokens";
import DropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [selectedToken, setSelectedToken] = React.useState<Coin | null>(null);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
      setSelectedToken(data[0]);
    });
  }, []);

  return (
    <div className='App'>
      <DropDown
        itemList={tokens}
        selectedValue={selectedToken?.value}
        onSelect={() => {
          setSelectedToken(selectedToken);
        }}
      />
    </div>
  );
}

export default App;
