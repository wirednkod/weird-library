import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tooltip } from "../components"

export default {
  title: "components/Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ margin: "100px 0 100px 40%" }}>
    <Tooltip {...args}>Tooltip</Tooltip>
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
