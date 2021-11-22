import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ArrowRight = ({
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
          d="M14.9349 11.0355L5.44967 11.0355L5.44967 13.0355L15.136 13.0355L11.7928 16.3787L13.207 17.7929L18.8655 12.1344L17.4513 10.7202L17.4497 10.7218L13.207 6.47919L11.7928 7.8934L14.9349 11.0355Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
