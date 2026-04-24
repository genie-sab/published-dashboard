"use client";

interface CollectionsIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CollectionsIcon = ({
  width = 16,
  height = 16,
  color = "#454648",
}: CollectionsIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33332 1.33333C10.6667 1.33333 11.3333 2.00667 11.3333 3.35333V8.05333C11.3333 9.38 10.3933 9.89333 9.23999 9.2L8.35999 8.66666C8.15999 8.54666 7.83999 8.54666 7.63999 8.66666L6.75999 9.2C5.60666 9.89333 4.66666 9.38 4.66666 8.05333V3.35333C4.66666 2.00667 5.33332 1.33333 6.66666 1.33333H9.33332Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.54668 3.32664C2.27334 3.70664 1.33334 5.10664 1.33334 7.93331V9.95331C1.33334 13.32 2.66668 14.6666 6.00001 14.6666H10C13.3333 14.6666 14.6667 13.32 14.6667 9.95331V7.93331C14.6667 5.05997 13.6933 3.65331 11.3333 3.30664"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CollectionsIcon;
