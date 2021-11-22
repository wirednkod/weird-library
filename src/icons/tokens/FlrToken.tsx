import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const FlrToken = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          d="M6 8.21524C6 6.9918 6.9918 6 8.21524 6H17.9069C17.9069 7.22344 16.9151 8.21524 15.6917 8.21524H6Z"
          fill={color}
        />
        <path
          d="M6 12.9225C6 11.6991 6.9918 10.7073 8.21524 10.7073H13.7533C13.7533 11.9307 12.7615 12.9225 11.5381 12.9225H6Z"
          fill={color}
        />
        <path
          d="M6 16.3838C6 15.6956 6.55789 15.1378 7.24607 15.1378C7.93426 15.1378 8.49214 15.6956 8.49214 16.3838C8.49214 17.072 7.93426 17.6299 7.24607 17.6299C6.55789 17.6299 6 17.072 6 16.3838Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
