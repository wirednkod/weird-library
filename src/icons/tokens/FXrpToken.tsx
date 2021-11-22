import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const FXrpToken = ({
  backgroundColor = "black",
  color = "white",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="8"
          fill={backgroundColor}
        />
        <path
          d="M9.9843 10.7798L7 7.625L8.40339 7.62501L10.8587 10.0803C11.4865 10.7081 12.5043 10.7081 13.1321 10.0803L15.5874 7.62501L16.9908 7.62501L14.0065 10.7798C12.8958 11.8905 11.095 11.8905 9.9843 10.7798Z"
          fill={color}
        />
        <path
          d="M14.0157 13.219L17 16.3738H15.5966L13.1413 13.9185C12.5135 13.2907 11.4957 13.2907 10.8679 13.9185L8.41256 16.3738L7.00918 16.3738L9.99348 13.219C11.1042 12.1083 12.905 12.1083 14.0157 13.219Z"
          fill={color}
        />
        <rect x="14" width="10" height="10" rx="5" fill={backgroundColor} />
        <path
          d="M16.5 3.49525C16.5 2.94559 16.9684 2.5 17.5463 2.5H22.1237C22.1237 3.04966 21.6553 3.49525 21.0775 3.49525H16.5Z"
          fill={color}
        />
        <path
          d="M16.5 5.61011C16.5 5.06045 16.9684 4.61487 17.5463 4.61487H20.162C20.162 5.16452 19.6935 5.61011 19.1157 5.61011H16.5Z"
          fill={color}
        />
        <path
          d="M16.5 7.16517C16.5 6.85599 16.7635 6.60535 17.0885 6.60535C17.4136 6.60535 17.6771 6.85599 17.6771 7.16517C17.6771 7.47436 17.4136 7.725 17.0885 7.725C16.7635 7.725 16.5 7.47436 16.5 7.16517Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
