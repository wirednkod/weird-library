import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import styled from "styled-components"
import { getTheme } from "../../utils"

import { Table } from "../Table"
import { Button } from "../Buttons"

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>

const Paragraph = styled.p`
  ${(props) => {
    const theme = getTheme(props)
    const { fontFamily } = theme
    return `
      color: #D6D6D6;
      font-size: 14px;
      margin: 0px;
      font-family: ${fontFamily}
  `
  }}
`
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  headStructure: [
    { size: 2, title: "column one" },
    { size: 2, title: "column two" },
    { size: 2, title: "column three" },
    { size: 2, title: "column four" },
    { size: 2, title: "column five" },
    { size: 2, title: "column six" },
  ],
  content: [
    [
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
      {
        size: 2,
        value: <Button>Any Component</Button>,
      },
      {
        size: 2,
        value: <a href="https://google.com">This is a link</a>,
      },
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
    ],
    [
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
      {
        size: 2,
        value: <Button>Any Component</Button>,
      },
      {
        size: 2,
        value: <a href="https://google.com">This is a link</a>,
      },
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
      {
        size: 2,
        value: <Paragraph>This is a paragraph</Paragraph>,
      },
    ],
  ],
}
