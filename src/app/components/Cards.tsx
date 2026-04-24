"use client";
import Image from "next/image";
import FileActionMenu from "../features/published/components/sub/FileActionMenu";
import CommonCheckbox from "./CommonCheckbox";
import { FileType, fileTypeIconPaths } from "../features/published/data";
import styles from "../styles/Cards.module.scss";

interface CardProps {
  fileName: string;
  fileType: FileType;
  downloads: number;
  views: number;
  revenue: number;
  publishedAt: string;
  selected?: boolean;
  onToggleSelect?: () => void;
}

const Cards = ({
  fileName,
  fileType,
  downloads,
  views,
  revenue,
  publishedAt,
  selected = false,
  onToggleSelect,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.fileIcon}>
          <Image
            src={fileTypeIconPaths[fileType]}
            alt={fileType}
            width={24}
            height={24}
          />
        </div>
        <span className={styles.fileName}>{fileName}</span>
        <div className={styles.cardActions}>
          <FileActionMenu />
          <CommonCheckbox
            checked={selected}
            onChange={() => onToggleSelect?.()}
            ariaLabel={`Select ${fileName}`}
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
