import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cross } from "../..";

import { Modal } from "../Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    disabled: {},
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Some",
  wordsWidth: 180,
  children: (
    <div>
      <p>Here is an example of text</p>
    </div>
  ),
  icon: <Cross color="#ffffff" />,
  close: () => {
    console.log("lol");
  },
};
export const WithDescription = Template.bind({});
WithDescription.args = {
  title: "Some",
  wordsWidth: 180,
  children: (
    <div>
      <p>Here is an example of text</p>
    </div>
  ),
  icon: <Cross color="#ffffff" />,
  description: "This is a description",
  close: () => {
    console.log("lol");
  },
};
