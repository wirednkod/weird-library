import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tabs } from "../components/Tabs"

export default {
  title: "components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Default = Template.bind({})
Default.args = {
  activeTab: 0,
  onTabChange: () => {},
  tabs: ["Tab One", "Tab Two"],
}
