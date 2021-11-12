import { NetworkConnectionProps } from "../NetworkConnectionStatus/types"

type PositionType =
  | "topLeft"
  | "top"
  | "topRight"
  | "right"
  | "rightTop"
  | "rightBottom"
  | "bottomLeft"
  | "bottom"
  | "bottomRight"
  | "left"
  | "leftTop"
  | "leftBottom"

export interface TooltipCompProps {
  children: any
  title?: string
  text: string
  placement: PositionType
  network?: NetworkConnectionProps
}

export interface TooltipTextProps {
  placement: PositionType
}

export interface TooltipProps {
  placement: PositionType
}
