import React from "react";

export const SwapComponent: React.FC = () => {
  const [sellValue, setSellValue] = React.useState<number>(0);
  const [buyValue, setBuyValue] = React.useState<number>(0);

  return <div className='swap-component'></div>;
};
