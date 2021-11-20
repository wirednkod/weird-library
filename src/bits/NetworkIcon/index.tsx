import React, { FunctionComponent } from "react"
import styled from "styled-components"
import FontStyles from "./FontStyles"
import { NetworkIconProps } from "./types"

const Icon = styled.div<NetworkIconProps>`
  font-family: "Web3-Regular";
  font-size: ${(props) => props.size + props.size / 2}px;
  color: ${(props) => props.color || (props.active ? "#000" : "#ABB8BF")};
`

const NetworkName = styled.div<NetworkIconProps>`
  font-family: unset;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color || (props.active ? "#000" : "#ABB8BF")};
  padding-left: 10px;
  text-transform: capitalize;
`

export const NetworkIcon: FunctionComponent<NetworkIconProps> = ({
  network,
  size,
  active,
  show = "both",
  color,
}: NetworkIconProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FontStyles />
      {(show === "icon" || show === "both") && (
        <Icon size={size || 120} active={active} color={color}>
          {network}
        </Icon>
      )}
      {(show === "name" || show === "both") && (
        <NetworkName size={size || 120} active={active} color={color}>
          {network}
        </NetworkName>
      )}
    </div>
  )
}
