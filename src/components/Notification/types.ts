import React from "react"

export interface NotificationProps {
  type: "success" | "info" | "error" | "warning"
  title?: string
  actionText?: string
  action?: () => void
  actionIcon?: React.ReactElement
  children?: React.ReactElement
  icon?: React.ReactElement
  width?: string
  iconPosition?: "default" | "top"
}
export interface NotificationDivProps {
  type: "success" | "info" | "error" | "warning"
  hasAction?: boolean
  icon?: React.ReactElement
  actionText?: string
  title?: string
  width?: string
  iconPosition?: "default" | "top"
}
