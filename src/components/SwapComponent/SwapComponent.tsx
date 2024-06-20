import React from "react";
import TokenField from "../TokenField";
import { defaultSellCoinId } from "../../consts/coin-ids";

export const SwapComponent: React.FC = () => {
  const [sellValue, setSellValue] = React.useState<number>(0);
  const [buyValue, setBuyValue] = React.useState<number>(0);

  const [sellCoinId, setSellCoinId] = React.useState<string | undefined>(
    defaultSellCoinId
  );
  const [buyCoinId, setBuyCoinId] = React.useState<string | undefined>();

  const onSwap = () => {
    const _sellValue = sellValue;
    setSellValue(buyValue);
    setBuyValue(_sellValue);

    const _sellCoinId = sellCoinId;
    setSellCoinId(buyCoinId);
    setBuyCoinId(_sellCoinId);
  };

  const onSellCoinSelect = (coinId: string) => {
    if (coinId === buyCoinId) {
      return onSwap();
    }

    setSellCoinId(coinId);
  };

  const onBuyCoinSelect = (coinId: string) => {
    if (coinId === sellCoinId) {
      return onSwap();
    }

    setBuyCoinId(coinId);
  };

  return (
    <div className='swap-component'>
      <div className='swap-component__input'>
        <TokenField
          labelText='sell'
          onCoinSelect={onSellCoinSelect}
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
          onCoinSelect={onBuyCoinSelect}
          onValueChange={setBuyValue}
          selectedCoinId={buyCoinId}
          value={buyValue}
        />
      </div>
    </div>
  );
};
