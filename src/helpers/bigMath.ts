import BigNumber from "bignumber.js";

BigNumber.config({
  EXPONENTIAL_AT: [-80, 80],
  DECIMAL_PLACES: 34,
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
});

const tenExponent = (digits: number) => {
  return new BigNumber(10).exponentiatedBy(digits);
};

export const exponentTenToIncrease = (
  number: string,
  digits: number,
  decimals: number = -1,
) => {
  number = number || "0";
  const bn = new BigNumber(number);
  const exp = tenExponent(digits);
  let outcome = bn.multipliedBy(exp);
  if (decimals !== -1) {
    return outcome.toFixed(decimals);
  }
  return outcome.valueOf();
};

export const exponentTenToDecrease = (
  number: string,
  digits: number,
  decimals: number = -1,
) => {
  number = number || "0";
  const bn = new BigNumber(number);
  const exp = tenExponent(digits);
  let outcome = bn.dividedBy(exp);
  if (decimals !== -1) {
    return outcome.toFixed(decimals);
  }
  return outcome.valueOf();
};
