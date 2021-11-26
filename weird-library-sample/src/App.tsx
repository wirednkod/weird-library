import {
  AccountsTransfer,
  AccountDisplay,
  Buttons,
  NetworkConnectionStatus,
  NetworkIcon,
  Tabs,
  Tooltip,
  Loader,
  Input,
} from "weird-library"
import "./App.css"
import provTheme from "./provTheme.json"
import { ApiPromise, WsProvider } from "@polkadot/api"
import { useEffect, useState } from "react"

const Showcase = ({ children }: any) => {
  return (
    <div className="App-showcase">
      <div style={{ width: "10%" }}>&nbsp;</div>
      {children} <div style={{ width: "10%" }}>&nbsp;</div>
    </div>
  )
}

const { Button, MenuButton } = Buttons
interface AreaProps {
  title: string
}

const Area = ({ title }: AreaProps) => {
  return <div className="App-area">{title}</div>
}

function App() {
  const [apiPromise, setApiPromise] = useState<ApiPromise>({} as ApiPromise)
  const [activeTab, setActiveTab] = useState<number>(0)
  const [sampleActiveTab, setSampleActiveTab] = useState<number>(0)

  useEffect(() => {
    const load = async () => {
      const api = await ApiPromise.create({
        provider: new WsProvider("wss://westend-rpc.polkadot.io"),
        // provider: new WsProvider("ws://127.0.0.1:9944"),
      })
      setApiPromise(api)
    }

    load()
  }, [])

  return (
    <div className="App">
      <Tabs
        onTabChange={(i) => {
          setActiveTab(i || 0)
        }}
        activeTab={activeTab}
        tabs={["Components", "Recipes", "Snowflakes"]}
      />
      {activeTab === 0 && (
        <>
          <Area title="Network Font Icons" />
          <Showcase>
            <NetworkIcon
              size={50}
              active={false}
              network="polkadot"
              show="icon"
            />
            <NetworkIcon
              size={50}
              active={false}
              network="kusama"
              show="icon"
            />
            <NetworkIcon
              size={50}
              active={false}
              network="rococo"
              show="icon"
            />
            <NetworkIcon
              size={50}
              active={false}
              network="westend"
              show="icon"
            />
          </Showcase>
          <Area title="Network Connection" />
          <Showcase>
            <NetworkConnectionStatus
              size="large"
              type="relay"
              status="connected"
            />
            <NetworkConnectionStatus
              size="large"
              type="relay"
              status="connecting"
            />
            <NetworkConnectionStatus
              size="large"
              type="relay"
              status="disconnected"
            />
            <NetworkConnectionStatus
              size="large"
              type="para"
              status="connected"
            />
            <NetworkConnectionStatus
              size="large"
              type="para"
              status="connecting"
            />
            <NetworkConnectionStatus
              size="large"
              type="para"
              status="disconnected"
            />
          </Showcase>

          <Area title="Network Connection (Custom Theme)" />
          <Showcase>
            <NetworkConnectionStatus
              size="large"
              type="para"
              status="connected"
              theme={provTheme}
            />
            <NetworkConnectionStatus
              size="large"
              type="para"
              status="connecting"
              theme={provTheme}
            />
            <NetworkConnectionStatus
              size="large"
              type="para"
              status="disconnected"
              theme={provTheme}
            />
          </Showcase>
          <Area title="Other various components" />
          <Showcase>
            <MenuButton>Menu 1</MenuButton>
            <MenuButton>Menu 2</MenuButton>
            <MenuButton>Menu 3</MenuButton>
            <MenuButton>Menu 4</MenuButton>
          </Showcase>
          <Showcase>
            <Button>A Button</Button>
            <Loader />
          </Showcase>
          <Showcase>
            <div style={{ width: "300px" }}>
              <Tabs
                onTabChange={(i?: number): void => setSampleActiveTab(i || 0)}
                activeTab={sampleActiveTab}
                tabs={["Tab 1", "Tab 2", "Tab 3"]}
              />
            </div>
            <Tooltip
              title={<NetworkIcon network="polkadot" size={13} />}
              text="some"
              placement="left"
            >
              <Button>Tooltip</Button>
            </Tooltip>
            <Input value={"1.234"} error="Error message" />
          </Showcase>
        </>
      )}
      {activeTab === 1 && (
        <>
          <Area title="Api not provided" />
          <Showcase>
            <div
              style={{ display: "flex", flexDirection: "column", width: "60%" }}
            >
              <AccountDisplay
                address="5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"
                network="kusama"
                size={15}
              />
              <AccountDisplay
                address="5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"
                network="polkadot"
                showNetwork={"icon"}
                showAddress={"short"}
                simple
                size={15}
              />
              <AccountDisplay
                address="5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"
                network="westend"
                showAddress={"short"}
                simple={false}
                size={22}
              />
              <AccountDisplay
                address="5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"
                network="westend"
                showNetwork={"name"}
                simple={false}
                size={22}
              />
            </div>
          </Showcase>
          <Area title="Api provided" />
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
        </>
      )}
      {activeTab === 2 && (
        <>
          <Area title="❄️Vertical❄️" />
          <Showcase>
            <div style={{ width: "10%" }}>&nbsp;</div>
            <AccountsTransfer
              from={"5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"}
              to={"5Fep4H8JDGmRWMZn2C6rpEpJM6xtPaiTzTAcqLPcJX4WVvzU"}
              amount={"0.02"}
              api={apiPromise}
            />
            <div style={{ width: "10%" }}>&nbsp;</div>
          </Showcase>
          <Area title="❄️Horizontal❄️" />
          <Showcase>
            <div style={{ width: "10%" }}>&nbsp;</div>
            <AccountsTransfer
              direction="row"
              from={"5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq"}
              to={"5Fep4H8JDGmRWMZn2C6rpEpJM6xtPaiTzTAcqLPcJX4WVvzU"}
              amount={"0.02"}
              api={apiPromise}
            />
            <div style={{ width: "10%" }}>&nbsp;</div>
          </Showcase>
        </>
      )}
    </div>
  )
}

export default App
