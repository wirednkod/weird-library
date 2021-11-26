import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AccountsTransfer } from "../snowflakes/AccountsTransfer"
import { ApiPromise, WsProvider } from "@polkadot/api"

export default {
  title: "snowflakes/AccountsTransfer",
  component: AccountsTransfer,
  argTypes: {
    simple: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof AccountsTransfer>

const Template: ComponentStory<typeof AccountsTransfer> = (args) => (
  <AccountsTransfer {...args}></AccountsTransfer>
)
export const Default = Template.bind({})

Default.args = {
  from: "5DAAQmCA9oED818XFyfKow4td6Zyk8mjEAoTDTMk2GGPD7sq",
  to: "5Fep4H8JDGmRWMZn2C6rpEpJM6xtPaiTzTAcqLPcJX4WVvzU",
  amount: 15,
}
