import { useEffect, useState } from "react"

export const useClickedOutside = (ref: any) => {
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      setClicked(ref.current && !ref.current.contains(event.target))
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return clicked
}
