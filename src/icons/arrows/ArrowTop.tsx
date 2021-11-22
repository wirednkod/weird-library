import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ArrowTop = ({
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
          d="M10.9011 9.10053L10.9011 18.5858L12.9011 18.5858L12.9011 8.89949L16.2442 12.2426L17.6585 10.8284L12 5.16993L10.5857 6.58414L10.5874 6.5858L6.34476 10.8284L7.75897 12.2427L10.9011 9.10053Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
