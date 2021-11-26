import { BN } from "bn.js"
import { decodeAddress, encodeAddress } from "@polkadot/keyring"
import { hexToU8a, isHex } from "@polkadot/util"

export const truncate = (
  fullStr: string,
  strLen: number,
  separator: string,
): string => {
  if (fullStr.length <= strLen) return fullStr

  separator = separator || "..."

  const sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2)

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  )
}

export enum EvalMessages {
  GIBBERISH = "Input error. Use number or float numbers.",
  ZERO = "You cannot send 0 funds",
  SUCCESS = "",
  SYMBOL_ERROR = "Provided symbol is not correct (e.g. k, m)",
  GENERAL_ERROR = "Something is wrong with the input.",
}

const getSiValue = (si: number) => new BN(10).pow(new BN(si))

const si = [
  { value: getSiValue(24), symbol: "y", isMil: true },
  { value: getSiValue(21), symbol: "z", isMil: true },
  { value: getSiValue(18), symbol: "a", isMil: true },
  { value: getSiValue(15), symbol: "f", isMil: true },
  { value: getSiValue(12), symbol: "p", isMil: true },
  { value: getSiValue(9), symbol: "n", isMil: true },
  { value: getSiValue(6), symbol: "μ", isMil: true },
  { value: getSiValue(3), symbol: "m", isMil: true },
  { value: new BN(1), symbol: "" },
  { value: getSiValue(3), symbol: "k" },
  { value: getSiValue(6), symbol: "M" },
  { value: getSiValue(9), symbol: "G" },
  { value: getSiValue(12), symbol: "T" },
  { value: getSiValue(15), symbol: "P" },
  { value: getSiValue(18), symbol: "E" },
  { value: getSiValue(21), symbol: "Y" },
  { value: getSiValue(24), symbol: "Z" },
]

const allowedSymbols = si
  .map((s) => s.symbol)
  .join(", ")
  .replace(", ,", ",")
const floats = new RegExp("^[+]?[0-9]*[.,]{1}[0-9]*$")
const ints = new RegExp("^[+]?[0-9]+$")
const alphaFloats = new RegExp(
  "^[+]?[0-9]*[.,]{1}[0-9]*[" + allowedSymbols + "]{1}$",
)
const alphaInts = new RegExp("^[+]?[0-9]*[" + allowedSymbols + "]{1}$")

export const evalUnits = (
  input: string,
  chainDecimals: number,
): [number | null, string] => {
  //sanitize input to remove + char if exists
  input = input && input.replace("+", "")
  if (
    !floats.test(input) &&
    !ints.test(input) &&
    !alphaInts.test(input) &&
    !alphaFloats.test(input)
  ) {
    return [null, EvalMessages.GIBBERISH]
  }
  // find the character from the alphanumerics
  const symbol = input.replace(/[0-9.,]/g, "")
  // find the value from the si list
  const siVal = si.find((s) => s.symbol === symbol)
  const numberStr = input.replace(symbol, "").replace(",", ".")
  let numeric: any = new BN(0)

  if (!siVal) {
    return [null, EvalMessages.GIBBERISH]
  }
  const decimalsBn = new BN(10).pow(new BN(chainDecimals))
  const containDecimal = numberStr.includes(".")
  const [decPart, fracPart] = numberStr.split(".")
  const fracDecimals = fracPart?.length || 0
  const fracExp = new BN(10).pow(new BN(fracDecimals))
  numeric = containDecimal
    ? new BN(new BN(decPart).mul(fracExp).add(new BN(fracPart)))
    : new BN(new BN(numberStr))
  numeric = numeric.mul(decimalsBn)
  if (containDecimal) {
    numeric = siVal.isMil
      ? numeric.div(siVal.value).div(fracExp)
      : numeric.mul(siVal.value).div(fracExp)
  } else {
    numeric = siVal.isMil ? numeric.div(siVal.value) : numeric.mul(siVal.value)
  }
  if (numeric.eq(new BN(0))) {
    return [null, EvalMessages.ZERO]
  }
  return [numeric, EvalMessages.SUCCESS]
}

export const transformToBaseUnit = (
  estFee: string,
  chainDecimals: number,
  returnType?: "number" | "string",
  decAmount?: number,
): string | number => {
  const t = estFee.length - chainDecimals
  let s = ""
  // if chainDecimals are more than the estFee length
  if (t < 0) {
    // add 0 in front (1 less as we want the 0.)
    for (let i = 0; i < Math.abs(t) - 1; i++) {
      s += "0"
    }
    s = s + estFee
    // remove trailing 0s
    for (let i = 0; i < s.length; i++) {
      if (s.slice(s.length - 1) !== "0") break
      s = s.substring(0, s.length - 1)
    }
    s = "0." + s
  } else {
    s = (parseInt(estFee) / 10 ** chainDecimals).toString()
  }
  const fin = parseFloat(s) !== 0 ? s : "0"
  if (!returnType || returnType === "string") {
    return fin
  }
  return parseFloat(fin).toFixed(decAmount && decAmount >= 0 ? decAmount : 4)
}

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const isValidSubstateAddress = (address: string): boolean => {
  try {
    encodeAddress(
      isHex(address) ? hexToU8a(address.toString()) : decodeAddress(address),
    )
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
