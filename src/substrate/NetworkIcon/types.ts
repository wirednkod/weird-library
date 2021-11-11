export interface Props {
  network?:
    | "polkadot"
    | "kusama"
    | "westend"
    | "kulupu"
    | "rococo"
    | "substrate"
  size?: string
  active: boolean
}
