import { getTokenValue } from "../utils/token-value.utils";

describe("getTokenValue", () => {
  it("should return the correct token value when ratio and inputValue are positive numbers", () => {
    const ratio = 0.5;
    const inputValue = 10;
    const expectedValue = 5;

    const result = getTokenValue(ratio, inputValue);

    expect(result).toEqual(expectedValue);
  });
});
