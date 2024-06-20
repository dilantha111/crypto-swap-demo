import { coinLogos } from "../consts/coin-logos";

const stubTokens = [
  {
    value: "ethereum",
    logo: coinLogos.ethereum,
    text: "ETH",
  },
  {
    value: "bitcoin",
    logo: coinLogos.bitcoin,
    text: "BTC",
  },
  {
    value: "binancecoin",
    logo: coinLogos.binancecoin,
    text: "BNB",
  },
];

export const getTokens = async () => {
  return Promise.resolve(stubTokens);
};
