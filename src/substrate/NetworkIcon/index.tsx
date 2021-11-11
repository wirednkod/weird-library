import React, { FunctionComponent } from "react"
import styled from "styled-components"
import FontStyles from "./FontStyles"
import { Props } from "./types"

const Icon = styled.div<Props>`
  font-family: "Web3-Regular";
  font-size: ${(props) => props.size + props.size / 2}px;
  color: ${(props) => (props.active ? "#000" : "#ABB8BF")};
`

const NetworkName = styled.div<Props>`
  font-family: unset;
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.active ? "#000" : "#ABB8BF")};
  padding-left: 10px;
  text-transform: capitalize;
`

export const NetworkIcon: FunctionComponent<Props> = ({
  network = "polkadot",
  size,
  active,
  showName = true,
}: Props) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FontStyles />
      <Icon size={size || 120} active={active}>
        {network}
      </Icon>
      {showName && (
        <NetworkName size={size || 120} active={active}>
          {network}
        </NetworkName>
      )}
    </div>
  )
}
