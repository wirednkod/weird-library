import React from "react"
import { Wallet } from "../.."
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Notification } from "../Notification"

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    type: {
      options: ["info", "success", "error", "warning"],
    },
  },
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
)

export const Info = Template.bind({})
Info.args = {
  type: "info",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const Success = Template.bind({})
Success.args = {
  type: "success",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const Warning = Template.bind({})
Warning.args = {
  type: "warning",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const Error = Template.bind({})
Error.args = {
  type: "error",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const InfoWithIcon = Template.bind({})
InfoWithIcon.args = {
  type: "info",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
}
export const WarningWithIcon = Template.bind({})
WarningWithIcon.args = {
  type: "warning",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
}
export const SuccessWithIcon = Template.bind({})
SuccessWithIcon.args = {
  type: "success",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
}
export const ErrorWithIcon = Template.bind({})
ErrorWithIcon.args = {
  type: "error",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
}
export const InfoWithIconTop = Template.bind({})
InfoWithIconTop.args = {
  type: "info",
  icon: <Wallet />,
  iconPosition: "top",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const WarningWithIconTop = Template.bind({})
WarningWithIconTop.args = {
  type: "warning",
  icon: <Wallet />,
  iconPosition: "top",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const SuccessWithIconTop = Template.bind({})
SuccessWithIconTop.args = {
  type: "success",
  icon: <Wallet />,
  iconPosition: "top",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const ErrorWithIconTop = Template.bind({})
ErrorWithIconTop.args = {
  type: "error",
  icon: <Wallet />,
  iconPosition: "top",
  children: <p>This is a nice story but not the existing one.</p>,
}
export const InfoWithIconAndAction = Template.bind({})
InfoWithIconAndAction.args = {
  type: "info",
  title: "Pending transaction",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
  action: () => {},
  actionText: "Transaction on Polka",
  actionIcon: <Wallet />,
}
export const WarningWithIconAndAction = Template.bind({})
WarningWithIconAndAction.args = {
  type: "warning",
  title: "Pending transaction",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
  action: () => {},
  actionText: "Transaction on Polka",
  actionIcon: <Wallet />,
}
export const SuccessWithIconAndAction = Template.bind({})
SuccessWithIconAndAction.args = {
  type: "success",
  title: "Successful transaction",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
  action: () => {},
  actionText: "Transaction on Polka",
  actionIcon: <Wallet />,
}
export const ErrorWithIconAndAction = Template.bind({})
ErrorWithIconAndAction.args = {
  type: "error",
  title: "Failed Transaction",
  icon: <Wallet />,
  children: <p>This is a nice story but not the existing one.</p>,
  action: () => {},
  actionText: "Transaction on Polka",
  actionIcon: <Wallet />,
}
