import { BigNumber } from "bignumber.js";
export var truncate = function (fullStr, strLen, separator) {
    if (fullStr.length <= strLen)
        return fullStr;
    separator = separator || "...";
    var sepLen = separator.length, charsToShow = strLen - sepLen, frontChars = Math.ceil(charsToShow / 2), backChars = Math.floor(charsToShow / 2);
    return (fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars));
};
export var EvalMessages;
(function (EvalMessages) {
    EvalMessages["GIBBERISH"] = "Input error. Use number or float numbers.";
    EvalMessages["ZERO"] = "You cannot send 0 funds";
    EvalMessages["SUCCESS"] = "";
    EvalMessages["SYMBOL_ERROR"] = "Provided symbol is not correct (e.g. k, m)";
    EvalMessages["GENERAL_ERROR"] = "Something is wrong with the input.";
})(EvalMessages || (EvalMessages = {}));
var getSiValue = function (si) {
    return new BigNumber(10).exponentiatedBy(new BigNumber(si));
};
var si = [
    { value: getSiValue(24), symbol: "y", isMil: true },
    { value: getSiValue(21), symbol: "z", isMil: true },
    { value: getSiValue(18), symbol: "a", isMil: true },
    { value: getSiValue(15), symbol: "f", isMil: true },
    { value: getSiValue(12), symbol: "p", isMil: true },
    { value: getSiValue(9), symbol: "n", isMil: true },
    { value: getSiValue(6), symbol: "μ", isMil: true },
    { value: getSiValue(3), symbol: "m", isMil: true },
    { value: new BigNumber(1), symbol: "" },
    { value: getSiValue(3), symbol: "k" },
    { value: getSiValue(6), symbol: "M" },
    { value: getSiValue(9), symbol: "G" },
    { value: getSiValue(12), symbol: "T" },
    { value: getSiValue(15), symbol: "P" },
    { value: getSiValue(18), symbol: "E" },
    { value: getSiValue(21), symbol: "Y" },
    { value: getSiValue(24), symbol: "Z" },
];
var allowedSymbols = si
    .map(function (s) { return s.symbol; })
    .join(", ")
    .replace(", ,", ",");
var floats = new RegExp("^[+]?[0-9]*[.,]{1}[0-9]*$");
var ints = new RegExp("^[+]?[0-9]+$");
var alphaFloats = new RegExp("^[+]?[0-9]*[.,]{1}[0-9]*[" + allowedSymbols + "]{1}$");
var alphaInts = new RegExp("^[+]?[0-9]*[" + allowedSymbols + "]{1}$");
export function evalUnits(input, chainDecimals) {
    //sanitize input to remove + char if exists
    input = input && input.replace("+", "");
    if (!floats.test(input) &&
        !ints.test(input) &&
        !alphaInts.test(input) &&
        !alphaFloats.test(input)) {
        return [null, EvalMessages.GIBBERISH];
    }
    // find the character from the alphanumerics
    var symbol = input.replace(/[0-9.,]/g, "");
    // find the value from the si list
    var siVal = si.find(function (s) { return s.symbol === symbol; });
    var numberStr = input.replace(symbol, "").replace(",", ".");
    var numeric = new BigNumber(0);
    if (!siVal) {
        return [null, EvalMessages.GIBBERISH];
    }
    var decimalsBn = new BigNumber(10).exponentiatedBy(new BigNumber(chainDecimals));
    var containDecimal = numberStr.includes(".");
    var _a = numberStr.split("."), decPart = _a[0], fracPart = _a[1];
    var fracDecimals = (fracPart === null || fracPart === void 0 ? void 0 : fracPart.length) || 0;
    var fracExp = new BigNumber(10).exponentiatedBy(new BigNumber(fracDecimals));
    numeric = containDecimal
        ? new BigNumber(new BigNumber(decPart)
            .multipliedBy(fracExp)
            .plus(new BigNumber(fracPart)))
        : new BigNumber(new BigNumber(numberStr));
    numeric = numeric.multipliedBy(decimalsBn);
    if (containDecimal) {
        numeric = siVal.isMil
            ? numeric.div(siVal.value).div(fracExp)
            : numeric.multipliedBy(siVal.value).div(fracExp);
    }
    else {
        numeric = siVal.isMil
            ? numeric.div(siVal.value)
            : numeric.multipliedBy(siVal.value);
    }
    if (numeric.eq(new BigNumber(0))) {
        return [null, EvalMessages.ZERO];
    }
    return [numeric, EvalMessages.SUCCESS];
}
export function transformToBaseUnit(estFee, chainDecimals, returnType, decAmount) {
    var t = estFee.length - chainDecimals;
    var s = "";
    // if chainDecimals are more than the estFee length
    if (t < 0) {
        // add 0 in front (1 less as we want the 0.)
        for (var i = 0; i < Math.abs(t) - 1; i++) {
            s += "0";
        }
        s = s + estFee;
        // remove trailing 0s
        for (var i = 0; i < s.length; i++) {
            if (s.slice(s.length - 1) !== "0")
                break;
            s = s.substring(0, s.length - 1);
        }
        s = "0." + s;
    }
    else {
        s = (parseInt(estFee) / Math.pow(10, chainDecimals)).toString();
    }
    var fin = parseFloat(s) !== 0 ? s : "0";
    if (!returnType || returnType === "string") {
        return fin;
    }
    return parseFloat(fin).toFixed(decAmount && decAmount >= 0 ? decAmount : 4);
}
