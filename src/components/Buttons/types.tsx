import React from "react";

type ButtonType = "primary" | "secondary" | "simple";
export interface ButtonProps {
  onClick?: () => void;
  fontFamily?: string;
  borderRadius?: number;
  color?: string;
  theme?: any;
  backgroundColor?: string;
  padding?: string;
  borderColor?: string;
  borderSize?: number;
  children: any;
}

export interface LoginButtonProps {
  children: any;
  height?: number;
  isMetaMask?: boolean;
  isWalletConnect?: boolean;
  onClick: () => void;
}

export interface MenuButtonProps {
  height?: number;
}

export interface LoadingDotsProps {
  buttonType: ButtonType;
  loadingColor?: string;
}

export interface DotProps {
  buttonType: ButtonType;
  color?: string;
  delay: string;
}

export const MetaMask = () => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1681 1L8.17125 4.71124L9.09529 2.52166L13.1681 1Z"
        fill="#E2761B"
        stroke="#E2761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.63273 1L6.58941 4.74639L5.71057 2.52166L1.63273 1Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3704 9.60254L10.0396 11.6415L12.887 12.4249L13.7056 9.64774L11.3704 9.60254Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.1055 9.64774L1.91906 12.4249L4.76652 11.6415L3.43569 9.60254L1.1055 9.64774Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.6056 6.15732L3.81213 7.35757L6.6395 7.48312L6.53906 4.44482L4.6056 6.15732Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1952 6.15731L8.23666 4.40967L8.17138 7.48311L10.9937 7.35757L10.1952 6.15731Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.76647 11.6416L6.4639 10.813L4.99748 9.66797L4.76647 11.6416Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33723 10.813L10.0397 11.6416L9.80365 9.66797L8.33723 10.813Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.04 11.6416L8.33757 10.813L8.47317 11.9228L8.4581 12.3899L10.04 11.6416Z"
        fill="#D7C1B3"
        stroke="#D7C1B3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.76682 11.6416L6.34874 12.3899L6.33869 11.9228L6.46424 10.813L4.76682 11.6416Z"
        fill="#D7C1B3"
        stroke="#D7C1B3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.37351 8.93486L4.95731 8.51804L5.95668 8.06104L6.37351 8.93486Z"
        fill="#233447"
        stroke="#233447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42743 8.93486L8.84425 8.06104L9.84865 8.51804L8.42743 8.93486Z"
        fill="#233447"
        stroke="#233447"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.76654 11.6415L5.00759 9.60254L3.43572 9.64774L4.76654 11.6415Z"
        fill="#CD6116"
        stroke="#CD6116"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.79878 9.60254L10.0398 11.6415L11.3707 9.64774L9.79878 9.60254Z"
        fill="#CD6116"
        stroke="#CD6116"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9939 7.35791L8.17152 7.48346L8.43267 8.93481L8.84949 8.06099L9.85388 8.51798L10.9939 7.35791Z"
        fill="#CD6116"
        stroke="#CD6116"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.95749 8.51798L5.96188 8.06099L6.37369 8.93481L6.63985 7.48346L3.81248 7.35791L4.95749 8.51798Z"
        fill="#CD6116"
        stroke="#CD6116"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.81248 7.35791L4.99766 9.66802L4.95749 8.51798L3.81248 7.35791Z"
        fill="#E4751F"
        stroke="#E4751F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.85398 8.51798L9.80376 9.66802L10.994 7.35791L9.85398 8.51798Z"
        fill="#E4751F"
        stroke="#E4751F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.63957 7.4834L6.37341 8.93475L6.70486 10.6472L6.78018 8.39238L6.63957 7.4834Z"
        fill="#E4751F"
        stroke="#E4751F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.17148 7.4834L8.03588 8.38735L8.09615 10.6472L8.43262 8.93475L8.17148 7.4834Z"
        fill="#E4751F"
        stroke="#E4751F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.43267 8.9344L8.0962 10.6469L8.33725 10.8126L9.80367 9.66761L9.85389 8.51758L8.43267 8.9344Z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.95731 8.51758L4.99749 9.66761L6.4639 10.8126L6.70496 10.6469L6.37351 8.9344L4.95731 8.51758Z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.45797 12.3899L8.47303 11.9228L8.34748 11.8123H6.4542L6.33869 11.9228L6.34874 12.3899L4.76682 11.6416L5.31923 12.0936L6.43913 12.872H8.36255L9.48747 12.0936L10.0399 11.6416L8.45797 12.3899Z"
        fill="#C0AD9E"
        stroke="#C0AD9E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33712 10.8132L8.09607 10.6475H6.70498L6.46393 10.8132L6.33838 11.923L6.45388 11.8126H8.34717L8.47272 11.923L8.33712 10.8132Z"
        fill="#161616"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3791 4.95229L13.8059 2.90333L13.1682 1L8.33701 4.58569L10.1951 6.15756L12.8216 6.92592L13.4042 6.24796L13.1531 6.06717L13.5548 5.70056L13.2435 5.45951L13.6452 5.15317L13.3791 4.95229Z"
        fill="#763D16"
        stroke="#763D16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 2.90333L1.42687 4.95229L1.15568 5.15317L1.55744 5.45951L1.2511 5.70056L1.65286 6.06717L1.40176 6.24796L1.97928 6.92592L4.60578 6.15756L6.4639 4.58569L1.63277 1L1 2.90333Z"
        fill="#763D16"
        stroke="#763D16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8217 6.92608L10.1952 6.15771L10.9937 7.35797L9.80349 9.66807L11.3703 9.64799H13.7056L12.8217 6.92608Z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.60581 6.15771L1.97932 6.92608L1.1055 9.64799H3.43569L4.99753 9.66807L3.81234 7.35797L4.60581 6.15771Z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.17141 7.48319L8.33713 4.58551L9.10047 2.52148H5.71064L6.46393 4.58551L6.6397 7.48319L6.69997 8.39719L6.70499 10.647H8.09608L8.10612 8.39719L8.17141 7.48319Z"
        fill="#F6851B"
        stroke="#F6851B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WalletConnect = () => {
  return (
    <svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.09442 2.53997C7.35599 -0.846658 12.644 -0.846658 15.9056 2.53997L16.2981 2.94756C16.4612 3.11689 16.4612 3.39143 16.2981 3.56076L14.9554 4.95504C14.8738 5.0397 14.7416 5.0397 14.6601 4.95504L14.1199 4.39415C11.8445 2.03155 8.15547 2.03155 5.88012 4.39415L5.30164 4.99481C5.2201 5.07948 5.0879 5.07948 5.00636 4.99481L3.66357 3.60054C3.50049 3.43121 3.50049 3.15667 3.66357 2.98734L4.09442 2.53997ZM18.6826 5.42347L19.8777 6.66438C20.0408 6.83371 20.0408 7.10825 19.8777 7.27759L14.489 12.873C14.3259 13.0423 14.0615 13.0423 13.8984 12.873C13.8984 12.873 13.8984 12.873 13.8984 12.873L10.0739 8.90177C10.0331 8.85944 9.96699 8.85944 9.92622 8.90177C9.92622 8.90177 9.92622 8.90177 9.92622 8.90177L6.10172 12.873C5.93865 13.0423 5.67424 13.0423 5.51116 12.873C5.51116 12.873 5.51116 12.873 5.51116 12.873L0.122309 7.27751C-0.0407696 7.10818 -0.0407696 6.83364 0.122309 6.66431L1.31739 5.4234C1.48047 5.25407 1.74487 5.25407 1.90795 5.4234L5.73258 9.39469C5.77335 9.43702 5.83945 9.43702 5.88022 9.39469C5.88022 9.39469 5.88022 9.39468 5.88022 9.39468L9.70466 5.4234C9.86773 5.25407 10.1321 5.25406 10.2952 5.42339C10.2952 5.42339 10.2952 5.42339 10.2952 5.4234L14.1198 9.39468C14.1606 9.43702 14.2267 9.43702 14.2675 9.39468L18.0921 5.42347C18.2551 5.25414 18.5195 5.25414 18.6826 5.42347Z"
        fill="#3B99FC"
      />
    </svg>
  );
};
