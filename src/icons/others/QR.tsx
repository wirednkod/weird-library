import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const QR = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24 `}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4H10V6L6 6L6 10H4V6V4H6ZM14 6L18 6V10L20 10L20 6V4H18H14V6ZM18 20L14 20V18H18L18 14H20V18V20H18ZM4 18V14H6L6 18L10 18V20H6H4V18ZM15 15V13H13V15H15ZM9 13H11V15H9V13ZM11 11V9H9V11H11ZM15 9V11H13V9H15Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
