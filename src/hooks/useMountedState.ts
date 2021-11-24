import { useCallback, useState, useRef } from "react"
import { useIsMounted } from "./useIsMounted"

/**
 * Like React's [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
 * but it makes sure the component that uses this state hook is mounted before updating state
 * @param {D} initialValue
 * @returns {[D, Dispatch<D>]} an array of 2 items
 * the first is the current state, the second is a function that enables
 * updating the state if the component is not mounted
 *
 * D is the type passed when then useMountedState is used
 * e.g. const [pass, setPass] = useMountedState<string>('someString');
 */
export const useMountedState = <D>(initialState: D | (() => D)) => {
  const isMounted = useIsMounted()
  const counter = useRef(0)

  const [state, setState] = useState<D>(initialState)

  const setMountedState = useCallback(
    (value: D) => {
      if (isMounted()) {
        setState(value)
      } else {
        counter.current = counter.current + 1
      }
      if (counter.current > 1) {
        console.log("Unmounted component tried to update their state.")
      }
    },
    [isMounted],
  )

  return [state, setMountedState] as const
}
