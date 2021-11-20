export interface NetworkIconProps {
  network?: "polkadot" | "kusama" | "westend" | "rococo"
  size: number
  active?: boolean
  show?: "both" | "name" | "icon"
  color?: string
}
