"use client";
import React, { useState } from "react";
import FileActionMenu from "./FileActionMenu";
import styles from "../styles/Cards.module.scss";

type FileType = "pdf" | "doc" | "xls" | "ppt" | "img" | "txt";

interface CardProps {
  fileName: string;
  fileType: FileType;
  downloads: number;
  views: number;
  revenue: number;
  publishedAt: string;
}

const fileTypeIcons: Record<FileType, React.ReactNode> = {
  pdf: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM9 13h1.5c.83 0 1.5.67 1.5 1.5S11.33 16 10.5 16H10v1.5H9V13zm4 0h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H14v1.5h-1V13z" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v1H8v-1zm0 2.5h8v1H8v-1zm0 2.5h5v1H8v-1z" />
    </svg>
  ),
  xls: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 12h3v2H8v-2zm4 0h4v2h-4v-2zm-4 3h3v2H8v-2zm4 0h4v2h-4v-2z" />
    </svg>
  ),
  ppt: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM9 13h3c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2H9v-6z" />
    </svg>
  ),
  img: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 12l2 3 2-2 4 5H6l2-6z" />
    </svg>
  ),
  txt: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 13h8v1H8v-1zm0 2.5h8v1H8v-1zm0 2.5h5v1H8v-1z" />
    </svg>
  ),
};

const Cards = ({
  fileName,
  fileType,
  downloads,
  views,
  revenue,
  publishedAt,
}: CardProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={`${styles.fileIcon} ${styles[fileType]}`}>
          {fileTypeIcons[fileType]}
        </div>
        <span className={styles.fileName}>{fileName}</span>
        <div className={styles.cardActions}>
          <FileActionMenu />
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={checked}
            onChange={() => setChecked(!checked)}
            aria-label={`Select ${fileName}`}
          />
        </div>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Downloads</div>
          <div className={styles.statValue}>{downloads.toLocaleString()}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Views</div>
          <div className={styles.statValue}>{views.toLocaleString()}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Revenue</div>
          <div className={styles.statValue}>{revenue.toLocaleString()}</div>
        </div>
      </div>

      <div className={styles.publishedAt}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        Published at {publishedAt}
      </div>
    </div>
  );
};

export default Cards;
