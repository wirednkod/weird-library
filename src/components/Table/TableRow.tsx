import React from "react";
import styled from "styled-components";
import {
  TableHeadItemProps,
  TableRowItemProps,
  TableRowWraperProps,
  TableRowProps,
} from "./types";
import { getTheme } from "../../utils";

export const TableRowItem = styled.div<TableHeadItemProps>`
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
    `;
  }}
`;
export const TableRowWrapper = styled.div<TableRowWraperProps>`
  ${(props) => {
    const theme = getTheme(props);
    const { table } = theme;
    return `
      display: flex;
      flex-direction: row;
      padding: ${table.rowPadding};
      background-color: ${table.rowBackground};
      align-items: center;
      margin-bottom: ${table.rowMargin};
    `;
  }}
`;
export function TableRow(props: TableRowProps) {
  let { item } = props;
  return (
    <TableRowWrapper i={props.i} length={item.length}>
      {item.map((element: TableRowItemProps, i) => (
        <TableRowItem size={element.size} key={"tableRow_" + i}>
          {element.value}
        </TableRowItem>
      ))}
    </TableRowWrapper>
  );
}
