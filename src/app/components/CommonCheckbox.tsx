"use client";
import CheckIcon from "../iconComponents/CheckIcon";
import styles from "../styles/CommonCheckbox.module.scss";

interface CommonCheckboxProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
}

const CommonCheckbox = ({ checked, onChange, ariaLabel }: CommonCheckboxProps) => {
  return (
    <label className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      <span className={`${styles.box} ${checked ? styles.checked : ""}`}>
        {checked && <CheckIcon />}
      </span>
    </label>
  );
};

export default CommonCheckbox;
