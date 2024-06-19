import { coinLogos } from "../consts/coin-logos";

const stubTokens = [
  {
    value: "ethereum",
    logo: coinLogos.ethereum,
    text: "Ethereum",
  },
  {
    value: "bitcoin",
    logo: coinLogos.bitcoin,
    text: "Bitcoin",
  },
  {
    value: "binancecoin",
    logo: coinLogos.binancecoin,
    text: "Binance Coin",
  },
];

export const getTokens = async () => {
  return Promise.resolve(stubTokens);
};
