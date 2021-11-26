import React, { useEffect, useState } from "react"
import { AccountsTransferProps } from "./types"
import { AccountDisplay } from "../.."
import { Input } from "../../bits"
import { BN } from "bn.js"
import { Keyring } from "@polkadot/api"
import { Button } from "../../bits/Buttons"

const keyring = new Keyring({ type: "sr25519" })

export const AccountsTransfer = ({
  api,
  from,
  to,
  amount,
  direction = "column",
}: AccountsTransferProps) => {
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [tokenSymbol, setTokenSymbol] = useState<[string] | undefined>()
  const [tokenAmount, setTokenAmount] = useState<string>(amount)

  useEffect(() => {
    const getter = async () => {
      const chainInfo = await api?.registry.getChainProperties()
      console.log("chainInfo", chainInfo?.tokenSymbol)
      setTokenSymbol(chainInfo?.tokenSymbol.toHuman() as unknown as [string])
    }

    if (api) {
      setLoading(false)
    }
    getter()
  }, [api])

  const handleSubmit = async (e: any): Promise<void> => {
    try {
      e.preventDefault()
      setMessage("")
      setLoading(true)
      const sender = keyring.getPair(from)

      await api?.tx.balances
        .transfer(to, new BN(tokenAmount))
        .signAndSend(sender, (result) => {
          setMessage(`Current transaction status ${result.status}`)
          if (result.status.isInBlock) {
            setMessage(`Transaction Block hash: ${result.status.asInBlock}`)
          } else if (result.status.isFinalized) {
            setMessage(`Block hash:: ${result.status.asFinalized}.`)
          }
        })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setMessage(`Error: ${err}`)
    }
  }

  let args = {}
  if (direction === "row") {
    args = {
      showAddress: "short",
      simple: false,
    }
  }

  const Token = () => {
    return (
      <div style={{ fontSize: "0.9rem" }}>
        {tokenSymbol ? tokenSymbol[0] : "-"}
      </div>
    )
  }

  return loading ? (
    <>Loading</>
  ) : (
    <div style={{ display: "flex", flexDirection: direction, width: "100%" }}>
      <AccountDisplay address={from} {...args} api={api} size={30} />
      <AccountDisplay address={to} {...args} api={api} size={30} />
      <Input
        component={<Token />}
        value={tokenAmount}
        onChange={(val) => setTokenAmount(val.target.value)}
        componentPosition="right"
      />
      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        Send
      </Button>
      <div style={{ fontSize: "1.2rem", color: "red" }}>{message}</div>
    </div>
  )
}
