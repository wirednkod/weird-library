import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const ChevronLeftThin = ({
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
          d="M10.6715 11.9645L14.2071 8.42891L13.5 7.7218L9.96443 11.2574L9.25735 11.9644L9.25732 11.9645L13.5 16.2071L14.2071 15.5L10.6715 11.9645Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
