const stubRatios: Record<string, Record<string, number>> = {
  ethereum: {
    bitcoin: 0.1,
    binancecoin: 0.01,
  },
  bitcoin: {
    ethereum: 10,
    binancecoin: 0.1,
  },
  binancecoin: {
    ethereum: 100,
    bitcoin: 10,
  },
};

export const getTokenRatio = async (fromToken: string, toToken: string) => {
  if (fromToken === toToken) {
    return Promise.resolve(1);
  }

  return Promise.resolve(stubRatios[fromToken][toToken]);
};
