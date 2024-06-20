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
  {
    value: "tether",
    logo: coinLogos.tether,
    text: "USDT",
  },
  {
    value: "dai",
    logo: coinLogos.dai,
    text: "DAI",
  },
];

export const getTokens = async () => {
  return Promise.resolve(stubTokens);
};
