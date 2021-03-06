import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "../components/Buttons"

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: "Some Button",
}

export const DefaultDisabled = Template.bind({})
DefaultDisabled.args = {
  disabled: true,
  children: "A Button",
}
