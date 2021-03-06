import React from "react"

import styled from "styled-components"
import { TooltipProps, TooltipTextProps, TooltipCompProps } from "./types"
import { NetworkConnectionStatus } from ".."

const ToolTipText = styled.span<TooltipTextProps>`
  ${(props) => {
    let where
    let beforeOrAfter
    let arrowPosition
    let arrowPositonColors
    let bubblePush
    let bubblePosition

    switch (props.placement) {
      case "leftTop":
        where = "top: 70%;"
        bubblePush = "top: -100%;"
        bubblePosition = "right: 110%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "transparent transparent transparent rgba(0, 0, 0, 0.8)"
        arrowPosition = "right: -9%;"
        break
      case "leftBottom":
        where = "top: 3%;"
        bubblePush = "top: 70%;"
        bubblePosition = "right: 110%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "transparent transparent transparent rgba(0, 0, 0, 0.8)"
        arrowPosition = "right: -9%;"
        break
      case "left":
        where = "top: 40%;"
        bubblePush = "top: -20%;"
        bubblePosition = "right: 110%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "transparent transparent transparent rgba(0, 0, 0, 0.8)"
        arrowPosition = "right: -9%;"
        break
      case "topLeft":
        where = "top: 100%;"
        bubblePush = "bottom: 120%;"
        bubblePosition = "right: 85%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "rgba(0, 0, 0, 0.8) transparent transparent transparent"
        arrowPosition = "right: 2%;"
        break
      case "top":
        where = "top: 100%;"
        bubblePush = "bottom: 120%;"
        bubblePosition = "left: 15%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "rgba(0, 0, 0, 0.8) transparent transparent transparent"
        arrowPosition = "left: 45%;"
        break
      case "topRight":
        where = "top: 100%;"
        bubblePush = "bottom: 120%;"
        bubblePosition = "left: 130%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "rgba(0, 0, 0, 0.8) transparent transparent transparent"
        arrowPosition = "left: 2%;"
        break
      case "rightTop":
        where = "top: 70%;"
        bubblePush = "top: -100%;"
        bubblePosition = "right: -165%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "transparent rgba(0, 0, 0, 0.8) transparent transparent"
        arrowPosition = "left: -9%;"
        break
      case "right":
        where = "top: 40%;"
        bubblePush = "top: -20%;"
        bubblePosition = "right: -165%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "transparent rgba(0, 0, 0, 0.8) transparent transparent"
        arrowPosition = "left: -9%;"
        break
      case "rightBottom":
        where = "top: 3%;"
        bubblePush = "top: 70%;"
        bubblePosition = "right: -165%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "transparent rgba(0, 0, 0, 0.8) transparent transparent"
        arrowPosition = "left: -9%;"
        break
      case "bottomRight":
        where = "bottom: 100%;"
        bubblePush = "top: 120%;"
        bubblePosition = "left: 130%;"
        beforeOrAfter = "before"
        arrowPositonColors =
          "transparent transparent rgba(0, 0, 0, 0.8) transparent"
        arrowPosition = "left: 2%;"
        break
      case "bottom":
        where = "bottom: 100%;"
        bubblePush = "top: 120%;"
        bubblePosition = "left: 15%;"
        beforeOrAfter = "before"
        arrowPositonColors =
          "transparent transparent rgba(0, 0, 0, 0.8) transparent"
        arrowPosition = "left: 45%;"
        break
      case "bottomLeft":
        where = "bottom: 100%;"
        bubblePush = "top: 120%;"
        bubblePosition = "right: 85%;"
        beforeOrAfter = "before"
        arrowPositonColors =
          "transparent transparent rgba(0, 0, 0, 0.8) transparent"
        arrowPosition = "right: 2%;"
        break
      default:
        where = "top: 100%;"
        bubblePush = "bottom: 120%;"
        bubblePosition = "left: 15%;"
        beforeOrAfter = "after"
        arrowPositonColors =
          "rgba(0, 0, 0, 0.8) transparent transparent transparent"
        arrowPosition = "left: 45%;"
    }
    return `
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    visibility: hidden;
    width: 200px;
    background-color: transparent;
    color: transparent;
    text-align: center;
    border-radius: 4px;
    padding: 10px;
    position: absolute;
    z-index: 99999;
    ${bubblePush}
    ${bubblePosition}
    margin-left: -60px;
    &:${beforeOrAfter} {
      content: '';
      position: absolute;
      ${where}
      ${arrowPosition}
      margin-left: 0%;
      border: 10px solid transparent;
      border-color: ${arrowPositonColors}
    }
`
  }}
`

const Title = styled.div`
  font-size: 1.2rem;
  text-align: justify;
`

const Desc = styled.div`
  font-size: 0.8rem;
  text-align: justify;
  color: #ccc;
`

const ToolTipComponent = styled.div<TooltipProps>`
  ${(props) => {
    let arrowPositonColors
    switch (props.placement) {
      case "topLeft":
      case "topRight":
      case "top":
        arrowPositonColors =
          "rgba(0, 0, 0, 0.8) transparent transparent transparent"
        break
      case "bottomLeft":
      case "bottomRight":
      case "bottom":
        arrowPositonColors =
          "transparent transparent rgba(0, 0, 0, 0.8) transparent"
        break
      default:
        arrowPositonColors =
          "rgba(0, 0, 0, 0.8) transparent transparent transparent"
    }
    return `
    position: relative;
    display: inline-block;
    &:hover ${ToolTipText} {
      visibility: visible;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 10px;
      &:before {
        border-color: ${arrowPositonColors};
      }
    }
  `
  }}
`

const NetworkContent = styled.div`
  width: 20px;
  height: auto;
  display: flex;
  align-self: center;
`

const TextContent = styled.div`
  align-self: center;
`

export const Tooltip = ({
  children,
  title,
  text,
  placement = "top",
  network,
}: TooltipCompProps) => {
  return (
    <ToolTipComponent placement={placement}>
      {children}
      <ToolTipText placement={placement}>
        {network && (
          <NetworkContent>
            <NetworkConnectionStatus
              size={network.size}
              status={network.status}
              type={network.type}
            />
          </NetworkContent>
        )}
        <TextContent>
          {title && <Title>{title}</Title>}
          {text && <Desc>{text}</Desc>}
        </TextContent>
      </ToolTipText>
    </ToolTipComponent>
  )
}
