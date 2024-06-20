import React from "react";
import TokenField from "../TokenField";

export const SwapComponent: React.FC = () => {
  const [sellValue, setSellValue] = React.useState<number>(0);
  const [buyValue, setBuyValue] = React.useState<number>(0);

  const [sellCoinId, setSellCoinId] = React.useState<string>("");
  const [buyCoinId, setBuyCoinId] = React.useState<string>("");

  const onSwap = () => {
    const _sellValue = sellValue;
    setSellValue(buyValue);
    setBuyValue(_sellValue);

    const _sellCoinId = sellCoinId;
    setSellCoinId(buyCoinId);
    setBuyCoinId(_sellCoinId);
  };

  return (
    <div className='swap-component'>
      <div className='swap-component__input'>
        <TokenField
          labelText='sell'
          onCoinSelect={setSellCoinId}
          onValueChange={setSellValue}
          selectedCoinId={sellCoinId}
          value={sellValue}
        />
      </div>

      <div className='swap-component__button'>
        <button onClick={onSwap}>Swap</button>
      </div>

      <div className='swap-component__input'>
        <TokenField
          labelText='buy'
          onCoinSelect={setBuyCoinId}
          onValueChange={setBuyValue}
          selectedCoinId={buyCoinId}
          value={buyValue}
        />
      </div>
    </div>
  );
};
