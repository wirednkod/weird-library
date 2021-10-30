import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginButton } from "../Buttons";

export default {
  title: "Components/Login Button",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => (
  <LoginButton {...args}>{args.children}</LoginButton>
);

export const MenuLogin = Template.bind({});
MenuLogin.args = {
  children: "Login",
};

export const MetamaskLogin = Template.bind({});
MetamaskLogin.args = {
  isMetaMask: true,
  children: "Metamask",
};

export const MetamaskLoginWithHeight70 = Template.bind({});
MetamaskLoginWithHeight70.args = {
  height: 70,
  isMetaMask: true,
  children: "Metamask",
};

export const WalletConnectLogin = Template.bind({});
WalletConnectLogin.args = {
  isWalletConnect: true,
  children: "Metamask",
};
