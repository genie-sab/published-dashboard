"use client";

interface SharedIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const SharedIcon = ({
  width = 16,
  height = 16,
  color = "#454648",
}: SharedIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.42 4.76667C12.4467 5.17333 12.4133 5.63333 12.3333 6.14667L11.8467 9.27333C11.4333 11.88 10.2267 12.76 7.62 12.3533L4.49334 11.86C3.59334 11.72 2.9 11.48 2.39334 11.12C1.42667 10.4467 1.14667 9.34 1.41334 7.63333L1.90667 4.50667C2.32 1.9 3.52667 1.02 6.13334 1.42667L9.26 1.92C11.3533 2.24667 12.3333 3.1 12.42 4.76667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6667 8.98L12.6667 11.9867C11.8333 14.4933 10.5 15.16 7.99334 14.3267L4.98667 13.3267C3.47334 12.8267 2.63334 12.1333 2.39334 11.12C2.90001 11.48 3.59334 11.72 4.49334 11.86L7.62001 12.3533C10.2267 12.76 11.4333 11.88 11.8467 9.27333L12.3333 6.14667C12.4133 5.63333 12.4467 5.17333 12.42 4.76667C14.0133 5.61333 14.36 6.89333 13.6667 8.98Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.49334 5.98667C6.13399 5.98667 6.65334 5.46732 6.65334 4.82667C6.65334 4.18602 6.13399 3.66667 5.49334 3.66667C4.85269 3.66667 4.33334 4.18602 4.33334 4.82667C4.33334 5.46732 4.85269 5.98667 5.49334 5.98667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SharedIcon;
