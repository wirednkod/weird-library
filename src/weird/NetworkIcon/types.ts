export interface Props {
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
