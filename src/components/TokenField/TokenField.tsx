import React, { useEffect } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import { Coin } from "../../types/coin.type";
import CoinDropDown from "../DropDown";

interface TokenFieldProps {
  labelText: string;
  value: number;
  placeholder?: string;
  selectedCoinId?: string;
  onCoinSelect: (coinId: string) => void;
  onValueChange: (value: number) => void;
}

export const TokenField: React.FC<TokenFieldProps> = ({
  labelText,
  value,
  selectedCoinId,
  placeholder = 0,
  onValueChange,
  onCoinSelect,
}) => {
  const tokens = React.useContext(TokenContext);
  const [selectedCoin, setSelectedCoin] = React.useState<Coin>(
    tokens[0] || null
  );

  useEffect(() => {
    setSelectedCoin(tokens[0]);
  }, [tokens]);

  useEffect(() => {
    if (selectedCoinId) {
      const coin = tokens.find((coin) => coin.value === selectedCoinId);
      coin && setSelectedCoin(coin);
    }
  }, [selectedCoinId, tokens]);

  const onCoinDropDownSelect = (coin: Coin) => {
    setSelectedCoin(coin);
    onCoinSelect(coin.value);
  };

  return (
    <div className='token-field'>
      <div className='token-field__input'>
        <label>{labelText}</label>
        <input
          value={value ? value.toString() : ""}
          type='number'
          placeholder={placeholder.toString()}
          onChange={(e) => onValueChange(Number(e.target.value))}
        />

        {selectedCoin ? (
          <CoinDropDown
            itemList={tokens}
            selectedCoin={selectedCoin}
            onSelect={onCoinDropDownSelect}
          />
        ) : null}
      </div>
    </div>
  );
};
