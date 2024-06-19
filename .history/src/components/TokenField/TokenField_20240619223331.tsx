import React from "react";
import { TokenContext } from "../../contexts/TokenContext";

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

  console.log(tokens);
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
      </div>
    </div>
  );
};
