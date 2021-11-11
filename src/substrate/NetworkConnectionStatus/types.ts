export interface NetworkConnectionProps {
  size: SizeType
  status: StatusType
  type?: ChainType
}

export type ChainType = "relay" | "para"
export type SizeType = "small" | "medium" | "large"
export type StatusType = "connected" | "connecting" | "disconnected"
