import React from "react"
export interface ModalProps {
  title: string
  description?: string
  close: () => void
  children: React.ReactNode
  icon: React.ReactNode
}
