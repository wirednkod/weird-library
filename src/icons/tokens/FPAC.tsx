import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const FPAC = ({
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <path
          d="M12.0149 21.66C17.3361 21.66 21.6499 17.3463 21.6499 12.025C21.6499 6.70375 17.3361 2.39001 12.0149 2.39001C6.69362 2.39001 2.37988 6.70375 2.37988 12.025C2.37988 17.3463 6.69362 21.66 12.0149 21.66Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M16.3901 11.935L12.0601 5.65503L7.7251 11.935L11.3851 17.24V11.91L10.7901 14.235L9.2001 11.935L12.0601 7.80003L14.9151 11.935L13.3301 14.235L12.0601 9.26503V18.22L16.3901 11.935Z"
          fill="white"
        />
        <rect x="14" width="10" height="10" rx="5" fill="black" />
        <path
          d="M16.5 3.49525C16.5 2.94559 16.9684 2.5 17.5463 2.5H22.1237C22.1237 3.04966 21.6553 3.49525 21.0775 3.49525H16.5Z"
          fill="white"
        />
        <path
          d="M16.5 5.61011C16.5 5.06045 16.9684 4.61487 17.5463 4.61487H20.162C20.162 5.16452 19.6935 5.61011 19.1157 5.61011H16.5Z"
          fill="white"
        />
        <path
          d="M16.5 7.16517C16.5 6.85599 16.7635 6.60535 17.0885 6.60535C17.4136 6.60535 17.6771 6.85599 17.6771 7.16517C17.6771 7.47436 17.4136 7.725 17.0885 7.725C16.7635 7.725 16.5 7.47436 16.5 7.16517Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7.19659"
            y1="3.68148"
            x2="16.8312"
            y2="20.3691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#05C1DA" />
            <stop offset="0.4329" stop-color="#00BED6" />
            <stop offset="1" stop-color="#00B3CC" />
          </linearGradient>
        </defs>
      </Svg>
    </div>
  );
};
