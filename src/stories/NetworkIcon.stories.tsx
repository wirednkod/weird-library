import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { NetworkIcon } from "../bits"

export default {
  title: "Bits/Network Icon",
  component: NetworkIcon,
  argTypes: {},
} as ComponentMeta<typeof NetworkIcon>

const Template: ComponentStory<typeof NetworkIcon> = (args) => (
  <div style={{ margin: "100px 0 100px 40%" }}>
    <NetworkIcon {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  size: "130px",
  active: true,
  network: "polkadot",
  showName: true,
}
