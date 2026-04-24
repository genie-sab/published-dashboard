"use client";
import Cards from "@/app/components/Cards";

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

const sampleData: FileRow[] = [
  { id: 1, name: "Maths Chapter 1.pdf", type: "pdf", downloads: 20, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 2, name: "Maths Chapter 1.pdf", type: "pdf", downloads: 43, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 3, name: "Chemistry Chapter 1.docs", type: "doc", downloads: 0, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 4, name: "Maths Chapter 1.xls", type: "xls", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 5, name: "Maths Chapter 1.pdf", type: "pdf", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 6, name: "Maths Chapter 1.xls", type: "xls", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 7, name: "Maths Chapter 1.pptx", type: "ppt", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 8, name: "Maths Chapter 1.txt", type: "txt", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 9, name: "Chemistry Chapter 1.docs", type: "doc", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
  { id: 10, name: "Mitochondria.png", type: "img", downloads: 340, views: 102040, revenue: 9089, publishedAt: "12/02/2023" },
];

const FileGrid = () => {
  return (
    <div className="row g-3">
      {sampleData.map((file) => (
        <div key={file.id} className="col-12 col-md-6 col-lg-4">
          <Cards
            fileName={file.name}
            fileType={file.type}
            downloads={file.downloads}
            views={file.views}
            revenue={file.revenue}
            publishedAt={file.publishedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default FileGrid;
