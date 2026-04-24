"use client";

interface CheckIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CheckIcon = ({
  width = 14,
  height = 14,
  color = "#6927DA",
}: CheckIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 3.5L5.24999 9.91667L2.33333 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
