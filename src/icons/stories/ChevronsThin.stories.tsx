import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChevronLeftThin } from "../chevrons/thin/ChevronLeft";
import { ChevronRightThin } from "../chevrons/thin/ChevronRight";
import { ChevronTopThin } from "../chevrons/thin/ChevronTop";
import { ChevronBottomThin } from "../chevrons/thin/ChevronBottom";

export default {
  title: "Icons/Chevron (1px)",
  component: ChevronLeftThin,
} as ComponentMeta<typeof ChevronLeftThin>;

const Template: ComponentStory<typeof ChevronLeftThin> = (args) => (
  <>
    <ChevronLeftThin {...args} />
    <ChevronRightThin {...args} />
    <ChevronTopThin {...args} />
    <ChevronBottomThin {...args} />
  </>
);

export const Default = Template.bind({
  width: 24,
  height: 24,
});
