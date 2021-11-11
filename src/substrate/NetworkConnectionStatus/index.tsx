import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { NetworkConnectionProps, SizeType, StatusType } from "./types"

const getSize = (size: SizeType): string => {
  switch (size) {
    case "small":
      return "10px"
    case "medium":
      return "15px"
    case "large":
      return "20px"
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

const SCircle = styled.div(({ size, status }: NetworkConnectionProps): any => {
  const sizePixels = getSize(size)
  const statusColor = getStatus(status)
  return {
    width: sizePixels,
    height: sizePixels,
    borderRadius: sizePixels,
    backgroundColor: statusColor,
  }
})

const SCircleParachain = styled.div(
  ({ size, status }: NetworkConnectionProps): any => {
    const sizePixels = getSize(size)
    const statusColor = getStatus(status)
    const borderSize = size === "small" ? "1.5" : size === "medium" ? "2" : "3"
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
  },
)

export const NetworkConnectionStatus: FunctionComponent<NetworkConnectionProps> =
  ({
    size = "medium",
    status = "connected",
    type = "relay",
  }: NetworkConnectionProps) => {
    return (
      <div style={{ display: "flex" }}>
        <SCircle {...{ size, status }} />
        {type === "para" && <SCircleParachain {...{ size, status }} />}
      </div>
    )
  }
