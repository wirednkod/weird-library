import { useState, useEffect } from "react"
import defaultTheme from "../theme.json"

export const useTheme = (provTheme?: any) => {
  const [theme, setTheme] = useState<any>({})
  const [themeLoaded, setThemeLoaded] = useState<boolean>(false)
  useEffect(() => {
    if (provTheme) {
      //TODO: providedTheme must be merged with defaultTheme
      setTheme(provTheme)
    } else {
      setTheme(defaultTheme)
    }
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded }
}

export default useTheme
