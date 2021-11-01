import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Slider } from "../Slider"

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  min: 0,
  max: 260,
  def: 195,
  debounceDelay: 500,
  onChange: (val) => console.log(val),
}
export const DataTickers = Template.bind({})
DataTickers.args = {
  min: 0,
  max: 260,
  def: 65,
  dataTickers: [25, 50, 75],
  showDataTickers: "percentage",
}
export const SingleDataTicker = Template.bind({})
SingleDataTicker.args = {
  min: 0,
  max: 30000,
  def: 24587,
  dataTickers: [10000.3252],
  showDataTickers: "number",
  showActualValue: true,
  background: "rgba(255,255,255,.15)",
  selectedBackground: "#fff",
  showTickersOnFilled: true,
  thumbHover: "#fff",
  textColor: "#fff",
  showMinMax: true,
  maxLabel: "Max",
}
export const SingleDataTickerSelected = Template.bind({})
SingleDataTickerSelected.args = {
  min: 0,
  max: 30000,
  def: 10000.3252,
  dataTickers: [10000.3252],
  showDataTickers: "number",
  showActualValue: true,
  background: "rgba(255,255,255,.15)",
  selectedBackground: "#fff",
  showTickersOnFilled: true,
  thumbHover: "#fff",
  textColor: "#fff",
  showMinMax: true,
  maxLabel: "Max",
}
export const Disabled = Template.bind({})
Disabled.args = {
  min: 0,
  max: 260,
  isDisabled: true,
  showMinMax: true,
  minLabel: "Safer",
  maxLabel: "Riskier",
}
export const DecimalStep = Template.bind({})
DecimalStep.args = {
  min: 0,
  max: 2,
  showMinMax: true,
  minLabel: "Safer",
  maxLabel: "Riskier",
  step: 0.01,
  showActualValue: true,
}

export const DecimalStepWithSetValue = Template.bind({})
DecimalStepWithSetValue.args = {
  min: 0,
  max: 10,
  showMinMax: true,
  minLabel: "Safer",
  maxLabel: "Riskier",
  step: 0.01,
  showActualValue: true,
  showDataTickers: "number",
  value: 2,
}

const InputTemplate: ComponentStory<typeof Slider> = (args) => {
  const [sliderAmount, setSliderAmount] = useState<number | undefined>()

  return (
    <div>
      <input
        onChange={(e) => {
          const val = e.target.value
          console.log(parseFloat(val))
          setSliderAmount(parseFloat(val))
        }}
      />
      <br />
      <br />
      <Slider value={sliderAmount} {...args} />
    </div>
  )
}

export const AlterWithInput = InputTemplate.bind({})
AlterWithInput.args = {
  min: 0,
  max: 100,
  showMinMax: true,
  minLabel: "0",
  maxLabel: "100",
  step: 0.01,
  showActualValue: true,
  onChange: (val) => console.log("slider changed:", val),
}
