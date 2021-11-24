import { ApiPromise } from "@polkadot/api"
import { Balance } from "@polkadot/types/interfaces"
import { formatBalance } from "@polkadot/util"
import BN from "bn.js"
import { useCallback } from "react"
import { useApiSubscription } from "./useApiSubscription"
import { useMountedState } from "./useMountedState"

type State = {
  chainTokens: string
  formattedBalance: string
  free: Balance
}

const ZERO = new BN(0)

const initValues = {
  chainTokens: "-",
  formattedBalance: "0",
  free: new BN(ZERO) as unknown as Balance,
}

export const useBalance = (
  api: ApiPromise,
  address: string,
  providedSi: boolean = false,
): State => {
  const [state, setState] = useMountedState<State>(initValues)

  const getBalanceCall = useCallback(
    () =>
      api.query.system.account(address, ({ data }): void => {
        setState({
          chainTokens: data.registry.chainTokens[0],
          formattedBalance: formatBalance(data.free, {
            decimals: api.registry.chainDecimals[0],
            withUnit: api.registry.chainTokens[0],
            withSi: providedSi,
          }),
          free: data.free,
        })
      }),
    [address, api, providedSi, setState],
  )

  useApiSubscription(getBalanceCall, Boolean(address))

  return state as State
}
