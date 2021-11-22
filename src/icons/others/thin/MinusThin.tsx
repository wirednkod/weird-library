import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const MinusThin = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24 `}>
        <path
          d="M18.5 12.6924L5.5 12.6924L5.5 11.6924L18.5 11.6924L18.5 12.6924Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
