import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Input } from "../bits/Input"
import styled from "styled-components"

const InputComponentLeft = styled.div`
  padding-left: 16px;
`
const InputComponentRight = styled.div`
  padding-right: 16px;
`

export default {
  title: "Bits/Input",
  component: Input,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: "Amount",
}

export const NumbersOnly = Template.bind({})
NumbersOnly.args = {
  placeholder: "Amount",
  onlyNumbers: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: "1.3241",
}

export const WithError = Template.bind({})
WithError.args = {
  value: "1.3241",
  error: "Error Message",
}

export const Disabled = Template.bind({})
Disabled.args = {
  value: "1.3241",
  disabled: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: "Amount",
  component: (
    <InputComponentLeft>
      <div>Something</div>
    </InputComponentLeft>
  ),
}

export const Large = Template.bind({})
Large.args = {
  placeholder: "Search",
  component: (
    <InputComponentRight>
      <div>Something</div>
    </InputComponentRight>
  ),
  componentPosition: "right",
  large: true,
}

export const LargeActive = Template.bind({})
LargeActive.args = {
  placeholder: "Search",
  value: "0x8885af4612de6d3cca48bd044bed4a2e49337b5240e5f436d951dbc59bdb0b75",
  component: (
    <InputComponentRight>
      <div>Something</div>
    </InputComponentRight>
  ),
  componentPosition: "right",
  large: true,
}

export const LargeError = Template.bind({})
LargeError.args = {
  placeholder: "Search",
  value: "0x8885af4612de6d3cca48bd044bed4a2e49337b5240e5f436d951dbc59bdb0b75",
  error: "Error Message",
  component: (
    <InputComponentRight>
      <div>Something</div>
    </InputComponentRight>
  ),
  componentPosition: "right",
  large: true,
}
