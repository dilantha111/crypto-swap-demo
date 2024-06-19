interface TokenFieldProps {
  labelText: string;
  value: number;
}

export const TokenField: React.FC<TokenFieldProps> = ({}) => {
  return (
    <div className='token-field'>
      <div className='token-field__input'>
        <input type='text' placeholder='Search Tokens' />
      </div>
    </div>
  );
};
