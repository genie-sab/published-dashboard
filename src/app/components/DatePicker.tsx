"use client";
import { useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import styles from "../styles/DatePicker.module.scss";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  style?: object;
}

const DatePicker = ({ value, onChange, style }: DatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pickerOpen, setPickerOpen] = useState(false);

  const formatDate = (val: string) => {
    if (!val) return "Date";
    const d = new Date(val);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  const handleClick = () => {
    if (pickerOpen) {
      inputRef.current?.blur();
      setPickerOpen(false);
    } else {
      inputRef.current?.showPicker();
      setPickerOpen(true);
    }
  };

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.trigger} onClick={handleClick}>
        <BsCalendar3 />
        <span className={styles.label}>{formatDate(value)}</span>
        <IoChevronDown className={styles.chevron} />
      </div>
      <input
        ref={inputRef}
        type="date"
        className={styles.hiddenInput}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setPickerOpen(false);
        }}
        onBlur={() => setPickerOpen(false)}
        tabIndex={-1}
      />
    </div>
  );
};

export default DatePicker;
