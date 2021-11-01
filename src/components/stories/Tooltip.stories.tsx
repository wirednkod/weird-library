import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Tooltip } from "../Tooltip"

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ margin: "100px 0 100px 40%" }}>
    <Tooltip {...args}>
      <div
        style={{
          width: "100px",
          border: "1px solid blue",
          padding: "20px",
          color: "blue",
          display: "block",
          float: "left",
        }}
      >
        Something
      </div>
    </Tooltip>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: "This is the text of the Tooltip that will popup",
  placement: "top",
}
