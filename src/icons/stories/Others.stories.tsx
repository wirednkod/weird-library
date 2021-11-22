import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkmark } from "../others/Checkmark";
import { Cross } from "../others/Cross";
import { Plus } from "../others/Plus";
import { Minus } from "../others/Minus";
import { More } from "../others/More";
import { Menu } from "../others/Menu";
import { Swap } from "../others/Swap";
import { Search } from "../others/Search";
import { Graph } from "../others/Graph";
import { Candles } from "../others/Candles";
import { QR } from "../others/QR";
import { Link } from "../others/Link";
import { Wallet } from "../others/Wallet";

export default {
  title: "Icons/Others (2px)",
  component: Checkmark,
} as ComponentMeta<typeof Checkmark>;

const Template: ComponentStory<typeof Checkmark> = (args) => (
  <>
    <Checkmark {...args} />
    <Cross {...args} />
    <Plus {...args} />
    <Minus {...args} />
    <More {...args} />
    <Menu {...args} />
    <Swap {...args} />
    <Search {...args} />
    <Graph {...args} />
    <Candles {...args} />
    <QR {...args} />
    <Link {...args} />
    <Wallet {...args} />
  </>
);

export const Default = Template.bind({
  width: 24,
  height: 24,
});
