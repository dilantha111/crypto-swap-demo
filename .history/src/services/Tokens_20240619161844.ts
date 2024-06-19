const stubTokens = [
  {
    value: "ethereum",
    logo: "",
    text: "Ethereum",
  },
  {
    value: "bitcoin",
    logo: "btc",
    text: "Bitcoin",
  },
  {
    value: "binancecoin",
    logo: "bnb",
    text: "Binance Coin",
  },
];

export const getTokens = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
  const data = await response.json();
  return data;
};
