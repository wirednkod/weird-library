import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const SGBToken = ({
  width = 24,
  height = 24,
  color = "#57C8E3",
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          d="M16.9955 13.3964L15.3424 9.92442L18.8399 8.27011L16.9955 13.3964ZM9.72236 12.8424L16.7577 13.7735L13.8895 7.7454L9.72236 12.8424ZM3.99902 23L8.27396 21.7305L9.20987 13.9361L3.99902 23ZM9.67652 13.2063L9.02615 18.635L16.5405 14.1144L9.67652 13.2063ZM9.43042 12.6355L13.6573 7.46529L5.57366 1L9.43042 12.6355ZM19.1841 8.40339L18.3323 10.7695L19.999 12.2602L19.1841 8.40339Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
