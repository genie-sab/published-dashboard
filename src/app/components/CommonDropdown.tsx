"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/CommonDropdown.module.scss";

export interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  value: string;
}

interface CommonDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (value: string) => void;
  activeValue?: string;
  style?: object;
}

const CommonDropdown = ({ trigger, items, onSelect, activeValue, style }: CommonDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className={styles.wrapper} ref={ref} style={style}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
      >
        {trigger}
      </button>

      {open && (
        <div className={styles.dropdown}>
          {items.map((item) => (
            <button
              key={item.value}
              className={`${styles.menuItem} ${activeValue === item.value ? styles.active : ""}`}
              onClick={() => {
                onSelect(item.value);
                setOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonDropdown;
