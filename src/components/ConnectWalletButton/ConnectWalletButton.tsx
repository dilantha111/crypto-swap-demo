import Button from "react-bootstrap/Button";

import "./ConnectWalletButton.css";

export const ConnectWalletButton: React.FC = () => {
  return (
    <div className='connect-wallet-button d-grid'>
      <Button variant='primary' size='lg'>
        Connect Wallet
      </Button>
    </div>
  );
};
