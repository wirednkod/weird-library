import React from "react";
export interface EmptyStateProps {
  icon?: React.ReactElement;
  text: string;
  title?: string;
  action?: () => void;
  actionText?: string;
  disabledBorder?: boolean;
}
export interface EmptyStateParagraphProps {
  title?: string;
}
export interface EmptyStateWrapperProps {
  disabledBorder?: boolean;
}
