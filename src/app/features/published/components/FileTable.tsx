"use client";
import { useState } from "react";
import Image from "next/image";
import FileActionMenu from "@/app/features/published/components/sub/FileActionMenu";
import CommonCheckbox from "@/app/components/CommonCheckbox";
import { FileRow, fileTypeIconPaths } from "../data";
import styles from "../styles/FileTable.module.scss";

interface FileTableProps {
  data: FileRow[];
  selected: Set<number>;
  onToggleSelect: (id: number) => void;
  onToggleAll: () => void;
}

const ITEMS_PER_PAGE = 10;

const FileTable = ({
  data,
  selected,
  onToggleSelect,
  onToggleAll,
}: FileTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE));

  const allSelected = data.length > 0 && data.every((f) => selected.has(f.id));

  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageData = data.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4) pages.push("ellipsis");
      if (currentPage > 3 && currentPage < totalPages - 2)
        pages.push(currentPage);
      if (currentPage < totalPages - 3) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkboxCell}>
                <CommonCheckbox
                  checked={allSelected}
                  onChange={onToggleAll}
                  ariaLabel="Select all"
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
              <tr key={file.id}>
                <td className={styles.checkboxCell}>
                  <CommonCheckbox
                    checked={selected.has(file.id)}
                    onChange={() => onToggleSelect(file.id)}
                    ariaLabel={`Select ${file.name}`}
                  />
                </td>
                <td>
                  <div className={styles.nameCell}>
                    <div className={styles.fileIcon}>
                      <Image
                        src={fileTypeIconPaths[file.type]}
                        alt={file.type}
                        width={18}
                        height={18}
                      />
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
            ),
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
