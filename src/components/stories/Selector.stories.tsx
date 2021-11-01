import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Selector } from "../Selector"

export default {
  title: "Components/Selector",
  component: Selector,
  argTypes: {},
} as ComponentMeta<typeof Selector>

const Template: ComponentStory<typeof Selector> = (args) => (
  <Selector {...args} />
)

export const Default = Template.bind({})
Default.args = {
  selected: 0,
  onSelect: (i) => {},
  items: ["1D", "1Y"],
}
export const MultipleElements = Template.bind({})
MultipleElements.args = {
  selected: 0,
  onSelect: (i) => {},
  items: ["1D", "1W", "1M", "1Y"],
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  selected: 0,
  onSelect: (i) => {},
  items: ["1D", "1W", "1M", "1Y"],
}
