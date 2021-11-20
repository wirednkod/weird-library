import React from "react"
import styled from "styled-components"

import { mergeTheme } from "../../utils"
import { InputProps } from "./types"

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputElement = styled.input<InputProps>`
  ${(props) => {
    const theme = mergeTheme(props)
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
    const theme = mergeTheme(props)
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
    const theme = mergeTheme(props)
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
  ${(props) => {
    return `
  padding: ${props.componentPosition === "left" ? `0 0 0 10px` : `0 10px 0 0`};
  display: flex;
  align-items: center;
`
  }}
`

export const Input = (props: InputProps) => {
  const [focused, setFocused] = React.useState(false)
  const onFocus = () => {
    if (props.onFocus) props.onFocus
    setFocused(true)
  }
  const onBlur = () => {
    if (props.onBlur) props.onBlur
    setFocused(false)
  }
  const onChangeValidation = (e: any) => {
    if (
      !/^[0-9.,]+$/.test(e.key) ||
      (e.target.value.split(".") &&
        e.target.value.split(".").length > 1 &&
        e.key === ".") ||
      (e.target.value.split(".") &&
        e.target.value.split(",").length > 1 &&
        e.key === ",")
    ) {
      e.preventDefault()
    } else {
      if ((e.key === "." || e.key === ",") && !e.target.value) {
        e.target.value = "0"
      }
    }
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
            <InputComponentWrapper componentPosition={props.componentPosition}>
              {props.component}
            </InputComponentWrapper>
          )}
        <InputElement
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={(e) => {
            if (props.onlyNumbers) onChangeValidation(e)
          }}
        />
        {props.component && props.componentPosition === "right" && (
          <InputComponentWrapper componentPosition={props.componentPosition}>
            {props.component}
          </InputComponentWrapper>
        )}
      </InputContainer>
      <ErrorParagraph>{props.error}</ErrorParagraph>
    </InputWrapper>
  )
}
