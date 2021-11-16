import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { NetworkConnectionStatus } from ".."

export default {
  title: "Bits/Network Connection Status",
  component: NetworkConnectionStatus,
  argTypes: {},
} as ComponentMeta<typeof NetworkConnectionStatus>

const Template: ComponentStory<typeof NetworkConnectionStatus> = (args) => (
  <div style={{ margin: "100px 0 100px 40%" }}>
    <NetworkConnectionStatus {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  type: "relay",
  size: "medium",
  status: "disconnected",
}
