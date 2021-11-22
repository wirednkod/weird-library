import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const DFLRToken = ({
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.18288 9H18.9995L14.965 12.9725L13.3216 14.6H6.62421L8.3475 12.9725H12.3862L14.7585 10.6275H7.45959L9.18288 9ZM6.43331 11.6182H9.7813L8.34799 12.9718H5L6.43331 11.6182Z"
          fill="white"
        />
      </Svg>
    </div>
  );
};
