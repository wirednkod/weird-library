import { ApiPromise, WsProvider } from "@polkadot/api"
import React, { useEffect, useState } from "react"

export const ApiPromiseContext: React.Context<ApiPromise> = React.createContext(
  {} as ApiPromise,
)

export const useApiConnection = (prov: string): ApiPromise => {
  const [apiPromise, setApiPromise] = useState<ApiPromise>({} as ApiPromise)

  useEffect(() => {
    const waitMe = async () => {
      const api = await ApiPromise.create({ provider: new WsProvider(prov) })
      setApiPromise(api)
    }

    waitMe()
  }, [])

  return apiPromise
}
