import {
  AccountDisplay,
  Buttons,
  NetworkConnectionStatus,
  NetworkIcon,
  Tooltip,
} from "weird-library"
import "./App.css"
import provTheme from "./provTheme.json"
import { ApiPromise, WsProvider } from "@polkadot/api"
import { useEffect, useState } from "react"

const Showcase = ({ children }: any) => {
  return <div className="App-showcase">{children}</div>
}

const Title = ({ children }: any) => {
  return <div className="App-title">{children}</div>
}

const Area = ({ children }: any) => {
  return <div className="App-area">{children}</div>
}

function App() {
  const [apiPromise, setApiPromise] = useState<ApiPromise>({} as ApiPromise)

  const { Button } = Buttons

  useEffect(() => {
    ApiPromise.create({
      provider: new WsProvider("wss://westend-rpc.polkadot.io"),
    }).then((apiSomething) => {
      setApiPromise(apiSomething)
    })
  }, [])

  return (
    <div className="App">
      <Title>Components</Title>
      <Showcase>
        <NetworkIcon size={50} active={false} network="kusama" show="icon" />
        <Tooltip
          title={<NetworkIcon network="polkadot" size={20} />}
          text="some"
          placement="right"
        >
          Tooltip
        </Tooltip>
        <NetworkConnectionStatus
          size="large"
          type="para"
          status="connecting"
          theme={provTheme}
        />
        <Button>A Button</Button>
      </Showcase>
      <Title>An account without Api provided</Title>
      <Showcase>
        <div style={{ width: "35%" }}>&nbsp;</div>
        <AccountDisplay
          address="5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"
          network="kusama"
          simple={false}
          size={15}
        />
        <div style={{ width: "35%" }}>&nbsp;</div>
      </Showcase>
      <Title>An account with Api provided</Title>
      <Showcase>
        <div style={{ width: "35%" }}>&nbsp;</div>
        <AccountDisplay
          address="5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"
          network="westend"
          showNetwork="both"
          simple
          size={22}
          api={apiPromise}
        />
        <div style={{ width: "35%" }}>&nbsp;</div>
      </Showcase>
      <Showcase>
        <div style={{ width: "35%" }}>&nbsp;</div>
        <AccountDisplay
          address="5Fep4H8JDGmRWMZn2C6rpEpJM6xtPaiTzTAcqLPcJX4WVvzU"
          network="westend"
          showNetwork="both"
          simple={false}
          size={30}
          api={apiPromise}
        />
        <div style={{ width: "35%" }}>&nbsp;</div>
      </Showcase>
    </div>
  )
}

export default App
