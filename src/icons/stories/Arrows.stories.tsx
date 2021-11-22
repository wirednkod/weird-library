import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArrowLeft } from "../arrows/ArrowLeft";
import { ArrowRight } from "../arrows/ArrowRight";
import { ArrowTop } from "../arrows/ArrowTop";
import { ArrowTopRight } from "../arrows/ArrowTopRight";
import { ArrowBottom } from "../arrows/ArrowBottom";

export default {
  title: "Icons/Arrows",
  component: ArrowLeft,
} as ComponentMeta<typeof ArrowLeft>;

const Template: ComponentStory<typeof ArrowLeft> = (args) => (
  <>
    <ArrowLeft {...args} />
    <ArrowRight {...args} />
    <ArrowTop {...args} />
    <ArrowBottom {...args} />
    <ArrowTopRight {...args} />
  </>
);

export const Default = Template.bind({
  width: 24,
  height: 24,
});
