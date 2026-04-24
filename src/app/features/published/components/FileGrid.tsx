"use client";
import Cards from "@/app/components/Cards";
import { FileRow } from "../data";

interface FileGridProps {
  data: FileRow[];
  selected: Set<number>;
  onToggleSelect: (id: number) => void;
}

const FileGrid = ({ data, selected, onToggleSelect }: FileGridProps) => {
  return (
    <div className="row g-3">
      {data.map((file) => (
        <div key={file.id} className="col-12 col-md-6 col-lg-4">
          <Cards
            fileName={file.name}
            fileType={file.type}
            downloads={file.downloads}
            views={file.views}
            revenue={file.revenue}
            publishedAt={file.publishedAt}
            selected={selected.has(file.id)}
            onToggleSelect={() => onToggleSelect(file.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default FileGrid;
