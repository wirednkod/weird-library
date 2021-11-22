import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChevronLeft } from "../chevrons/ChevronLeft";
import { ChevronRight } from "../chevrons/ChevronRight";
import { ChevronTop } from "../chevrons/ChevronTop";
import { ChevronBottom } from "../chevrons/ChevronBottom";

export default {
  title: "Icons/Chevron (2px)",
  component: ChevronLeft,
} as ComponentMeta<typeof ChevronLeft>;

const Template: ComponentStory<typeof ChevronLeft> = (args) => (
  <>
    <ChevronLeft {...args} />
    <ChevronRight {...args} />
    <ChevronTop {...args} />
    <ChevronBottom {...args} />
  </>
);

export const Default = Template.bind({
  width: 24,
  height: 24,
});
