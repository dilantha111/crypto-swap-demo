import { getTokens } from "./token.service";

describe("Token Service", () => {
  it("should return an array of tokens", async () => {
    const tokens = await getTokens();
    expect(Array.isArray(tokens)).toBe(true);
    expect(tokens.length).toBeGreaterThan(0);
  });

  it("should return tokens with valid properties", async () => {
    const tokens = await getTokens();
    tokens.forEach((token) => {
      expect(token).toHaveProperty("value");
      expect(token).toHaveProperty("logo");
      expect(token).toHaveProperty("text");
    });
  });
});
