import React, { FunctionComponent } from "react"
import styled from "styled-components"
import FontStyles from "./FontStyles"

import { Props } from "./types"

const Icon = styled.div<Props>`
  font-family: "Web3-Regular";
  font-size: ${(props) => props.size};
  color: ${(props) => (props.active ? "#000" : "#ABB8BF")};
`

export const NetworkIcon: FunctionComponent<Props> = ({
  network = "polkadot",
  size = "13rem",
  active,
}: Props) => {
  return (
    <>
      <FontStyles />
      <Icon size={size} active={active}>
        {network}
      </Icon>
    </>
  )
}
