interface TokenFieldProps {
  labelText: string;
  value: number;
  onChange: (value: number) => void;
}

export const TokenField: React.FC<TokenFieldProps> = ({
  labelText,
  value,
  onChange,
}) => {
  return (
    <div className='token-field'>
      <div className='token-field__input'>
        <input
          type='number'
          placeholder='Search Tokens'
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
