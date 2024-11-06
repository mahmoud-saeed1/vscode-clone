import React from "react";
import { IIcon } from "../../interfaces/index.tsx";
import { svgStyle } from "../../styles/index.ts";

export const RightArrow = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#6b7280"
    viewBox="0 0 492.004 492.004"
    className={`${className}`}
    {...svgStyle}
    {...rest}
  >
    <path d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
  </svg>
);

export const DownArrow = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#6b7280"
    viewBox="0 0 491.996 491.996"
    className={`${className}`}
    {...svgStyle}
    {...rest}
  >
    <path d="m484.132 124.986-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z" />
  </svg>
);
export const ClosedFolder = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#FFA000"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...svgStyle}
    {...rest}
  >
    <path d="M20 6h-6.59L11 3.59A2 2 0 0 0 9.59 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
  </svg>
);

export const File = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...svgStyle}
    {...rest}
  >
    <path
      stroke="#6b7280"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9v8.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C17.48 21 16.92 21 15.8 21H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 19.48 5 18.92 5 17.8V6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 3 7.08 3 8.2 3H13m6 6-6-6m6 6h-5a1 1 0 0 1-1-1V3"
    />
  </svg>
);
