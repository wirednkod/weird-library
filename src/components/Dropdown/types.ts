import React from "react"

export interface DropdownProps {
  onChange: (val: any) => void
  headerOption?: DropdownItemProps
  options: DropdownItemProps[]
  disabled?: boolean
  children?: any
  theme?: any
}

export interface DropdownItemProps {
  title: React.ReactElement | string
  desc?: React.ReactElement | string
  icon?: React.ReactElement
}

export interface ListItemProps {
  onOptionClicked?: (option: DropdownItemProps, i: number) => void
  option?: DropdownItemProps
  index?: number
  isHeader?: boolean
}

export interface DropDownHeaderProps {
  disabled?: boolean
  onClick?: () => void
  theme?: any
}
