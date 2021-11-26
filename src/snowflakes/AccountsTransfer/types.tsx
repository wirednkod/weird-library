import { ApiPromise } from "@polkadot/api"

export interface AccountsTransferProps {
  from: string
  to: string
  amount: string
  api?: ApiPromise
  direction?: "column" | "row"
}
