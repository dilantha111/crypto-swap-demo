const stubRatios: Record<string, Record<string, number>> = {
  ethereum: {
    bitcoin: 0.1,
    binancecoin: 0.01,
    dai: 2,
    tether: 2,
  },
  bitcoin: {
    ethereum: 10,
    binancecoin: 0.1,
    dai: 20,
    tether: 20,
  },
  binancecoin: {
    ethereum: 100,
    bitcoin: 10,
    dai: 200,
    tether: 200,
  },
  dai: {
    ethereum: 0.5,
    bitcoin: 0.05,
    binancecoin: 0.005,
    tether: 0.5,
  },
  tether: {
    ethereum: 0.5,
    bitcoin: 0.05,
    binancecoin: 0.005,
    dai: 2,
  },
};

export const getTokenRatio = async (fromToken: string, toToken: string) => {
  if (fromToken === toToken) {
    return Promise.resolve(1);
  }

  return Promise.resolve(stubRatios[fromToken][toToken]);
};
