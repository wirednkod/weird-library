import BigNumber from "bignumber.js";
BigNumber.config({
    EXPONENTIAL_AT: [-80, 80],
    DECIMAL_PLACES: 34,
    ROUNDING_MODE: BigNumber.ROUND_DOWN,
});
var tenExponent = function (digits) {
    return new BigNumber(10).exponentiatedBy(digits);
};
export var exponentTenToIncrease = function (number, digits, decimals) {
    if (decimals === void 0) { decimals = -1; }
    number = number || "0";
    var bn = new BigNumber(number);
    var exp = tenExponent(digits);
    var outcome = bn.multipliedBy(exp);
    if (decimals !== -1) {
        return outcome.toFixed(decimals);
    }
    return outcome.valueOf();
};
export var exponentTenToDecrease = function (number, digits, decimals) {
    if (decimals === void 0) { decimals = -1; }
    number = number || "0";
    var bn = new BigNumber(number);
    var exp = tenExponent(digits);
    var outcome = bn.dividedBy(exp);
    if (decimals !== -1) {
        return outcome.toFixed(decimals);
    }
    return outcome.valueOf();
};
