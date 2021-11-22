import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ArrowLeft = ({
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
          d="M8.9662 13.1344L18.4515 13.1344L18.4515 11.1344L8.76516 11.1344L12.1083 7.79124L10.6941 6.37703L5.0356 12.0355L6.44981 13.4497L6.45147 13.4481L10.6941 17.6907L12.1083 16.2765L8.9662 13.1344Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
