import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Telegram = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24 `}>
        <path
          d="M10.2783 13.7874L10.0116 17.5101C10.1541 17.5114 10.2949 17.4798 10.4232 17.4177C10.5514 17.3556 10.6636 17.2647 10.7509 17.1521L12.5263 15.4554L16.2051 18.1495C16.8798 18.5255 17.3551 18.3275 17.5384 17.5288L19.9545 6.21388C20.1685 5.21385 19.5938 4.82651 18.9365 5.07118L4.7428 10.5046C3.77411 10.8807 3.78878 11.4207 4.57813 11.6667L8.20689 12.794L16.6364 7.51991C17.0364 7.25723 17.3938 7.40257 17.0971 7.66524L10.2783 13.7874Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
