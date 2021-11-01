import React from "react"
import styled from "styled-components"
import { getTheme } from "../../utils"
import { NotificationDivProps, NotificationProps } from "./types"

export const NotificationWrapper = styled.div<NotificationDivProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { notification } = theme

    return `
    display: flex;
    flex-direction: ${props.iconPosition === "top" ? "column" : "row"};
    align-items:  ${
      props.iconPosition === "top" || props.actionText ? "flex-start" : "center"
    };
    width: ${props.width || notification.width};
    padding: ${
      props.icon
        ? notification.horizontalPadding
        : `${notification.verticalPadding} ${notification.horizontalPadding}`
    };
    background-color: ${
      notification[props.type]
        ? notification[props.type].background
        : notification.info.backround
    };
		h5{
			font-size: ${notification.fontSizeMedium};
			font-weight: 500;
			color: ${
        notification[props.type]
          ? notification[props.type].color
          : notification.info.color
      }
		}
    p{
        font-size: ${notification.fontSize};
        text-align: ${
          props.icon || props.title || props.actionText ? "left" : "center"
        }
        margin: 0px;
        color: ${
          notification[props.type]
            ? notification[props.type].color
            : notification.info.color
        }
    }
    a{
      font-size: ${notification.fontSize};
      text-decoration: underline;
			color: ${
        notification[props.type]
          ? notification[props.type].color
          : notification.info.color
      }
			&:hover{
				color: white;
			}
    }
  `
  }}
`
export const IconWrapper = styled.div<NotificationDivProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { notification } = theme
    return `
    display: flex;
    align-items: flex-start;
    ${
      props.iconPosition === "top"
        ? `padding-bottom: ${notification.horizontalPadding}`
        : `padding-right: ${notification.horizontalPadding}`
    };
    svg{
      * {
        fill: ${
          notification[props.type]
            ? notification[props.type].color
            : notification.info.color
        };
      }
    }
  `
  }}
`
export const NotificationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
`
export const NotificationTitle = styled.h5<NotificationDivProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { notification } = theme
    return `
        font-size: ${notification.fontSizeMedium};
        color: ${
          notification[props.type]
            ? notification[props.type].color
            : notification.info.color
        };
        font-weight: 500;
        margin: 0px;
        padding: 0px 0px ${notification.verticalPadding} 0px;
    `
  }}
`
export const NotificationActionWrapper = styled.div<NotificationDivProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { notification } = theme
    return `
      cursor: pointer;
      display: flex;
      margin-top: ${notification.actionSpacing};
      flex-direciton: row;
      svg{
        margin-left: ${notification.verticalPadding};
        * {
          fill: ${
            notification[props.type]
              ? notification[props.type].color
              : notification.info.color
          };
        }
      }
    `
  }}
`
export const NotificationActionText = styled.p<NotificationDivProps>`
  ${(props) => {
    const theme = getTheme(props)
    const { notification } = theme
    return `
      font-size: ${notification.fontSize};
      color: ${
        notification[props.type]
          ? notification[props.type].color
          : notification.info.color
      };
    `
  }}
`
export function Notification(props: NotificationProps) {
  return (
    <NotificationWrapper
      type={props.type}
      hasAction={props.action && props.actionText ? true : false}
      iconPosition={props.iconPosition}
      icon={props.icon}
      actionText={props.actionText}
      title={props.title}
    >
      <>
        {props.icon && (
          <IconWrapper
            type={props.type}
            hasAction={props.action && props.actionText ? true : false}
            iconPosition={props.iconPosition}
            icon={props.icon}
            actionText={props.actionText}
          >
            {props.icon}
          </IconWrapper>
        )}
        <NotificationContentWrapper>
          {props.title && (
            <NotificationTitle type={props.type}>
              {props.title}
            </NotificationTitle>
          )}
          {props.children}
          {props.action && props.actionText && (
            <NotificationActionWrapper type={props.type}>
              <NotificationActionText type={props.type}>
                {props.actionText}
              </NotificationActionText>
              {props.actionIcon && props.actionIcon}
            </NotificationActionWrapper>
          )}
        </NotificationContentWrapper>
      </>
    </NotificationWrapper>
  )
}
