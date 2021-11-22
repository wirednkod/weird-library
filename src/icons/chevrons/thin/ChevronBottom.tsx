import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const ChevronBottomThin = ({
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
          d="M11.9642 13.3285L8.42866 9.79291L7.72156 10.5L11.2571 14.0356L11.9642 14.7427L11.9642 14.7427L16.2069 10.5L15.4998 9.79293L11.9642 13.3285Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
