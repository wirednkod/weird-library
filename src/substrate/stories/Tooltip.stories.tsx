import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tooltip } from ".."

export default {
  title: "Substrate/Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ margin: "100px 0 100px 40%" }}>
    <Tooltip {...args}>
      <div
        style={{
          width: "100px",
          border: "1px solid red",
          padding: "20px",
          color: "red",
          display: "block",
          float: "left",
        }}
      >
        Something
      </div>
    </Tooltip>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: "Network is syncing",
  text: "#9872342947529345023",
  placement: "bottom",
}

export const DefaultWithNetwork = Template.bind({})
DefaultWithNetwork.args = {
  title: "Network is syncing",
  text: "#9872342947529345023",
  placement: "left",
  network: {
    size: "small",
    status: "connected",
    type: "relay",
  },
}

export const DefaultWithNetworkParachain = Template.bind({})
DefaultWithNetworkParachain.args = {
  title: "Network is connecting",
  text: "#9872342947529345023",
  placement: "left",
  network: {
    size: "small",
    status: "connecting",
    type: "para",
  },
}
