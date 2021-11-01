import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Badge } from "../Badge"

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    type: {
      options: ["info", "success", "warning", "error", "aqua", "mint", "white"],
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Info = Template.bind({})
Info.args = {
  type: "info",
  text: "Transaction",
}

export const Success = Template.bind({})
Success.args = {
  type: "success",
  text: "Transaction",
}

export const Warning = Template.bind({})
Warning.args = {
  type: "warning",
  text: "Transaction",
}

export const Error = Template.bind({})
Error.args = {
  type: "error",
  text: "Transaction",
}

export const Aqua = Template.bind({})
Aqua.args = {
  type: "aqua",
  text: "Transaction",
}
export const Mint = Template.bind({})
Mint.args = {
  type: "mint",
  text: "Transaction",
}
export const White = Template.bind({})
White.args = {
  type: "white",
  text: "Transaction",
}

export const InfofullWidth = Template.bind({})
InfofullWidth.args = {
  type: "info",
  fullWidth: true,
  text: "Transaction",
}
export const InfofullWidthAlignCenter = Template.bind({})
InfofullWidthAlignCenter.args = {
  type: "info",
  fullWidth: true,
  align: "center",
  text: "Transaction",
}
export const InfofullWidthAlignEnd = Template.bind({})
InfofullWidthAlignEnd.args = {
  type: "info",
  fullWidth: true,
  align: "end",
  text: "Transaction",
}
