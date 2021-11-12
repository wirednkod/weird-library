import React from "react"
import { mergeTheme } from "../../utils"

import styled from "styled-components"

import {
  EmptyStateProps,
  EmptyStateParagraphProps,
  EmptyStateWrapperProps,
} from "./types"

export const EmptyStateWrapper = styled.div<EmptyStateWrapperProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const { emptyState } = theme
    return `
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      border: ${
        !props.disabledBorder ? `1px solid ${emptyState.borderColor}` : `none`
      };
      padding: ${emptyState.padding} 0px;
    `
  }}
`
export const EmptyStateParagraph = styled.p<EmptyStateParagraphProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const { fontSize, emptyState } = theme
    return `
      font-size: ${fontSize.small};
      color: ${emptyState.color};
      margin: ${
        props.title
          ? `0px 0px ${emptyState.textMargin} 0px`
          : `${emptyState.textMargin} 0px`
      }
      };
    `
  }}
`
export const EmptyStateTitle = styled.h5`
  ${(props) => {
    const theme = mergeTheme(props)
    const { fontSize, emptyState } = theme
    return `
      font-size: ${fontSize.h5};
      color: ${emptyState.color};
      margin-top: ${emptyState.headMarginTop};
      margin-bottom: ${emptyState.headMarginBottom};
    `
  }}
`

export function EmptyState(props: EmptyStateProps) {
  return (
    <EmptyStateWrapper disabledBorder={props.disabledBorder}>
      {props.icon}
      {props.title && <EmptyStateTitle>{props.title}</EmptyStateTitle>}
      <EmptyStateParagraph title={props.title}>
        {props.text}
      </EmptyStateParagraph>
    </EmptyStateWrapper>
  )
}
