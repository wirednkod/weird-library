import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CopyThin } from "../others/thin/CopyThin";
import { CrossThin } from "../others/thin/CrossThin";
import { DetailsThin } from "../others/thin/DetailsThin";
import { InfoThin } from "../others/thin/InfoThin";
import { MinusThin } from "../others/thin/MinusThin";
import { NewWindowThin } from "../others/thin/NewWindowThin";
import { PlusThin } from "../others/thin/PlusThin";

export default {
  title: "Icons/Others (1px)",
  component: CopyThin,
} as ComponentMeta<typeof CopyThin>;

const Template: ComponentStory<typeof CopyThin> = (args) => (
  <>
    <CopyThin {...args} />
    <CrossThin {...args} />
    <DetailsThin {...args} />
    <InfoThin {...args} />
    <MinusThin {...args} />
    <NewWindowThin {...args} />
    <PlusThin {...args} />
  </>
);

export const Default = Template.bind({
  width: 24,
  height: 24,
});
