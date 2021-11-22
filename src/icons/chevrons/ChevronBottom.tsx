import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ChevronBottom = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8995 12.8284L7.65689 8.58579L6.24268 10L11.9012 15.6585L13.3154 14.2443L13.3137 14.2426L17.5564 9.99999L16.1422 8.58578L11.8995 12.8284Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
