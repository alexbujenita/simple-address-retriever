/**
 * formatAddress
 * @param {Array<String>} addrArray the array of addresses
 * @returns {string}
 */
export default (addrArray) =>
  addrArray.map((addr) => {
    const array = addr.split(",");
    const linesAndTown = [array[0], array[1], array[5]];
    return linesAndTown
      .map((strng) => strng.trim())
      .filter(Boolean)
      .join(", ");
  });
