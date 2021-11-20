import {
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
      <header className="App-header">
        <NetworkIcon
          size={50}
          active={false}
          network="kusama"
          showName={false}
        />
        <NetworkConnectionStatus
          type="para"
          status="connecting"
          theme={provTheme}
        />
        <Tooltip
          title={<NetworkIcon network="polkadot" size="20px" />}
          placement="right"
        >
          <Button>A Button</Button>
        </Tooltip>
      </header>
    </div>
  )
}

export default App
