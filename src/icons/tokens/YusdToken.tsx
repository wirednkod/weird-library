import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const YusdToken = ({
  backgroundColor = "black",
  color = "white",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill={backgroundColor}
        />
        <path d="M12.0005 13.25H8.875V16.3745L12.0005 13.25Z" fill={color} />
        <path
          d="M12.0001 10.1245L15.1247 7H12.0001L8.87457 10.1245L5.75 13.2499H8.87457L12.0001 10.1245Z"
          fill={color}
        />
        <path
          d="M15.1256 10.1245L12.001 13.2499H15.1256L18.2501 10.1245H15.1256Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
