import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ArrowTopRight = ({
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
          d="M13.3189 9.23259L6.61178 15.9397L8.026 17.3539L14.8752 10.5046L14.8752 15.2326L16.8752 15.2326L16.8752 7.23026L14.8752 7.23026L14.8752 7.23259L8.87524 7.23259L8.87524 9.23259L13.3189 9.23259Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
