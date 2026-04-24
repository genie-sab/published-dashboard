"use client";

interface LibraryIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const LibraryIcon = ({
  width = 18,
  height = 18,
  color = "#050505",
}: LibraryIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.785 11.4525V5.68499C13.785 5.10749 13.32 4.6875 12.75 4.7325H12.72C11.715 4.815 10.1925 5.33251 9.33748 5.86501L9.25499 5.91751C9.11999 6.00001 8.88745 6.00001 8.74495 5.91751L8.62497 5.84251C7.77747 5.31001 6.25497 4.80749 5.24997 4.72499C4.67997 4.67999 4.21497 5.10751 4.21497 5.67751V11.4525C4.21497 11.91 4.58995 12.345 5.04745 12.3975L5.18245 12.42C6.21745 12.555 7.82249 13.0875 8.73749 13.59L8.75996 13.5975C8.88746 13.6725 9.09745 13.6725 9.21745 13.5975C10.1325 13.0875 11.745 12.5625 12.7875 12.42L12.945 12.3975C13.41 12.345 13.785 11.9175 13.785 11.4525Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.07501V13.245"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LibraryIcon;
