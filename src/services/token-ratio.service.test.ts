import { getTokenRatio } from "./token-ratio.service";

describe("getTokenRatio", () => {
  it("should return the ratio between ethereum and bitcoin", async () => {
    const ratio = await getTokenRatio("ethereum", "bitcoin");
    expect(ratio).toBe(0.1);
  });

  it("should return the ratio between binancecoin and dai", async () => {
    const ratio = await getTokenRatio("binancecoin", "dai");
    expect(ratio).toBe(200);
  });

  it("should return the ratio between tether and ethereum", async () => {
    const ratio = await getTokenRatio("tether", "ethereum");
    expect(ratio).toBe(0.5);
  });

  it("should return undefined if the ratio is not found", async () => {
    const ratio = await getTokenRatio("unknownToken", "ethereum");
    expect(ratio).toBeUndefined();
  });
});
