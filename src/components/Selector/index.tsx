import React from "react"
import styled from "styled-components"
import { mergeTheme } from "../../utils"
import { SelectorProps, SelectorItemProps } from "./types"

export const SelectorWrapper = styled.ul`
  ${(props) => {
    const theme = mergeTheme(props)
    const { selector } = theme
    return `
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: row;
        border-radius: ${selector.borderRadius};
        background-color: ${selector.background};
        list-style:none;
        width: max-content;
        width: -moz-max-content;
        width: -webkit-max-content;
        max-width: max-content;
        max-width: -moz-max-content;
        max-width: -webkit-max-content;
    `
  }}
`
export const SelectorItem = styled.li<SelectorItemProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const { selector } = theme

    return `
        padding: ${selector.verticalPadding} ${selector.horizontalPadding};
        margin: 0px;
        color: ${selector.color};
        border-radius: ${selector.borderRadius};
        font-size: ${selector.fontSize};
        ${
          props.selected &&
          `background-color: ${
            props.disabled
              ? selector.hoverBackground
              : selector.selectedBackground
          };`
        }
        transition: all ease .3s;
        cursor: default;
        ${
          !props.selected &&
          `&:hover{
            cursor: ${!props.disabled ? "pointer" : "not-allowed"};
            background-color: ${
              !props.disabled ? selector.hoverBackground : "inherit"
            }
          }`
        }
        ${
          props.disabled &&
          `&:hover{
              cursor: not-allowed;
            }`
        }
    `
  }}
`

export function Selector(props: SelectorProps) {
  let selectors = props.items.map((item, i) => (
    <SelectorItem
      selected={i === props.selected}
      disabled={props.disabled}
      key={item + "_" + i}
    >
      {item}
    </SelectorItem>
  ))
  return props.items.length >= 2 ? (
    <SelectorWrapper>{selectors}</SelectorWrapper>
  ) : null
}
