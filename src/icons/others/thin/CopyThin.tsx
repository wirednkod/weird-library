import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const CopyThin = ({
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
          d="M6.5 10.1364H13.8636V17.5H6.5V10.1364ZM7.5 11.1364V16.5H12.8636V11.1364H7.5Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5001 7.5H8.81824V6.5H17.5001V15.1818H16.5001V7.5Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
