export interface SizeAndColorInterface {
  size?: "web" | "mobile";
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

export interface FullLogoProps {
  logo?: string;
  alignItems?: "baseline" | "center" | "end";
  width?: string;
  justifyContent?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "center"
    | "end";
  logoColor?: string;
  textColor?: string;
  logoWidth?: number;
  textWidth?: number;
}
