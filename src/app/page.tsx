"use client";
import { useState } from "react";
import CollectionTabs from "./components/CollectionTabs";
import MyCollection from "./features/myCollection/MyCollection";
import SharedCollection from "./features/sharedCollection/SharedCollection";
import Published from "./features/published/Published";

export default function Home() {
  const [activeTab, setActiveTab] = useState("published");

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center mb-4">
        <CollectionTabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === "my-collections" && <MyCollection />}
      {activeTab === "shared-collections" && <SharedCollection />}
      {activeTab === "published" && <Published />}
    </div>
  );
}
