import React from "react";
import { IIcon } from "../../interfaces/index.tsx";
import { svgSmallIcon, svgStyle } from "../../styles/index.ts";

export const Close = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={`${className} cursor-pointer`}
    {...svgSmallIcon}
    {...rest}
  >
    <path
      stroke="#d1d5db"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
    />
  </svg>
);

export const VsCode = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={300}
    viewBox="0 0 32 32"
    className={`${className} cursor-pointer`}
    {...rest}
  >
    <title>{"file_type_vscode"}</title>
    <path
      d="m29.01 5.03-5.766-2.776a1.742 1.742 0 0 0-1.989.338L2.38 19.8a1.166 1.166 0 0 0-.08 1.647c.025.027.05.053.077.077l1.541 1.4a1.165 1.165 0 0 0 1.489.066L28.142 5.75A1.158 1.158 0 0 1 30 6.672v-.067a1.748 1.748 0 0 0-.99-1.575Z"
      style={{
        fill: "#0065a9",
      }}
    />
    <path
      d="m29.01 26.97-5.766 2.777a1.745 1.745 0 0 1-1.989-.338L2.38 12.2a1.166 1.166 0 0 1-.08-1.647c.025-.027.05-.053.077-.077l1.541-1.4A1.165 1.165 0 0 1 5.41 9.01l22.732 17.24A1.158 1.158 0 0 0 30 25.328v.072a1.749 1.749 0 0 1-.99 1.57Z"
      style={{
        fill: "#007acc",
      }}
    />
    <path
      d="M23.244 29.747a1.745 1.745 0 0 1-1.989-.338A1.025 1.025 0 0 0 23 28.684V3.316a1.024 1.024 0 0 0-1.749-.724 1.744 1.744 0 0 1 1.989-.339l5.765 2.772A1.748 1.748 0 0 1 30 6.6v18.8a1.748 1.748 0 0 1-.991 1.576Z"
      style={{
        fill: "#1f9cf0",
      }}
    />
  </svg>
);

export const RightArrow = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#6b7280"
    viewBox="0 0 492.004 492.004"
    className={`${className}`}
    {...svgSmallIcon}
    {...rest}
  >
    <path d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
  </svg>
);

export const BottomArrow = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="#6b7280"
    viewBox="0 0 491.996 491.996"
    className={`${className}`}
    {...svgSmallIcon}
    {...rest}
  >
    <path d="m484.132 124.986-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86-7.208 0-13.964 2.792-19.036 7.86l-183.84 183.848L62.056 108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968 2.788-19.036 7.856l-16.12 16.128c-10.496 10.488-10.496 27.572 0 38.06l219.136 219.924c5.064 5.064 11.812 8.632 19.084 8.632h.084c7.212 0 13.96-3.572 19.024-8.632l218.932-219.328c5.072-5.064 7.856-12.016 7.864-19.224 0-7.212-2.792-14.068-7.864-19.128z" />
  </svg>
);

export const FolderPlus = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...svgSmallIcon}
    {...rest}
  >
    <path
      stroke="#d1d5db"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 13h6m-3-3v6m.063-9.937-.126-.126c-.346-.346-.519-.519-.72-.642a2.001 2.001 0 0 0-.579-.24C10.409 5 10.165 5 9.676 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 19 5.08 19 6.2 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.48 21 16.92 21 15.8v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 7 18.92 7 17.8 7h-3.475c-.489 0-.733 0-.963-.055-.204-.05-.4-.13-.579-.24-.201-.123-.374-.296-.72-.642Z"
    />
  </svg>
);

export const FilePlus = ({ className = "", ...rest }: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...svgSmallIcon}
    {...rest}
  >
    <path
      stroke="#d1d5db"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 21 7.08 21 8.2 21H12m1-18 6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 9 14.04 9 14.6 9H19m0 0v3m-2 7h4m-2-2v4"
    />
  </svg>
);