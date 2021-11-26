import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Loader } from "../bits/Loader"

export default {
  title: "Bits/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithText = Template.bind({})
WithText.args = {
  productTitle: "Parity",
  wordsWidth: 180,
}
