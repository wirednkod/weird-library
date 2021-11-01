import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InputLabel } from "../InputLabel"
import { Wallet } from "../.."
export default {
  title: "Components/Input Label",
  component: InputLabel,
  argTypes: {},
} as ComponentMeta<typeof InputLabel>

const Template: ComponentStory<typeof InputLabel> = (args) => (
  <InputLabel {...args}>{args.children}</InputLabel>
)

export const Default = Template.bind({})
Default.args = {
  children: "This is a label",
}
export const WithIcon = Template.bind({})
WithIcon.args = {
  children: "This is a label with icon",
  icon: <Wallet />,
}

export const WithIconOnTheRight = Template.bind({})
WithIconOnTheRight.args = {
  children: "This is a label with icon on the right",
  icon: <Wallet />,
  iconPosition: "right",
}
