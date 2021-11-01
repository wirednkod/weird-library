import React from "react"
import { getTheme } from "../../utils"
import { InputLabelProps } from "./types"
import styled from "styled-components"

export const InputLabelWrapper = styled.label`
  ${(props) => {
    const theme = getTheme(props)
    const { inputLabel } = theme
    return `
            display: flex;
            font-size: ${inputLabel.fontSize};
            color: ${inputLabel.color};
        `
  }}
`
export const InputLabelIconWrapper = styled.div<InputLabelProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { inputLabel } = theme

    return `
        ${
          props.icon && props.iconPosition === "right"
            ? `padding-left: ${inputLabel.iconPadding}`
            : `padding-right:  ${inputLabel.iconPadding}`
        }
    `
  }}
`

export function InputLabel(props: InputLabelProps) {
  return (
    <InputLabelWrapper htmlFor={props.htmlFor ? props.htmlFor : ""}>
      {props.icon && (props.iconPosition === "left" || !props.iconPosition) && (
        <InputLabelIconWrapper {...props}>{props.icon}</InputLabelIconWrapper>
      )}
      {props.children}
      {props.icon && props.iconPosition === "right" && (
        <InputLabelIconWrapper {...props}>{props.icon}</InputLabelIconWrapper>
      )}
    </InputLabelWrapper>
  )
}
