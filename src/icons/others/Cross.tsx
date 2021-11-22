import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Cross = ({
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
          d="M11.8995 10.5858L7.65685 6.34315L6.24264 7.75736L10.4853 12L6.24264 16.2426L7.65685 17.6569L11.8995 13.4142L16.1421 17.6569L17.5563 16.2426L13.3137 12L17.5563 7.75736L16.1421 6.34315L11.8995 10.5858Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
