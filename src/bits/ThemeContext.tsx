import React from "react"
import ReactDOM from "react-dom"

const ThemeContext = React.createContext<any>({})
export class ThemeProvider extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={this.props.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
