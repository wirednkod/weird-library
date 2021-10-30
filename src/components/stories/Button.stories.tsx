import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Buttons";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "A Button",
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
  children: "A Button",
};
