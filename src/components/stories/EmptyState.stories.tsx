import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { EmptyState } from "../EmptyState"

export default {
  title: "Components/Empty State",
  component: EmptyState,
  argTypes: {
    type: {
      options: ["info", "success", "warning", "error", "aqua", "mint", "white"],
    },
  },
} as ComponentMeta<typeof EmptyState>

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: "Seems that you’re not participating in any pools yet.",
}
export const DisabledBorder = Template.bind({})
DisabledBorder.args = {
  text: "Seems that you’re not participating in any pools yet.",
  disabledBorder: true,
}

export const WithAction = Template.bind({})
WithAction.args = {
  text: "Seems that you’re not participating in any pools yet.",
  actionText: "See available pools",
  action: () => {},
}
