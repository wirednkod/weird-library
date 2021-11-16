import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { NetworkConnectionProps, SizeType, StatusType } from "./types"
import useTheme from "../../hooks/useTheme"

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

const getStatus = (status: StatusType, theme: any): string => {
  switch (status) {
    case "connected":
      return theme.light?.colors?.primary || "#000"
    case "connecting":
      return theme.light?.colors?.secondary || "#fff"
    case "disconnected":
      return theme.light?.colors?.disabledColor || "#ccc"
  }
}

const SCircle = styled.div(
  ({ size, status, theme }: NetworkConnectionProps): any => {
    console.log("theeeee", theme)

    const sizePixels = getSize(size)
    const statusColor = getStatus(status, theme)
    return {
      width: sizePixels,
      height: sizePixels,
      borderRadius: sizePixels,
      backgroundColor: statusColor,
    }
  },
)

const SCircleParachain = styled.div(
  ({ size, status, theme }: NetworkConnectionProps): any => {
    const sizePixels = getSize(size)
    const statusColor = getStatus(status, theme)
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
    theme,
  }: NetworkConnectionProps) => {
    const them = useTheme(theme)
    return (
      <div style={{ display: "flex" }}>
        <SCircle {...{ size, status }} theme={them} />
        {type === "para" && (
          <SCircleParachain {...{ size, status }} theme={them} />
        )}
      </div>
    )
  }
