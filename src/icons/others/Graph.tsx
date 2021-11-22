import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Graph = ({
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
          d="M18.4142 6.99997L12.0742 13.34L9.57417 11.34L5.70706 15.2071L4.29285 13.7929L9.42574 8.65997L11.9257 10.66L17 5.58575L18.4142 6.99997Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 18H18.5V20H4V18Z"
          fill={color}
        />
        <rect
          x="18.8706"
          y="7.00012"
          width="7"
          height="2"
          transform="rotate(180 18.8706 7.00012)"
          fill={color}
        />
        <rect
          x="16.875"
          y="12"
          width="7"
          height="2"
          transform="rotate(-90 16.875 12)"
          fill={color}
        />
      </Svg>
    </div>
  );
};
