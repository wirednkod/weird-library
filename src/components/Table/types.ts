import React from "react";
export interface TableHeadItemStructure {
  title: string;
  size?: number;
}
export interface TableHeadItemProps {
  size?: number;
}
export interface TableHeadProps {
  structure: Array<TableHeadItemStructure>;
}

export interface TableRowItemProps {
  size?: number;
  value: React.ReactElement;
}
export interface TableRowProps {
  item: TableRowItemProps[];
  i: number;
}
export interface TableRowWraperProps {
  i: number;
  length: number;
}

export interface TableProps {
  headStructure?: Array<TableHeadItemStructure>;
  content: Array<TableRowItemProps[]>;
}
