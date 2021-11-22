import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const Link = ({
  color = "#E2665C",
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24 `}>
        <path
          d="M12.5355 14.6758L10.3934 16.818C10.3934 16.818 10.3934 16.818 10.3934 16.818C10.3934 16.818 10.3934 16.8181 10.3933 16.8181C9.5075 17.7039 8.0661 17.704 7.18019 16.8181C6.75102 16.3889 6.51472 15.8183 6.51472 15.2114C6.51472 14.6046 6.75102 14.0342 7.18004 13.605C7.18009 13.6049 7.18014 13.6049 7.18019 13.6048L9.32225 11.4627C9.61798 11.1669 9.61798 10.6874 9.3222 10.3917C9.02648 10.0959 8.54692 10.0959 8.25114 10.3917L6.10908 12.5338C6.10893 12.5339 6.10877 12.5341 6.10862 12.5343C5.39373 13.2494 5 14.2002 5 15.2114C5 16.2229 5.39388 17.1739 6.10913 17.8891C6.8474 18.6273 7.81708 18.9965 8.7868 18.9965C9.75652 18.9965 10.7262 18.6273 11.4644 17.8891V17.8891C11.4645 17.8891 11.4645 17.889 11.4645 17.889L13.6065 15.7469C13.9023 15.4512 13.9023 14.9716 13.6065 14.6758C13.3108 14.3801 12.8313 14.3801 12.5355 14.6758Z"
          fill={color}
        />
        <path
          d="M19.0001 8.78499C19.0001 7.77351 18.6062 6.82257 17.891 6.10732C16.4145 4.63087 14.0121 4.63092 12.5357 6.10732C12.5356 6.10742 12.5355 6.10747 12.5355 6.10757L10.3935 8.24954C10.0977 8.54526 10.0977 9.02487 10.3935 9.32059C10.5414 9.46853 10.7352 9.54245 10.929 9.54245C11.1228 9.54245 11.3167 9.46848 11.4645 9.32059L13.6065 7.17863C13.6066 7.17853 13.6067 7.17848 13.6068 7.17838C14.4926 6.29257 15.934 6.29252 16.8199 7.17838C17.249 7.60755 17.4854 8.17814 17.4854 8.78499C17.4854 9.39179 17.2491 9.96228 16.8201 10.3915C16.82 10.3915 16.82 10.3916 16.8199 10.3916L14.6778 12.5337C14.3821 12.8294 14.3821 13.309 14.6779 13.6048C14.8258 13.7527 15.0196 13.8266 15.2134 13.8266C15.4072 13.8266 15.6011 13.7527 15.749 13.6048L17.891 11.4627C17.8912 11.4625 17.8913 11.4623 17.8915 11.4622C18.6064 10.747 19.0001 9.79622 19.0001 8.78499Z"
          fill={color}
        />
        <path
          d="M9.32254 14.6758C9.47043 14.8237 9.66426 14.8976 9.85804 14.8976C10.0519 14.8976 10.2457 14.8237 10.3936 14.6758L14.6778 10.3915C14.9736 10.0958 14.9736 9.61626 14.6778 9.32049C14.3821 9.02476 13.9026 9.02476 13.6068 9.32049L9.32254 13.6047C9.02676 13.9005 9.02676 14.3801 9.32254 14.6758Z"
          fill={color}
        />
      </Svg>
    </div>
  );
};
