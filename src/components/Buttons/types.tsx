type ButtonType = "primary" | "secondary" | "simple"
export interface ButtonProps {
  onClick?: (e: any) => void
  fontWeight?: number
  fontSize?: number
  fontFamily?: string
  borderRadius?: number
  color?: string
  theme?: any
  backgroundColor?: string
  padding?: string
  borderColor?: string
  borderSize?: number
  children: any
}

export interface LoginButtonProps {
  children: any
  height?: number
  isMetaMask?: boolean
  isWalletConnect?: boolean
  onClick: () => void
}

export interface MenuButtonProps {
  height?: number
}

export interface LoadingDotsProps {
  buttonType: ButtonType
  loadingColor?: string
}

export interface DotProps {
  buttonType: ButtonType
  color?: string
  delay: string
}
