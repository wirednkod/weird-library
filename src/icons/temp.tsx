import React from "react";
import { SizeAndColorInterface } from "./types";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)<SizeAndColorInterface>`
  ${(props) => `
  width: ${props.width}px; 
  height: ${props.height}px;
`}
`;

export const WalletFilledIcon = ({
  color = "#E2665C",
  width = 18,
  height = 37,
}: SizeAndColorInterface) => {
  return (
    <Svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <path d="" fill={color} />
    </Svg>
  );
};
