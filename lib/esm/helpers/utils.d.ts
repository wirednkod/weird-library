import { BigNumber } from "bignumber.js";
export declare const truncate: (fullStr: string, strLen: number, separator: string) => string;
export declare enum EvalMessages {
    GIBBERISH = "Input error. Use number or float numbers.",
    ZERO = "You cannot send 0 funds",
    SUCCESS = "",
    SYMBOL_ERROR = "Provided symbol is not correct (e.g. k, m)",
    GENERAL_ERROR = "Something is wrong with the input."
}
export declare function evalUnits(input: string, chainDecimals: number): [BigNumber | null, string];
export declare function transformToBaseUnit(estFee: string, chainDecimals: number, returnType?: "number" | "string", decAmount?: number): string | number;
