import React from "react" //, { useEffect, useState }
import { NetworkIcon } from "../.."
import { NetworkIconProps } from "../../bits/NetworkIcon/types"
import { AccountDisplayProps } from "./types"
import { Identicon } from "@polkadot/react-identicon"
import { ApiPromise } from "@polkadot/api"
import { useBalance } from "../../hooks/useBalance"

const NetworkDisplay = ({ network, show }: NetworkIconProps) => {
  let bColor: string = "transparent"
  switch (network) {
    case "polkadot":
      bColor = "rgb(230, 0, 122)"
      break
    case "kusama":
      bColor = "#000"
      break
    case "westend":
      bColor = "rgb(218, 104, 167)"
      break
    case "rococo":
      bColor = "rgb(111, 54, 220)"
      break
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        right: "0px",
        backgroundColor: bColor,
        padding: "0.1rem 1rem",
        borderBottomLeftRadius: "0.5rem",
        display: "flex",
        minHeight: "1.3rem",
      }}
    >
      <NetworkIcon
        size={show === "name" ? 14 : 10}
        network={network}
        show={show}
        color={"white"}
      />
    </div>
  )
}

export const AccountDisplay = ({
  address,
  size = 22,
  iconType = "polkadot",
  simple = true,
  showAddress = "full",
  network = "any",
  showNetwork = "both",
  shortAmount = 6,
  api,
}: AccountDisplayProps) => {
  const sa = shortAmount <= 0 || shortAmount > 23 ? 22 : shortAmount
  const add: string =
    showAddress && showAddress === "short"
      ? address.slice(0, sa) +
        "..." +
        address.slice(address.length - sa, address.length)
      : address

  const { chainTokens, formattedBalance } = useBalance(
    api as ApiPromise,
    address || "",
    true,
  )

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,.05)",
        padding: "1rem",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 1rem 0 0",
        }}
      >
        <Identicon value={address} size={size} theme={iconType} />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        {!simple && (
          <div style={{ fontSize: "1rem", color: "#FFF" }}>Account name</div>
        )}
        <div
          style={
            simple
              ? { fontSize: "1rem", color: "white" }
              : { fontSize: "0.8rem", color: "#999" }
          }
        >
          {add}
        </div>
      </div>
      <div
        style={{
          display: api && chainTokens !== "-" ? "flex" : "none",
          right: "1rem",
          position: "absolute",
          padding: "0 1rem 0 0",
        }}
      >
        {formattedBalance}
      </div>
      {network !== "any" && (
        <NetworkDisplay size={size} network={network} show={showNetwork} />
      )}
    </div>
  )
}
