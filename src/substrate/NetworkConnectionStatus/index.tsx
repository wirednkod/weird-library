import React, { FunctionComponent } from "react"
import styled, { keyframes } from "styled-components"
import { Props, SizeType, StatusType } from "./types"

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const getSize = (size: SizeType): string => {
  switch (size) {
    case "small":
      return "5px"
    case "medium":
      return "10px"
    case "large":
      return "15px"
  }
}

const getStatus = (status: StatusType): string => {
  switch (status) {
    case "connected":
      return "#16DB9A"
    case "connecting":
      return "#FFFA02"
    case "disconnected":
      return "#C6D0D7"
  }
}

const SCircle = styled.div(({ size, status }: Props): any => {
  const sizePixels = getSize(size)
  const statusColor = getStatus(status)
  return {
    width: sizePixels,
    height: sizePixels,
    borderRadius: sizePixels,
    backgroundColor: statusColor,
  }
})

const SCircleParachain = styled.div(({ size, status }: Props): any => {
  const sizePixels = getSize(size)
  const statusColor = getStatus(status)
  const borderSize = size === "small" ? "0.7" : size === "medium" ? "1.5" : "2"
  return {
    width: parseFloat(sizePixels) / 3,
    height: (parseFloat(sizePixels) / 3) * 2,
    borderBottomRightRadius: sizePixels,
    borderTopRightRadius: sizePixels,
    borderColor: statusColor,
    background: "transparent",
    border: borderSize + "px solid " + statusColor,
    position: "relative",
    borderLeft: "0px",
  }
})

export const NetworkConnectionStatus: FunctionComponent<Props> = ({
  size = "medium",
  status = "connected",
  type = "relay",
}: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <SCircle {...{ size, status }} />
      {type === "para" && <SCircleParachain {...{ size, status }} />}
    </div>
  )
}
