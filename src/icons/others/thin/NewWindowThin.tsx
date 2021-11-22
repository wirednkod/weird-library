import React from "react";
import { SizeAndColorInterface } from "../../types";
import styled from "styled-components";
import Icon from "../../Icon";

const Svg = styled(Icon)``;

export const NewWindowThin = ({
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
          d="M7.5 7.5H12V8.5H8.5V15.5H15.5V12.5714H16.5V16.5H7.5V7.5Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 6.5H14V5.5H18.5V10H17.5V6.5Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6465 10.6464L17.6465 5.64642L18.3536 6.35353L13.3536 11.3535L12.6465 10.6464Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
