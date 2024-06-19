import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTokens } from "./services/Tokens";
import DropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [selectedToken, setSelectedToken] = React.useState<Coin | null>(null);

  useEffect(() => {
    getTokens().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className='App'>
      <DropDown
        itemList={tokens}
        selectedValue={selectedToken?.value}
        onSelect={() => {}}
      />
    </div>
  );
}

export default App;
