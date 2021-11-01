import React from "react"
import styled, { keyframes } from "styled-components"

import {
  LoadingDotsProps,
  ButtonProps,
  DotProps,
  LoginButtonProps,
  MenuButtonProps,
  MetaMask,
  WalletConnect,
} from "./types"

import { getTheme } from "../../utils"

export const Button = styled.button<ButtonProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { button } = theme
    return `
  font-family: ${theme.fontFamily || `'Poppins', sans-serif`};
  font-weight: ${theme.fontWeight || "500"};
  font-size: ${theme.fontSize || "14"}px;
  border: ${button.default.borderSize}px solid ${button.default.borderColor};
  display: flex;
  background: ${button.default.background};
  color: ${button.default.color};
  padding: ${button.padding.normal};
  border-radius: ${button.default.borderRadius}px;
  &:hover:not([disabled]) {
    cursor: pointer;
  }
	&:hover([disabled]){
		cursor: not-allowed;
	}
  `
  }}
`

export const MenuButton = styled(Button)<MenuButtonProps>`
  width: 100%;
  padding: 10px 42px;
  height: ${(props) => props.height}px;
  background-color: #000;
  align-items: center;
  display: flex;
  border: 0;
  flex-direction: row;
  &:hover:not([disabled]) {
    background-color: grey;
    cursor: pointer;
  }
  p {
    margin-left: 8px;
    color: #fff;
  }
`

const BounceAnimation = keyframes`
  0% { transform: scale(0.1, 0.1) }
  50% { transform: scale(0.9, 0.9) }
  100% { transform: scale(0.1, 0.1) }
`

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const Dot = styled.div<DotProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { button } = theme
    return `
    background-color: ${button[props.buttonType].color};
    border-radius: 50%;
    width: 5px;
    height: 5px;
    margin: 0 2px;
  `
  }}
  /* Animation */
  animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: ${(props) => props.delay};
`

export function LoadingDots(props: LoadingDotsProps) {
  return (
    <DotWrapper>
      <Dot
        delay="0s"
        buttonType={props.buttonType}
        color={props.loadingColor}
      />
      <Dot
        delay=".3s"
        buttonType={props.buttonType}
        color={props.loadingColor}
      />
      <Dot
        delay=".5s"
        buttonType={props.buttonType}
        color={props.loadingColor}
      />
    </DotWrapper>
  )
}

export function LoginButton({
  children,
  isMetaMask,
  isWalletConnect,
  height,
  onClick,
}: LoginButtonProps) {
  return (
    <MenuButton height={height || 40} onClick={onClick}>
      {isMetaMask && <MetaMask />}
      {isWalletConnect && <WalletConnect />}
      <p>{children}</p>
    </MenuButton>
  )
}
