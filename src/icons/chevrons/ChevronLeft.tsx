import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ChevronLeft = ({
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
          d="M11.1716 12.0339L15.4142 7.79129L14 6.37708L8.3415 12.0356L9.75572 13.4498L9.75737 13.4481L14 17.6908L15.4142 16.2766L11.1716 12.0339Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
