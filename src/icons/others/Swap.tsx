import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Swap = ({
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
          d="M6.80757 19L6.80757 8.74898L4.99991 10.5566L3.58569 9.14242L6.41412 6.31399L7.82834 4.89978L9.24255 6.31399L12.071 9.14242L10.6568 10.5566L8.80757 8.70744L8.80757 17H10.8078V19H8.80756V19H6.80757ZM16.8077 7.00004H16.8076L16.8076 15.3075L18.6509 13.4642L20.0651 14.8784L17.2367 17.7068L15.8225 19.121L14.4083 17.7068L11.5798 14.8784L12.994 13.4642L14.8076 15.2778L14.8076 7.00004L12.8077 7.00004L12.8077 5.00004L14.8076 5.00003L16.8076 5.00003L16.8077 5.00004V7.00004Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
