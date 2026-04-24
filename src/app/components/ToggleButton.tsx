"use client";
import React from "react";
import styles from "../styles/ToggleButton.module.scss";

interface ToggleOption {
  value: string;
  label?: string;
  icon?: React.ReactNode;
}

interface ToggleButtonProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
}

const ToggleButton = ({ options, value, onChange }: ToggleButtonProps) => {
  return (
    <div className={styles.container} role="group">
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.option} ${value === option.value ? styles.active : ""}`}
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
        >
          {option.icon}
          {option.label && <span>{option.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
