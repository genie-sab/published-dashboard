export type FileType = "pdf" | "doc" | "xls" | "ppt" | "img" | "txt";

export const fileTypeIconPaths: Record<FileType, string> = {
  pdf: "/icons/pdf-logo.png",
  doc: "/icons/doc-logo.png",
  xls: "/icons/excel-logo.png",
  ppt: "/icons/ppt-logo.png",
  img: "/icons/gallery.png",
  txt: "/icons/txt.logo.png",
};

export interface FileRow {
  id: number;
  name: string;
  type: FileType;
  downloads: number;
  views: number;
  revenue: number;
  publishedAt: string;
}

export const sampleData: FileRow[] = [
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
  { id: 11, name: "Maths Chapter 2.pdf", type: "pdf", downloads: 20, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 12, name: "Maths Chapter 3.pdf", type: "pdf", downloads: 43, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 13, name: "Chemistry Chapter 2.docs", type: "doc", downloads: 0, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 14, name: "Maths Chapter 2.xls", type: "xls", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 15, name: "Maths Chapter 4.pdf", type: "pdf", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 16, name: "Maths Chapter 3.xls", type: "xls", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 17, name: "Maths Chapter 2.pptx", type: "ppt", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 18, name: "Maths Chapter 2.txt", type: "txt", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 19, name: "Chemistry Chapter 3.docs", type: "doc", downloads: 203, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
  { id: 20, name: "Mitochondria 2.png", type: "img", downloads: 340, views: 102040, revenue: 9089, publishedAt: "12 Feb 2023" },
];
