import React from "react";
import styled from "styled-components";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableProps, TableRowItemProps } from "./types";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
export const TableContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    min-width: 750px;
  }
`;

export function Table(props: TableProps) {
  let { headStructure, content } = props;
  let tableRows = content.map((item: TableRowItemProps[], i: number) => (
    <TableRow item={item} i={i} key={"tableRowElement_" + i} />
  ));
  return (
    <TableWrapper>
      {headStructure && <TableHead structure={headStructure} />}
      <TableContentWrapper>{tableRows}</TableContentWrapper>
    </TableWrapper>
  );
}
