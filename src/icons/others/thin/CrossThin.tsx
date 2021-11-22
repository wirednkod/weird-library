import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const CrossThin = ({
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
          d="M12.7071 12.1924L16.9497 7.94975L16.2426 7.24264L12 11.4853L7.75736 7.24264L7.05025 7.94975L11.2929 12.1924L7.05025 16.435L7.75736 17.1421L12 12.8995L16.2426 17.1421L16.9497 16.435L12.7071 12.1924Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
