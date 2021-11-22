import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const ChevronRight = ({
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
          d="M12.8284 12.136L8.58579 16.3786L10 17.7928L15.6585 12.1343L14.2443 10.7201L14.2426 10.7218L9.99999 6.47915L8.58578 7.89336L12.8284 12.136Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
