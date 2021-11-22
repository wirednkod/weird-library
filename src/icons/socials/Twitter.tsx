import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Twitter = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24 `}>
        <path
          d="M20 7.53849C19.3981 7.801 18.7616 7.97545 18.11 8.05649C18.7969 7.6491 19.3104 7.0039 19.5533 6.24316C18.9103 6.62449 18.2069 6.89303 17.4733 7.03716C17.0235 6.55715 16.4398 6.2235 15.7979 6.07952C15.156 5.93555 14.4856 5.98791 13.8739 6.2298C13.2622 6.47169 12.7373 6.89194 12.3674 7.43597C11.9976 7.98 11.7999 8.62266 11.8 9.28049C11.7974 9.53188 11.8229 9.78276 11.876 10.0285C10.571 9.96481 9.29422 9.62645 8.129 9.03551C6.96378 8.44457 5.93639 7.61436 5.114 6.59916C4.69193 7.3208 4.56122 8.17632 4.74855 8.99107C4.93588 9.80581 5.42713 10.5183 6.122 10.9832C5.60259 10.9686 5.09429 10.8294 4.64 10.5772V10.6132C4.64079 11.3704 4.90239 12.1043 5.38077 12.6914C5.85915 13.2785 6.52513 13.6828 7.26667 13.8365C6.98605 13.9104 6.69685 13.9468 6.40667 13.9445C6.19814 13.9482 5.98983 13.9294 5.78533 13.8885C5.99736 14.5398 6.40614 15.1094 6.95537 15.5187C7.5046 15.928 8.16725 16.1569 8.852 16.1738C7.69113 17.0821 6.2593 17.575 4.78533 17.5738C4.52283 17.5751 4.26051 17.5595 4 17.5272C5.4999 18.4937 7.24768 19.0049 9.032 18.9992C10.26 19.0074 11.4773 18.7716 12.6134 18.3055C13.7495 17.8394 14.7817 17.1522 15.65 16.2839C16.5184 15.4155 17.2055 14.3834 17.6717 13.2473C18.1378 12.1112 18.3736 10.8938 18.3653 9.66582C18.3653 9.52116 18.3607 9.38116 18.3533 9.24182C19.0013 8.77897 19.5593 8.20173 20 7.53849Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
