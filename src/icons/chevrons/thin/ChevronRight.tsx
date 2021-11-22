import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const ChevronRightThin = ({
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
          d="M13.7931 11.9644L10.2575 15.5L10.9646 16.2071L14.5002 12.6715L15.2073 11.9645L15.2073 11.9644L10.9646 7.72179L10.2575 8.4289L13.7931 11.9644Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
