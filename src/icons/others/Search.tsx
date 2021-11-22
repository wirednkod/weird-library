import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Search = ({
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
          d="M16.8494 13.3137C15.2873 14.8758 12.7547 14.8758 11.1926 13.3137C9.63047 11.7516 9.63047 9.21896 11.1926 7.65686C12.7547 6.09477 15.2873 6.09477 16.8494 7.65686C18.4115 9.21896 18.4115 11.7516 16.8494 13.3137ZM10.5441 15.3763C12.8873 17.0463 16.1614 16.8302 18.2636 14.7279C20.6068 12.3848 20.6068 8.5858 18.2636 6.24265C15.9205 3.8995 12.1215 3.8995 9.77836 6.24265C7.67614 8.34486 7.45998 11.6189 9.12987 13.9621L5.53564 17.5563L6.94986 18.9706L10.5441 15.3763Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
