import React, { useEffect } from "react";
import "./App.css";
import { getTokens } from "./services/Tokens";
import DropDown from "./components/DropDown";
import { Coin } from "./types/coin.type";

function App() {
  const [tokens, setTokens] = React.useState<Coin[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  useEffect(() => {
    getTokens().then((data) => {
      setTokens(data);
      setSelectedValue(data[0].value);
    });
  }, []);

  return (
    <div className='App'>
      {selectedValue ? (
        <DropDown
          itemList={tokens}
          selectedValue={selectedValue}
          onSelect={(val) => {
            setSelectedValue(val);
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
