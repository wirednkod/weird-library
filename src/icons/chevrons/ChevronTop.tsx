import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ChevronTop = ({
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
          d="M12.0016 11.1716L16.2442 15.4142L17.6584 14L12 8.3415L10.5857 9.75572L10.5874 9.75737L6.34475 14L7.75896 15.4142L12.0016 11.1716Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
