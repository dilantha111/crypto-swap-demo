import React from "react";
import { TokenContext } from "../../contexts/TokenContext";
import { Coin } from "../../types/coin.type";
import CoinDropDown from "../DropDown";

interface TokenFieldProps {
  labelText: string;
  value: number;
  placeholder?: string;
  onChange: (value: number) => void;
}

export const TokenField: React.FC<TokenFieldProps> = ({
  labelText,
  value,
  placeholder = 0,
  onChange,
}) => {
  const tokens = React.useContext(TokenContext);
  const [selectedCoin, setSelectedCoin] = React.useState<Coin | null>(null);

  console.log(tokens, "from feild");

  return (
    <div className='token-field'>
      <div className='token-field__input'>
        <label>{labelText}</label>
        <input
          value={value ? value.toString() : ""}
          type='number'
          placeholder={placeholder.toString()}
          onChange={(e) => onChange(Number(e.target.value))}
        />

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
    </div>
  );
};
