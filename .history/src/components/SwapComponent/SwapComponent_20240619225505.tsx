import React from "react";
import TokenField from "../TokenField";

export const SwapComponent: React.FC = () => {
  const [sellValue, setSellValue] = React.useState<number>(0);
  const [buyValue, setBuyValue] = React.useState<number>(0);

  return (
    <div className='swap-component'>
      <div className='swap-component__input'>
        <TokenField
          labelText='sell'
          onChange={setSellValue}
          value={sellValue}
        />
      </div>

      <div className='swap-component__button'>
        <button>Swap</button>
      </div>

      <div className='swap-component__input'>
        <TokenField labelText='buy' onChange={setBuyValue} value={buyValue} />
      </div>
    </div>
  );
};
