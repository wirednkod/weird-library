import React from "react"
import styled from "styled-components"

import { TableHeadProps, TableHeadItemProps } from "./types"

import { mergeTheme } from "../../utils"

export const TableHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  @media screen and (max-width: 800px) {
    min-width: 750px;
  }
`

export const TableHeadItem = styled.div<TableHeadItemProps>`
  ${(props) => {
    return `
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        ${
          props.size !== undefined
            ? `
        width: calc((100% / 12) * ${props.size} - 16px);
        min-width: calc((100% / 12) * ${props.size} - 16px);
        `
            : `flex: auto`
        }
        &:last-child{
          margin-right: 0px;
          ${
            props.size !== undefined &&
            `
            width: calc((100% / 12) * ${props.size});
            min-width: calc((100% / 12) * ${props.size});
            `
          }
        }
    `
  }}
`
export const TableHeadParagraph = styled.p`
  ${(props) => {
    const theme = mergeTheme(props)
    const { fontFamily } = theme
    return `
      color: #838383;
      font-size: 12px;
      margin: 0px;
      font-family: ${fontFamily}
  `
  }}
`

export function TableHead(props: TableHeadProps) {
  let { structure } = props
  let tableHead = structure.map((item, i) => (
    <TableHeadItem
      size={item.size}
      key={item.title.replace(/\s+/g, "") + i + "_element"}
    >
      <TableHeadParagraph>{item.title}</TableHeadParagraph>
    </TableHeadItem>
  ))
  return <TableHeadWrapper>{tableHead}</TableHeadWrapper>
}
