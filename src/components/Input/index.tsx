import React from "react"
import styled from "styled-components"

import { getTheme } from "../../utils"
import { InputProps } from "./types"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputElement = styled.input<InputProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { input } = theme
    return `
        font-size: ${props.large ? input.fontSizeLarge : input.fontSize};
        display: flex;
        flex-direction: column;
        flex:auto;
        background-color: transparent;
        color: ${props.disabled ? input.disabledColor : input.color};
        padding: ${input.verticalPadding} ${input.horizontalPadding};
        border: none;
        outline: none;
        border-radius: 0px;
        &:disabled{
          cursor: not-allowed
        }
    `
  }}
`

export const ErrorParagraph = styled.p`
  ${(props) => {
    const theme = getTheme(props)
    const { input } = theme
    return `
        font-size: ${input.fontSizeSmall};
        color: ${input.errorColor};
        margin: 8px 0px 0px 0px;
        line-height: 16px;
        min-height: 16px;
    `
  }}
`
export const InputContainer = styled.div<InputProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { input } = theme
    return `
      display: flex;
      flex-direction: row;
      transition: all ease .3s;
      ${
        props.large
          ? `
        svg{
          opacity: ${!props.focused ? ".5" : "1"}
          transition: all ease .3s;
        }
        border-bottom: 2px solid ${
          props.focused || props.error ? input.errorColor : "transparent"
        };
        &:hover{
          svg{
            opacity: 1
          }
        }
      `
          : `
      border: 1px solid ${
        props.disabled
          ? input.disabledColor
          : props.error && props.error.length > 0
          ? input.errorColor
          : "transparent"
      };`
      }
      background-color: ${props.disabled ? "transparent" : input.background};`
  }}
`

export const InputComponentWrapper = styled.div<InputProps>`
  display: flex;
  align-items: center;
`

export function Input(props: InputProps) {
  const [focused, setFocused] = React.useState(false)
  const onFocus = () => {
    if (props.onFocus) props.onFocus
    setFocused(true)
  }
  const onBlur = () => {
    if (props.onBlur) props.onBlur
    setFocused(false)
  }
  return (
    <InputWrapper>
      <InputContainer
        error={props.error}
        disabled={props.disabled}
        large={props.large}
        focused={focused}
      >
        {props.component &&
          (props.componentPosition === "left" || !props.componentPosition) && (
            <InputComponentWrapper>{props.component}</InputComponentWrapper>
          )}
        <InputElement {...props} onFocus={onFocus} onBlur={onBlur} />
        {props.component && props.componentPosition === "right" && (
          <InputComponentWrapper>{props.component}</InputComponentWrapper>
        )}
      </InputContainer>
      <ErrorParagraph>{props.error}</ErrorParagraph>
    </InputWrapper>
  )
}
