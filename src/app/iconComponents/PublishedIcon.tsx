"use client";

interface PublishedIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PublishedIcon = ({
  width = 16,
  height = 16,
  color = "#292D32",
}: PublishedIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.77333C11.96 4.76667 11.9134 4.76667 11.8734 4.77333C10.9534 4.74 10.22 3.98667 10.22 3.05333C10.22 2.1 10.9867 1.33333 11.94 1.33333C12.8934 1.33333 13.66 2.10667 13.66 3.05333C13.6534 3.98667 12.92 4.74 12 4.77333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3131 9.62665C12.2264 9.77998 13.2331 9.61998 13.9398 9.14665C14.8798 8.51998 14.8798 7.49331 13.9398 6.86665C13.2264 6.39331 12.2064 6.23331 11.2931 6.39331"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.98001 4.77329C4.02001 4.76663 4.06667 4.76663 4.10667 4.77329C5.02667 4.73996 5.76001 3.98662 5.76001 3.05329C5.76001 2.09996 4.99334 1.33329 4.04001 1.33329C3.08668 1.33329 2.32001 2.10662 2.32001 3.05329C2.32667 3.98662 3.06001 4.73996 3.98001 4.77329Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66663 9.62665C3.75329 9.77998 2.74663 9.61998 2.03996 9.14665C1.09996 8.51998 1.09996 7.49331 2.03996 6.86665C2.75329 6.39331 3.77329 6.23331 4.68663 6.39331"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00021 9.75328C7.96021 9.74661 7.91355 9.74661 7.87355 9.75328C6.95355 9.71995 6.22021 8.96661 6.22021 8.03328C6.22021 7.07995 6.98688 6.31328 7.94021 6.31328C8.89355 6.31328 9.66021 7.08661 9.66021 8.03328C9.65355 8.96661 8.92021 9.72661 8.00021 9.75328Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06035 11.8533C5.12035 12.48 5.12035 13.5066 6.06035 14.1333C7.12701 14.8466 8.87368 14.8466 9.94035 14.1333C10.8803 13.5066 10.8803 12.48 9.94035 11.8533C8.88035 11.1466 7.12701 11.1466 6.06035 11.8533Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PublishedIcon;
