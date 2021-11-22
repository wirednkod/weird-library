export interface AccountWithBalanceProps {
  address: string
  size: number
  iconType?: "polkadot" | "substrate" | "beachball" | "jdenticon"
  showAddress?: "full" | "short"
  shortAmount?: number
  simple?: boolean
  network?: "polkadot" | "kusama" | "westend" | "rococo" | "any"
  showNetwork?: "icon" | "name" | "both"
}
