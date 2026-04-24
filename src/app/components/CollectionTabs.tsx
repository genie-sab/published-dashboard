"use client";
import React from "react";
import styles from "../styles/CollectionTabs.module.scss";
import CollectionsIcon from "../iconComponents/CollectionsIcon";
import SharedIcon from "../iconComponents/SharedIcon";
import PublishedIcon from "../iconComponents/PublishedIcon";

const tabs = [
  {
    key: "my-collections",
    label: "My Collections",
    icon: <CollectionsIcon />,
  },
  {
    key: "shared-collections",
    label: "Shared Collections",
    icon: <SharedIcon />,
  },
  {
    key: "published",
    label: "Published",
    icon: <PublishedIcon />,
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
