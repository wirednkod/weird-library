import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Plus = ({
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
          d="M12.8994 11L12.8994 5L10.8994 5L10.8994 11H4.89941V13H10.8994L10.8994 19H12.8994L12.8994 13H18.8994V11H12.8994Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
