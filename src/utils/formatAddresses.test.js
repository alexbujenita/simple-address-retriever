import formatAddresses from "./formatAddresses";

describe("formatAddress", () => {
  it("should process each string and return them without empty values", () => {
    const input = ["a, b, , , , T,", "X, , , , , N,"];
    const result = formatAddresses(input);
    const expected = ["a, b, T", "X, N"];
    expect(result).toMatchObject(expected);
  });
});
