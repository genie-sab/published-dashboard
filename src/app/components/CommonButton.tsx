"use client";
import React from "react";
import styles from "../styles/CommonButton.module.scss";

interface CommonButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

const CommonButton = ({
  children,
  icon,
  variant = "default",
  size = "md",
  disabled = false,
  onClick,
}: CommonButtonProps) => {
  const classNames = [
    styles.btn,
    variant !== "default" ? styles[variant] : "",
    size !== "md" ? styles[size] : "",
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {icon && icon}
      {children}
    </button>
  );
};

export default CommonButton;
