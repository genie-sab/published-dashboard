"use client";
import { useState } from "react";
import ToggleButton from "@/app/components/ToggleButton";
import CommonButton from "@/app/components/CommonButton";
import FileTable from "./components/FileTable";
import FileGrid from "./components/FileGrid";
import styles from "./styles/Published.module.scss";

const deleteIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const viewOptions = [
  { value: "list", label: "List" },
  { value: "grid", label: "Grid" },
];

const Published = () => {
  const [view, setView] = useState("list");
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumb}>
        <a href="#">Go to My Collections</a>
        <span className={styles.separator}>&gt;</span>
        <a href="#" className={styles.active}>First Semester Bio</a>
      </nav>

      {/* Title + Toggle */}
      <div className={styles.titleRow}>
        <h1 className={styles.title}>Published</h1>
        <div className="d-none d-md-block">
          <ToggleButton options={viewOptions} value={view} onChange={setView} />
        </div>
      </div>

      {/* Selected count + Delete */}
      <div className={styles.toolbar}>
        <span className={styles.selectedCount}>
          {selectedCount > 0
            ? `Selected ${selectedCount} item${selectedCount > 1 ? "s" : ""}`
            : "\u00A0"}
        </span>
        {selectedCount > 0 && (
          <CommonButton icon={deleteIcon} onClick={() => setSelectedCount(0)}>
            Delete
          </CommonButton>
        )}
      </div>

      {/* Desktop: list or grid based on toggle */}
      <div className="d-none d-md-block">
        {view === "list" ? (
          <FileTable onSelectionChange={setSelectedCount} />
        ) : (
          <FileGrid />
        )}
      </div>

      {/* Mobile: always card view */}
      <div className="d-block d-md-none">
        <FileGrid />
      </div>
    </>
  );
};

export default Published;
