"use client";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/FileActionMenu.module.scss";

const locateIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
  </svg>
);

const viewIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const removeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const FileActionMenu = () => {
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
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((v) => !v)}
        aria-label="More options"
      >
        &bull;&bull;&bull;
      </button>

      {open && (
        <div className={styles.dropdown}>
          <button className={styles.menuItem} onClick={() => setOpen(false)}>
            {locateIcon}
            Locate in library
          </button>
          <button className={styles.menuItem} onClick={() => setOpen(false)}>
            {viewIcon}
            View on market place
          </button>
          <button className={styles.menuItem} onClick={() => setOpen(false)}>
            {removeIcon}
            Remove from market place
          </button>
        </div>
      )}
    </div>
  );
};

export default FileActionMenu;
