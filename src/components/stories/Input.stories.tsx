import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Wallet } from "../..";

import { Input } from "../Input";
import styled from "styled-components";

const InputComponentLeft = styled.div`
  padding-left: 16px;
`;
const InputComponentRight = styled.div`
  padding-right: 16px;
`;

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Amount",
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: "1.3241",
};

export const WithError = Template.bind({});
WithError.args = {
  value: "1.3241",
  error: "Error Message",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "1.3241",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Amount",
  component: (
    <InputComponentLeft>
      <Wallet />
    </InputComponentLeft>
  ),
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Search",
  component: (
    <InputComponentRight>
      <Wallet />
    </InputComponentRight>
  ),
  componentPosition: "right",
  large: true,
};

export const LargeActive = Template.bind({});
LargeActive.args = {
  placeholder: "Search",
  value: "0x8885af4612de6d3cca48bd044bed4a2e49337b5240e5f436d951dbc59bdb0b75",
  component: (
    <InputComponentRight>
      <Wallet />
    </InputComponentRight>
  ),
  componentPosition: "right",
  large: true,
};

export const LargeError = Template.bind({});
LargeError.args = {
  placeholder: "Search",
  value: "0x8885af4612de6d3cca48bd044bed4a2e49337b5240e5f436d951dbc59bdb0b75",
  error: "Error Message",
  component: (
    <InputComponentRight>
      <Wallet />
    </InputComponentRight>
  ),
  componentPosition: "right",
  large: true,
};
