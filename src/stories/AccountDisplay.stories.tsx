import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AccountDisplay } from "../recipes/AccountDisplay"
import { ApiPromise, WsProvider } from "@polkadot/api"

export default {
  title: "pieces/AccountDisplay",
  component: AccountDisplay,
  argTypes: {
    simple: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof AccountDisplay>

const Template: ComponentStory<typeof AccountDisplay> = (args) => (
  <AccountDisplay {...args}></AccountDisplay>
)

export const Default = Template.bind({})

Default.args = {
  iconType: "polkadot",
  size: 22,
  address: "5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq",
}
