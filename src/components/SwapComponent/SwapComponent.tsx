import React from "react";
import TokenField from "../TokenField";
import { defaultSellCoinId } from "../../consts/coin-ids";
import { getTokenRatio } from "../../services/token-ratio.service";
import { getTokenValue } from "../../utils/token-value.utils";
import Button from "react-bootstrap/Button";

import "./SwapComponent.css";

enum UpdateValueFromRatioType {
  SELL,
  BUY,
}

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
    updateValueFromRatio(buyValue, UpdateValueFromRatioType.BUY);
  };

  const onBuyCoinSelect = (coinId: string) => {
    if (coinId === sellCoinId) {
      return onSwap();
    }

    setBuyCoinId(coinId);
    updateValueFromRatio(sellValue, UpdateValueFromRatioType.SELL);
  };

  const updateValueFromRatio = async (
    value: number,
    type: UpdateValueFromRatioType
  ) => {
    const fromToken =
      type === UpdateValueFromRatioType.SELL ? sellCoinId : buyCoinId;
    const toToken =
      type === UpdateValueFromRatioType.SELL ? buyCoinId : sellCoinId;

    if (!fromToken || !toToken) {
      return;
    }

    const ratio = await getTokenRatio(fromToken, toToken);
    const tokenValue = getTokenValue(ratio, value);

    if (type === UpdateValueFromRatioType.SELL) {
      setBuyValue(tokenValue);
    } else {
      setSellValue(tokenValue);
    }
  };

  const onSellValueChange = (value: number) => {
    setSellValue(value);
    updateValueFromRatio(value, UpdateValueFromRatioType.SELL);
  };

  const onBuyValueChange = (value: number) => {
    setBuyValue(value);
    updateValueFromRatio(value, UpdateValueFromRatioType.BUY);
  };

  return (
    <div className='swap-component'>
      <div className='swap-component__input'>
        <TokenField
          labelText='sell'
          onCoinSelect={onSellCoinSelect}
          onValueChange={onSellValueChange}
          selectedCoinId={sellCoinId}
          value={sellValue}
        />
      </div>

      <div className='swap-component__button'>
        <Button variant='primary' onClick={onSwap}>
          &#x2193;
        </Button>
      </div>

      <div className='swap-component__input'>
        <TokenField
          labelText='buy'
          onCoinSelect={onBuyCoinSelect}
          onValueChange={onBuyValueChange}
          selectedCoinId={buyCoinId}
          value={buyValue}
        />
      </div>
    </div>
  );
};
