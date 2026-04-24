"use client";
import React from "react";
import styles from "../styles/CollectionTabs.module.scss";

const tabs = [
  {
    key: "my-collections",
    label: "My Collections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2" />
        <circle cx="12" cy="14" r="2" />
        <path d="M12 12v-1.5" />
      </svg>
    ),
  },
  {
    key: "shared-collections",
    label: "Shared Collections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
  },
  {
    key: "published",
    label: "Published",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="M12 7v4" />
        <path d="M12 11l-6 6M12 11l6 6" />
      </svg>
    ),
  },
];

interface CollectionTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const CollectionTabs = ({ activeTab, onChange }: CollectionTabsProps) => {
  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${styles.tab} ${activeTab === tab.key ? styles.active : ""}`}
          onClick={() => onChange(tab.key)}
          aria-selected={activeTab === tab.key}
          role="tab"
        >
          {tab.icon}
          <span className={styles.tabLabel}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CollectionTabs;
