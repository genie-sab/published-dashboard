"use client";

interface DeleteIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const DeleteIcon = ({
  width = 14,
  height = 14,
  color = "#2A1057",
}: DeleteIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 3.49089C10.3075 3.29839 8.35333 3.19922 6.405 3.19922C5.25 3.19922 4.095 3.25755 2.94 3.37422L1.75 3.49089"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.95605 2.90145L5.08439 2.13728C5.17772 1.58311 5.24772 1.16895 6.23355 1.16895H7.76189C8.74772 1.16895 8.82355 1.60645 8.91105 2.14311L9.03939 2.90145"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9961 5.33203L10.6169 11.2062C10.5527 12.122 10.5002 12.8337 8.87273 12.8337H5.12773C3.50023 12.8337 3.44773 12.122 3.38356 11.2062L3.00439 5.33203"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.02588 9.625H7.96838"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.54395 7.29395H8.46061"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
