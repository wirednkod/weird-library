/// <reference types="react" />
declare type ButtonType = "primary" | "secondary" | "simple";
export interface ButtonProps {
    onClick?: () => void;
    fontFamily?: string;
    borderRadius?: number;
    color?: string;
    theme?: any;
    backgroundColor?: string;
    padding?: string;
    borderColor?: string;
    borderSize?: number;
    children: any;
}
export interface LoginButtonProps {
    children: any;
    height?: number;
    isMetaMask?: boolean;
    isWalletConnect?: boolean;
    onClick: () => void;
}
export interface MenuButtonProps {
    height?: number;
}
export interface LoadingDotsProps {
    buttonType: ButtonType;
    loadingColor?: string;
}
export interface DotProps {
    buttonType: ButtonType;
    color?: string;
    delay: string;
}
export declare const MetaMask: () => JSX.Element;
export declare const WalletConnect: () => JSX.Element;
export {};
