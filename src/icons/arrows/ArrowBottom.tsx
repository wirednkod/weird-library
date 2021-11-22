import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ArrowBottom = ({
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
          d="M13 15.0694L13 5.58414L11 5.58414L11 15.2704L7.65688 11.9273L6.24267 13.3415L11.9012 19L13.3154 17.5858L13.3137 17.5841L17.5564 13.3415L16.1422 11.9273L13 15.0694Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
