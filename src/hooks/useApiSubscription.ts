import type { UnsubscribePromise } from "@polkadot/api/types"
import { useEffect } from "react"

export const useApiSubscription = (
  fn: () => Promise<unknown>,
  isReady: boolean,
): void => {
  useEffect(() => {
    if (!isReady) {
      return
    }

    try {
      const unsub = fn() as UnsubscribePromise
      return () => {
        isReady &&
          unsub &&
          unsub
            .then((u) => u())
            .catch((e) => {
              console.error("error unsubscribing", e)
              return
            })
      }
    } catch (e) {
      console.error("error executing subscription", e)
      return
    }
  }, [fn, isReady])
}
