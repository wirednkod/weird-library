import React from "react"
import styled from "styled-components"

import { TabProps, TabsProps } from "./types"
import { mergeTheme } from "../../utils"

export const TabItem = styled.li<TabProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const { fontSize, tabs } = theme
    return `
        font-family: ${theme.fontFamily || `'Poppins', sans-serif`};
        font-weight: 400;
        font-size: ${fontSize.normal};
        border-bottom: ${tabs.borderSize}px solid ${
      props.active ? tabs.activeColor : "transparent"
    };
        display: flex;
        background: transparent;
        margin-bottom: 0px;
        color: ${props.active ? tabs.activeColor : tabs.color};
        padding: ${tabs.padding}px;
        transition: all ease .3s;
        &:hover:not([disabled]) {
            cursor: pointer;
            color: ${tabs.activeColor};
        }
    `
  }}
`
export const TabsList = styled.ul`
  ${(props) => {
    const theme = mergeTheme(props)
    const { tabs } = theme
    return `
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    position: relative;
    flex: auto;
    justify-content: ${tabs.justifyContent || "initial"}
    &:after {
      position: absolute;
      bottom: 0px;
      width: 100%;
      border: ${tabs.borderSize}px solid ${tabs.borderColor};
      content: '';
    }
    `
  }}
`

export function Tabs(props: TabsProps) {
  let tabs = props.tabs.map((t, i) => (
    <TabItem
      active={i === props.activeTab}
      key={t.replace(/\s/g, "") + i + "_element"}
      onClick={() => props.onTabChange(i)}
    >
      {t}
    </TabItem>
  ))
  return <TabsList theme={props.theme}>{tabs}</TabsList>
}
