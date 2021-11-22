import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Checkmark = ({
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
          d="M10.2426 14.4142L7.41421 11.5858L6 13L8.82843 15.8284L10.2426 17.2426L11.6569 15.8284L18.7279 8.75736L17.3137 7.34315L10.2426 14.4142Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
