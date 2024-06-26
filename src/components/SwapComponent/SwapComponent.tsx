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

/**
 *
 * on SwapComponent we are handling more of the conversion logics and real time updates
 * for conversion of tokens.
 */
export const SwapComponent: React.FC = () => {
  const [sellValue, setSellValue] = React.useState<number>(0);
  const [buyValue, setBuyValue] = React.useState<number>(0);

  const [sellCoinId, setSellCoinId] = React.useState<string | undefined>(
    defaultSellCoinId
  );
  const [buyCoinId, setBuyCoinId] = React.useState<string | undefined>();

  /**
   * on Swap button click we will toggle the token type and values.
   */
  const onSwap = () => {
    const _sellValue = sellValue;
    setSellValue(buyValue);
    setBuyValue(_sellValue);

    const _sellCoinId = sellCoinId;
    setSellCoinId(buyCoinId);
    setBuyCoinId(_sellCoinId);
  };

  const onSellCoinSelect = (coinId: string) => {
    /**
     * if the swap coin is same as the other buy or sell coin,
     * we swap the values together with the coin type.
     */
    if (coinId === buyCoinId) {
      return onSwap();
    }

    setSellCoinId(coinId);
    updateValueFromRatio(
      buyValue,
      UpdateValueFromRatioType.BUY,
      coinId,
      buyCoinId
    );
  };

  const onBuyCoinSelect = (coinId: string) => {
    if (coinId === sellCoinId) {
      return onSwap();
    }

    setBuyCoinId(coinId);
    updateValueFromRatio(
      sellValue,
      UpdateValueFromRatioType.SELL,
      sellCoinId,
      coinId
    );
  };

  /**
   *
   * This function is used to update the value based on ratio asynchrounously, on updates
   * to coin types and values.
   * we are using the optional param of coinIDs to avoid a much complex useEffect scenario
   * which will need to be listen to updates to coin type changes.
   */
  const updateValueFromRatio = async (
    value: number,
    type: UpdateValueFromRatioType,
    _sellCoinId: string | undefined = sellCoinId,
    _buyCoinId: string | undefined = buyCoinId
  ) => {
    const fromToken =
      type === UpdateValueFromRatioType.SELL ? _sellCoinId : _buyCoinId;
    const toToken =
      type === UpdateValueFromRatioType.SELL ? _buyCoinId : _sellCoinId;

    if (!fromToken || !toToken) {
      return;
    }

    const ratio = await getTokenRatio(fromToken, toToken);

    if (!ratio) {
      return;
    }

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
      <TokenField
        labelText='sell'
        onCoinSelect={onSellCoinSelect}
        onValueChange={onSellValueChange}
        selectedCoinId={sellCoinId}
        value={sellValue}
      />

      <div className='swap-component__button'>
        <Button variant='primary' onClick={onSwap}>
          &#x2193;
        </Button>
      </div>

      <TokenField
        labelText='buy'
        onCoinSelect={onBuyCoinSelect}
        onValueChange={onBuyValueChange}
        selectedCoinId={buyCoinId}
        value={buyValue}
      />
    </div>
  );
};
