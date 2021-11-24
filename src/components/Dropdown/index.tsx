import React, { useEffect, useRef, useState } from "react"
import { mergeTheme, isEmpty } from "../../utils"

import styled from "styled-components"
import { useClickedOutside } from "../../hooks/useClickedOutside"

import {
  DropdownItemProps,
  DropdownProps,
  ListItemProps,
  DropDownHeaderProps,
} from "./types"

const DropDownContainer = styled.div`
  position: relative;
  z-index: 99999;
  display: flex;
  align-items: center;
  height: 100%;
`

const DropDownHeader = styled.div<DropDownHeaderProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const {
      dropdown: {
        disabled,
        header: { fontFamily, fontSize, background, lineHeight, title, desc },
      },
    } = theme
    return `
    font-family: ${fontFamily};
    font-size: ${fontSize};
    background-color: ${props.disabled ? disabled.background : background};
    line-height: ${lineHeight};
    cursor: ${props.disabled ? "normal" : "pointer"};
    ${ListItemTitle} {
      color: ${props.disabled ? disabled.color : title.color};
      padding: ${title.padding};
      width: ${title.width};
    }
    ${ListItemDesc} {
      color: ${props.disabled ? disabled.color : desc.color};
      padding: ${desc.padding};
      width: ${desc.width};
    }
`
  }}
`

const ListItem = styled.div<ListItemProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const {
      dropdown: { header, item },
    } = theme
    const t = props.isHeader ? header : item
    return `
  position: relative;
  font-family: ${t.fontFamily};
  font-size: ${t.fontSize};
  align-items: center;
  display: flex;
  flex-direction: row;
  padding:${t.padding};
  ${
    !props.isHeader &&
    `&:hover {
    color: ${item.hoverColor};
    background-color: ${item.hoverbackground};
    cursor: pointer;
  },`
  }
  ${ListItemTitle} {
    color: ${t.title.color};
    padding: ${t.title.padding};
  }
  ${ListItemDesc} {
    color: ${t.desc.color};
    padding: ${t.desc.padding};
  }
`
  }}
`

const ListItemTexts = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemsContainer = styled.div`
  ${(props) => {
    const theme = mergeTheme(props)
    const {
      dropdown: {
        width,
        item: { background },
      },
    } = theme
    return `
    position: absolute;
    z-index: 9999;
    width: ${width};
    top: 100%;
    background-color: ${background};
  `
  }}
`

const ListItemTitle = styled.div``
const ListItemDesc = styled.div``

export function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] =
    useState<DropdownItemProps | null>(null)

  const { options, headerOption, onChange } = props

  const wrapperRef = useRef(null)
  const clicked = useClickedOutside(wrapperRef)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (option: DropdownItemProps, i: number) => () => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange(i)
  }

  useEffect(() => {
    clicked && setIsOpen(false)
  }, [clicked])

  const header = (
    selectedOption: DropdownItemProps | null,
    headerOption?: DropdownItemProps,
  ) => {
    const magicStuff = (stuff: DropdownItemProps) => (
      <ListItem isHeader={true} theme={props.theme}>
        {stuff.icon && (
          <div
            style={{ display: "flex", padding: "0 10px", alignSelf: "center" }}
          >
            {stuff.icon}
          </div>
        )}
        <ListItemTexts>
          <ListItemTitle>{stuff.title}</ListItemTitle>
          {stuff.desc && <ListItemDesc>{stuff.desc}</ListItemDesc>}
        </ListItemTexts>
      </ListItem>
    )

    if (
      headerOption &&
      !isEmpty(headerOption as object) &&
      headerOption.title
    ) {
      return magicStuff(headerOption)
    }
    return selectedOption
      ? magicStuff(selectedOption)
      : magicStuff({
          title: "select an option",
        })
  }

  return (
    <DropDownContainer ref={wrapperRef}>
      <DropDownHeader
        disabled={props.disabled}
        theme={props.theme}
        onClick={!props.disabled ? toggling : undefined}
      >
        {header(selectedOption, headerOption)}
      </DropDownHeader>
      {isOpen && (
        <ItemsContainer>
          {options.map((option, i) => {
            const { title, desc, icon } = option
            return (
              <ListItem
                onClick={onOptionClicked(option, i)}
                key={Math.random()}
              >
                {icon && (
                  <div
                    style={{
                      display: "flex",
                      padding: "0 10px",
                      alignSelf: "center",
                    }}
                  >
                    {icon}
                  </div>
                )}
                <ListItemTexts>
                  <ListItemTitle>{title}</ListItemTitle>
                  {desc && <ListItemDesc>{desc}</ListItemDesc>}
                </ListItemTexts>
              </ListItem>
            )
          })}
        </ItemsContainer>
      )}
    </DropDownContainer>
  )
}
