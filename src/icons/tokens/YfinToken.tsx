import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const YfinToken = ({
  backgroundColor = "black",
  color = "white",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill={backgroundColor}
        />
        <path
          d="M11.0141 12L7.21094 15.7916H11.0025L14.7942 12L18.5858 8.20837H14.8057L11.0141 12Z"
          fill={color}
        />
        <path
          d="M9.1913 12L12.9974 8.20837H9.1913L5.40259 12H9.1913Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
