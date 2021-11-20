import {
  AccountDisplay,
  Buttons,
  NetworkConnectionStatus,
  NetworkIcon,
  Tooltip,
} from "weird-library"
import "./App.css"
import provTheme from "./provTheme.json"

function App() {
  const { Button } = Buttons
  return (
    <div className="App">
      <div className="App-header">
        <NetworkIcon size={50} active={false} network="kusama" show="icon" />
        <Tooltip
          title={<NetworkIcon network="polkadot" size="20px" />}
          placement="right"
        >
          Tooltip
        </Tooltip>
        <NetworkConnectionStatus
          type="para"
          status="connecting"
          theme={provTheme}
        />
        <Button>A Button</Button>
      </div>
      <div className="App-header">
        <AccountDisplay />
      </div>
    </div>
  )
}

export default App
