import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const ChevronTopThin = ({
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
          d="M11.9645 10.2071L15.5 13.7427L16.2072 13.0356L12.6716 9.50001L11.9645 8.79293L11.9645 8.79291L7.72185 13.0355L8.42896 13.7427L11.9645 10.2071Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
