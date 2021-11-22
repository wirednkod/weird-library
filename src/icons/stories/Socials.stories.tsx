import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Medium } from "../socials/Medium";
import { Telegram } from "../socials/Telegram";
import { Twitter } from "../socials/Twitter";
import { Discord } from "../socials/Discord";
import { Github } from "../socials/Github";
import { Google } from "../socials/Google";

export default {
  title: "Icons/Socials",
  component: Medium,
} as ComponentMeta<typeof Medium>;

const Template: ComponentStory<typeof Medium> = (args) => (
  <>
    <Medium {...args} />
    <Telegram {...args} />
    <Twitter {...args} />
    <Discord {...args} />
    <Github {...args} />
    <Google {...args} />
  </>
);

export const Default = Template.bind({
  width: 24,
  height: 24,
});
