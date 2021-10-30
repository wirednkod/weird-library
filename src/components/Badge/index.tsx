import React from "react";
import { getTheme } from "../../utils";

import styled from "styled-components";
import { BadgeProps } from "./types";

export const BadgeWrapper = styled.div<BadgeProps>`
  ${(props) => {
    const theme = getTheme(props);
    const { badge } = theme;

    return `
        padding: 4px 16px;
        background-color: ${
          badge[props.type]
            ? badge[props.type].background
            : badge.info.background
        };
        ${
          props.align && props.align === "center"
            ? `align-items: center;`
            : `align-items: ${`flex-` + props.align};`
        }
        ${
          props.fullWidth
            ? `display: flex; flex-direction: column;`
            : `
            width: max-content;
            width: -moz-max-content;
            width: -webkit-max-content;
            max-width: max-content;
            max-width: -moz-max-content;
            max-width: -webkit-max-content;
            `
        }
    `;
  }}
`;

export const BadgeParagraph = styled.p<BadgeProps>`
  ${(props) => {
    const theme = getTheme(props);
    const { badge } = theme;
    return `
        margin: 0px;
        font-size: ${badge.fontSize};
        color: ${
          badge[props.type] ? badge[props.type].color : badge.info.background
        };
        font-weight: 500;
    `;
  }}
`;

export function Badge(props: BadgeProps) {
  return (
    <BadgeWrapper {...props}>
      <BadgeParagraph {...props}>{props.text}</BadgeParagraph>
    </BadgeWrapper>
  );
}
