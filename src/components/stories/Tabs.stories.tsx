import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs } from "../Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeTab: 0,
  onTabChange: (i) => {},
  tabs: ["Tab One", "Tab Two"],
};
