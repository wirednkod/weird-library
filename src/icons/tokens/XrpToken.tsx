import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const XrpToken = ({
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
          x="2"
          y="2"
          width="20"
          height="20"
          rx="10"
          fill={backgroundColor}
        />
        <path
          d="M9.48038 10.4748L5.75 6.53125L7.50423 6.53126L10.5734 9.6004C11.3581 10.3851 12.6304 10.3851 13.4152 9.6004L16.4843 6.53126L18.2385 6.53126L14.5082 10.4748C13.1198 11.8632 10.8688 11.8632 9.48038 10.4748Z"
          fill={color}
        />
        <path
          d="M14.5196 13.5237L18.25 17.4673H16.4958L13.4266 14.3981C12.6419 13.6134 11.3696 13.6134 10.5848 14.3981L7.5157 17.4673L5.76147 17.4673L9.49184 13.5237C10.8802 12.1353 13.1312 12.1354 14.5196 13.5237Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
