import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AccountDisplay } from "../recipes/AccountDisplay"

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
  address: "14ojxBcoCEacmKYoQopPE9vNo9nhWRAbX88bED7uJP6KKSxN",
}
