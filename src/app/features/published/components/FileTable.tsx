"use client";
import { useEffect, useState } from "react";
import FileActionMenu from "@/app/components/FileActionMenu";
import styles from "../styles/FileTable.module.scss";

type FileType = "pdf" | "doc" | "xls" | "ppt" | "img" | "txt";

interface FileRow {
  id: number;
  name: string;
  type: FileType;
  downloads: number;
  views: number;
  revenue: number;
  publishedAt: string;
}

interface FileTableProps {
  onSelectionChange?: (count: number) => void;
}

const sampleData: FileRow[] = [
  { id: 1, name: "Maths Chapter 1.pdf", type: "pdf", downloads: 20, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 2, name: "Maths Chapter 1.pdf", type: "pdf", downloads: 43, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 3, name: "Chemistry Chapter 1.docs", type: "doc", downloads: 0, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 4, name: "Maths Chapter 1.xls", type: "xls", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 5, name: "Maths Chapter 1.pdf", type: "pdf", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 6, name: "Maths Chapter 1.xls", type: "xls", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 7, name: "Maths Chapter 1.pptx", type: "ppt", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 8, name: "Maths Chapter 1.txt", type: "txt", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 9, name: "Chemistry Chapter 1.docs", type: "doc", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 10, name: "Mitochondria.png", type: "img", downloads: 340, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
];

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

const ITEMS_PER_PAGE = 10;

const FileTable = ({ onSelectionChange }: FileTableProps) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const data = sampleData;
  const totalPages = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE));

  const allSelected = data.length > 0 && selected.size === data.length;

  useEffect(() => {
    onSelectionChange?.(selected.size);
  }, [selected, onSelectionChange]);

  const toggleSelect = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(data.map((f) => f.id)));
    }
  };

  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageData = data.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4) pages.push("ellipsis");
      if (currentPage > 3 && currentPage < totalPages - 2) pages.push(currentPage);
      if (currentPage < totalPages - 3) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div>
      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkboxCell}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={allSelected}
                  onChange={toggleAll}
                  aria-label="Select all"
                />
              </th>
              <th>Name</th>
              <th>Downloads</th>
              <th>Views</th>
              <th>Revenue</th>
              <th>Published at</th>
              <th className={styles.menuCell}></th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((file) => (
              <tr
                key={file.id}
                className={selected.has(file.id) ? styles.selected : ""}
              >
                <td className={styles.checkboxCell}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selected.has(file.id)}
                    onChange={() => toggleSelect(file.id)}
                    aria-label={`Select ${file.name}`}
                  />
                </td>
                <td>
                  <div className={styles.nameCell}>
                    <div className={`${styles.fileIcon} ${styles[file.type]}`}>
                      {fileTypeIcons[file.type]}
                    </div>
                    {file.name}
                  </div>
                </td>
                <td>{file.downloads}</td>
                <td>{file.views.toLocaleString()}</td>
                <td>${file.revenue.toLocaleString()}</td>
                <td>{file.publishedAt}</td>
                <td className={styles.menuCell}>
                  <FileActionMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            aria-label="First page"
          >
            &laquo;
          </button>
          <button
            className={styles.pageBtn}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            aria-label="Previous page"
          >
            &lsaquo;
          </button>

          {getPageNumbers().map((page, i) =>
            page === "ellipsis" ? (
              <span key={`e-${i}`} className={styles.ellipsis}>
                &hellip;
              </span>
            ) : (
              <button
                key={page}
                className={`${styles.pageBtn} ${currentPage === page ? styles.active : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className={styles.pageBtn}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            aria-label="Next page"
          >
            &rsaquo;
          </button>
          <button
            className={styles.pageBtn}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            aria-label="Last page"
          >
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default FileTable;
