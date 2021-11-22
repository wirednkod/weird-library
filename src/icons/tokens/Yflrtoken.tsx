import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const YflrToken = ({
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
          d="M17.8778 10.5239L12.3062 13.2475V10.5876L17.8778 7.86401V10.5239Z"
          fill={color}
        />
        <path
          d="M12.3063 17.2906V14.6336L15.0935 13.2704L12.3063 17.2906Z"
          fill={color}
        />
        <path
          d="M6.11902 10.5239L11.6907 13.2475V10.5876L6.11902 7.86401V10.5239Z"
          fill={color}
        />
        <path
          d="M11.6905 17.2906V14.6336L8.9032 13.2704L11.6905 17.2906Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
