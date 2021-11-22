import React from "react";
import { SizeAndColorInterface } from "../types";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)``;

export const FCSC = ({
  width = 24,
  height = 24,
  className,
}: SizeAndColorInterface) => {
  return (
    <div style={{ width, height }} className={className}>
      <Svg viewBox={`0 0 24 24`}>
        <g clip-path="url(#clip0)">
          <path
            d="M12.0004 5.35583C15.6697 5.35583 18.6445 8.33037 18.6445 11.9999C18.6445 15.6695 15.6697 18.6441 12.0004 18.6441C8.33118 18.6441 5.35598 15.6695 5.35598 11.9999C5.35598 8.33037 8.33085 5.35583 12.0004 5.35583ZM8.28484 14.8608C8.3058 14.8969 8.33749 14.9255 8.37551 14.9426C8.41352 14.9598 8.45595 14.9646 8.49685 14.9565L11.4901 14.3564C11.5029 14.3542 11.5162 14.3558 11.5282 14.361C11.5402 14.3663 11.5503 14.3749 11.5574 14.3859C11.5646 14.3969 11.5683 14.4097 11.5681 14.4228C11.568 14.4359 11.564 14.4486 11.5567 14.4594L9.95329 16.8013C9.94635 16.8113 9.94229 16.823 9.94153 16.8351C9.94077 16.8472 9.94334 16.8594 9.94897 16.8701C9.9546 16.8809 9.96307 16.89 9.97347 16.8963C9.98387 16.9026 9.99579 16.9059 10.008 16.9059H13.9926C14.0047 16.9059 14.0166 16.9026 14.027 16.8963C14.0374 16.89 14.0459 16.8809 14.0515 16.8701C14.0572 16.8594 14.0597 16.8472 14.059 16.8351C14.0582 16.823 14.0542 16.8113 14.0472 16.8013L12.4424 14.4621C12.4351 14.4513 12.4312 14.4385 12.431 14.4254C12.4309 14.4124 12.4346 14.3995 12.4417 14.3886C12.4488 14.3776 12.459 14.3689 12.471 14.3637C12.483 14.3585 12.4962 14.3569 12.5091 14.3591L15.5023 14.9591C15.5432 14.9673 15.5857 14.9624 15.6237 14.9453C15.6617 14.9281 15.6934 14.8995 15.7143 14.8635L16.9387 12.7633C16.9591 12.7284 16.9684 12.6882 16.9654 12.6479C16.9624 12.6076 16.9473 12.5692 16.9221 12.5377L12.1291 6.55992C12.1135 6.54039 12.0937 6.52463 12.0711 6.5138C12.0486 6.50296 12.0239 6.49733 11.9989 6.49733C11.9739 6.49733 11.9492 6.50296 11.9267 6.5138C11.9042 6.52463 11.8844 6.54039 11.8687 6.55992L7.0771 12.5343C7.05186 12.5658 7.03675 12.6043 7.03378 12.6446C7.0308 12.6849 7.04009 12.7251 7.06043 12.76L8.28484 14.8608Z"
            fill="#005631"
          />
          <path
            d="M12.0008 2.00049C17.5235 2.00049 22.0015 6.47779 22.0015 12.0012C22.0015 17.5245 17.5245 22.0018 12.0008 22.0018C6.4771 22.0018 2.00014 17.5245 2.00014 12.0012C2.00014 6.47779 6.47777 2.00049 12.0008 2.00049ZM5.74005 5.80908L5.12901 5.1547C4.24866 6.03523 3.54685 7.07764 3.0622 8.22457C2.89087 8.62975 2.74753 9.0462 2.63318 9.47099L3.5079 9.67333C3.69202 9.71593 3.88495 9.69827 4.05827 9.62295C4.2316 9.54763 4.37614 9.41864 4.47063 9.25498L5.16434 8.0549L5.85806 6.85482C5.95331 6.69095 5.99326 6.50077 5.97201 6.31243C5.95075 6.12409 5.86942 5.94759 5.74005 5.80908ZM12.0008 2.30051C11.1591 2.29964 10.3209 2.40845 9.5073 2.6242L9.76965 3.48259C9.8248 3.66337 9.93655 3.82166 10.0885 3.93413C10.2404 4.0466 10.4244 4.1073 10.6134 4.10729H13.3879C13.5769 4.1073 13.7609 4.0466 13.9128 3.93413C14.0647 3.82166 14.1765 3.66337 14.2316 3.48259L14.494 2.6242C13.6805 2.40847 12.8424 2.29966 12.0008 2.30051ZM20.9384 8.2249C20.4537 7.07797 19.7519 6.03555 18.8716 5.15503L18.2609 5.80941C18.1318 5.94751 18.0505 6.12344 18.029 6.31125C18.0076 6.49905 18.047 6.68879 18.1415 6.85248L18.8353 8.05256L19.529 9.25264C19.6234 9.41631 19.768 9.5453 19.9413 9.62062C20.1146 9.69594 20.3076 9.7136 20.4917 9.671L21.3664 9.46865C21.2523 9.04468 21.1093 8.62901 20.9384 8.22457V8.2249ZM18.2619 18.1922L18.8726 18.8466C19.7529 17.9661 20.4547 16.9237 20.9394 15.7767C21.1108 15.3715 21.2541 14.9549 21.3684 14.53L20.4937 14.328C20.3096 14.2854 20.1166 14.303 19.9433 14.3784C19.77 14.4537 19.6254 14.5827 19.531 14.7463L18.8373 15.9464L18.1435 17.1465C18.0485 17.3103 18.0086 17.5003 18.03 17.6884C18.0513 17.8766 18.1326 18.0529 18.2619 18.1912V18.1922ZM12.0008 21.7018C12.8424 21.7027 13.6805 21.5938 14.494 21.3781L14.2316 20.5194C14.1764 20.3387 14.0646 20.1805 13.9127 20.068C13.7608 19.9556 13.5769 19.895 13.3879 19.895H10.6134C10.4244 19.895 10.2404 19.9556 10.0885 20.068C9.93664 20.1805 9.82485 20.3387 9.76965 20.5194L9.5073 21.3781C10.3209 21.5939 11.1591 21.7027 12.0008 21.7018ZM12.0008 19.2393C15.9977 19.2393 19.2379 15.9991 19.2379 12.0018C19.2379 8.00456 15.9977 4.76434 12.0008 4.76434C8.00387 4.76434 4.76332 8.00456 4.76332 12.0018C4.76332 15.9991 8.00354 19.2376 12.0008 19.2376V19.2393ZM3.06287 15.7774C3.54752 16.9243 4.24933 17.9668 5.12967 18.8473L5.74005 18.1912C5.86898 18.053 5.95013 17.8771 5.97155 17.6893C5.99298 17.5015 5.95354 17.3118 5.85906 17.1482L5.16534 15.9481L4.47163 14.748C4.37719 14.5843 4.23264 14.4553 4.05931 14.38C3.88597 14.3046 3.69302 14.287 3.5089 14.3296L2.63418 14.5317C2.74849 14.9557 2.89171 15.3713 3.06287 15.7757V15.7774Z"
            fill="#005631"
          />
        </g>
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
          <clipPath id="clip0">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="matrix(-1 0 0 1 22 2)"
            />
          </clipPath>
        </defs>
      </Svg>
    </div>
  );
};
