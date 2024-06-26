import Button from "react-bootstrap/Button";

import "./ConnectWalletButton.css";
import React from "react";
import Web3 from "web3";

interface ConnectWalletButtonProps {
  account: string | undefined;
  setAccount: (account: string | undefined) => void;
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  account,
  setAccount,
}) => {
  const handleConnectWallet = async () => {
    try {
      // Check if Web3 is injected by MetaMask
      if ((window as any).ethereum !== undefined) {
        const web3 = new Web3((window as any).ethereum);

        // Request access to the user's MetaMask account
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        // Get the user's account
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        window.alert("Wallet connected successfully !!!");
      } else {
        window.alert(
          "MetaMask is not installed. Please install to proceed !!!"
        );
      }
    } catch (error) {
      console.error(error);
      window.alert("Error connecting to MetaMask !!!");
    }
  };

  return (
    <div className='connect-wallet-button d-grid'>
      <Button variant='primary' size='lg' onClick={handleConnectWallet}>
        Connect Wallet
      </Button>
    </div>
  );
};
