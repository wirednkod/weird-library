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
  | "leftBottom";

export interface TooltipCompProps {
  children: any;
  text: string;
  placement: PositionType;
}

export interface TooltipTextProps {
  placement: PositionType;
}

export interface TooltipProps {
  placement: PositionType;
}
