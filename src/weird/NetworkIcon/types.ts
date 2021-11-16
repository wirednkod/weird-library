export interface NetworkIconProps {
  network?:
    | "polkadot"
    | "kusama"
    | "westend"
    | "kulupu"
    | "rococo"
    | "substrate"
  size: number
  active?: boolean
  showName?: boolean
}
