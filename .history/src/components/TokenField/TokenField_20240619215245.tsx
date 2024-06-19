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
  return (
    <div className='token-field'>
      <div className='token-field__input'>
        <input
          type='number'
          placeholder={placeholder.toString()}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
