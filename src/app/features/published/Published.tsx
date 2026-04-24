"use client";
import { useCallback, useMemo, useState } from "react";
import ToggleButton from "@/app/components/ToggleButton";
import CommonButton from "@/app/components/CommonButton";
import FileTable from "./components/FileTable";
import FileGrid from "./components/FileGrid";
import { sampleData, FileRow } from "./data";
import styles from "./styles/Published.module.scss";
import { FaListUl } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import DatePicker from "@/app/components/DatePicker";
import SortButton from "./components/sub/SortButton";

const deleteIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const viewOptions = [
  { value: "list", icon: <FaListUl /> },
  { value: "grid", icon: <BsGrid /> },
];

type SortOption = "" | "downloads-asc" | "downloads-desc" | "views-asc" | "views-desc" | "revenue-asc" | "revenue-desc";

function applyFilters(data: FileRow[], search: string, sort: SortOption, date: string): FileRow[] {
  let filtered = data;

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter((f) => f.name.toLowerCase().includes(q));
  }

  if (date) {
    filtered = filtered.filter((f) => {
      const parsed = new Date(f.publishedAt);
      const selected = new Date(date);
      return (
        parsed.getFullYear() === selected.getFullYear() &&
        parsed.getMonth() === selected.getMonth() &&
        parsed.getDate() === selected.getDate()
      );
    });
  }

  if (sort) {
    const [field, dir] = sort.split("-") as [keyof FileRow, "asc" | "desc"];
    filtered = [...filtered].sort((a, b) => {
      const av = a[field] as number;
      const bv = b[field] as number;
      return dir === "asc" ? av - bv : bv - av;
    });
  }

  return filtered;
}

const Published = () => {
  const [view, setView] = useState("list");
  const [data, setData] = useState<FileRow[]>(sampleData);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("");
  const [date, setDate] = useState("");

  const filteredData = useMemo(
    () => applyFilters(data, search, sort, date),
    [data, search, sort, date]
  );

  const toggleSelect = useCallback((id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    setSelected((prev) => {
      const allIds = filteredData.map((f) => f.id);
      const allSelected = allIds.every((id) => prev.has(id));
      if (allSelected) return new Set<number>();
      return new Set(allIds);
    });
  }, [filteredData]);

  const handleDelete = useCallback(() => {
    setData((prev) => prev.filter((f) => !selected.has(f.id)));
    setSelected(new Set());
  }, [selected]);

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

      {/* Mobile: Search + Date/Sort filters */}
      <div className={`d-block d-md-none ${styles.mobileFilters}`}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filterRow}>
          <DatePicker value={date} onChange={setDate} style={{ flex: 1 }} />
          <SortButton value={sort} onChange={(v) => setSort(v as SortOption)} style={{ flex: 1 }} />
        </div>
      </div>

      {/* Selected count + Delete */}
      {selected.size > 0 && (
        <div className={styles.toolbar}>
          <span className={styles.selectedCount}>
            Selected {selected.size} item{selected.size > 1 ? "s" : ""}
          </span>
          <CommonButton icon={deleteIcon} onClick={handleDelete}>
            Delete
          </CommonButton>
        </div>
      )}

      {/* Desktop: list or grid based on toggle */}
      <div className="d-none d-md-block">
        {view === "list" ? (
          <FileTable
            data={filteredData}
            selected={selected}
            onToggleSelect={toggleSelect}
            onToggleAll={toggleAll}
          />
        ) : (
          <FileGrid
            data={filteredData}
            selected={selected}
            onToggleSelect={toggleSelect}
          />
        )}
      </div>

      {/* Mobile: always card view */}
      <div className="d-block d-md-none">
        <FileGrid
          data={filteredData}
          selected={selected}
          onToggleSelect={toggleSelect}
        />
      </div>
    </>
  );
};

export default Published;
