/// <reference types="react" />
import { LoadingDotsProps, ButtonProps, LoginButtonProps, MenuButtonProps } from "./types";
export declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const MenuButton: import("styled-components").StyledComponent<"button", any, ButtonProps & MenuButtonProps, never>;
export declare function LoadingDots(props: LoadingDotsProps): JSX.Element;
export declare function LoginButton({ children, isMetaMask, isWalletConnect, height, onClick, }: LoginButtonProps): JSX.Element;
