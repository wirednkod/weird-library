"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponentTenToDecrease = exports.exponentTenToIncrease = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
bignumber_js_1.default.config({
    EXPONENTIAL_AT: [-80, 80],
    DECIMAL_PLACES: 34,
    ROUNDING_MODE: bignumber_js_1.default.ROUND_DOWN,
});
var tenExponent = function (digits) {
    return new bignumber_js_1.default(10).exponentiatedBy(digits);
};
var exponentTenToIncrease = function (number, digits, decimals) {
    if (decimals === void 0) { decimals = -1; }
    number = number || "0";
    var bn = new bignumber_js_1.default(number);
    var exp = tenExponent(digits);
    var outcome = bn.multipliedBy(exp);
    if (decimals !== -1) {
        return outcome.toFixed(decimals);
    }
    return outcome.valueOf();
};
exports.exponentTenToIncrease = exponentTenToIncrease;
var exponentTenToDecrease = function (number, digits, decimals) {
    if (decimals === void 0) { decimals = -1; }
    number = number || "0";
    var bn = new bignumber_js_1.default(number);
    var exp = tenExponent(digits);
    var outcome = bn.dividedBy(exp);
    if (decimals !== -1) {
        return outcome.toFixed(decimals);
    }
    return outcome.valueOf();
};
exports.exponentTenToDecrease = exponentTenToDecrease;
