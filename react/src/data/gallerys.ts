export interface GalleryImage {
  id: number;
  filename: string;
  url: string;
  alt: string;
}

export interface Gallery {
  albumId: number;
  images: GalleryImage[];
}

export const gallerys: Gallery[] = [
  {
    albumId: 1,
    images: [
      { id: 1, filename: "2024-10-6.0.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.0.JPG", alt: "有情 2024-10-6 0" },
      { id: 2, filename: "2024-10-6.1.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.1.JPG", alt: "有情 2024-10-6 1" },
      { id: 3, filename: "2024-10-6.2.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.2.JPG", alt: "有情 2024-10-6 2" },
      { id: 4, filename: "2024-10-6.3.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.3.JPG", alt: "有情 2024-10-6 3" },
      { id: 5, filename: "2024-10-6.4.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.4.JPG", alt: "有情 2024-10-6 4" },
      { id: 6, filename: "2024-10-6.5.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.5.JPG", alt: "有情 2024-10-6 5" },
      { id: 7, filename: "2024-10-6.6.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.6.JPG", alt: "有情 2024-10-6 6" },
      { id: 8, filename: "2024-10-6.7.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.7.JPG", alt: "有情 2024-10-6 7" },
      { id: 9, filename: "2024-10-6.8.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.8.JPG", alt: "有情 2024-10-6 8" },
      { id: 10, filename: "2024-10-6.9.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241006/2024-10-6.9.JPG", alt: "有情 2024-10-6 9" }
    ]
  },
  {
    albumId: 2,
    images: [
      { id: 1, filename: "2024-10-26.0.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.0.JPG", alt: "有情 2024-10-26 0" },
      { id: 2, filename: "2024-10-26.1.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.1.JPG", alt: "有情 2024-10-26 1" },
      { id: 3, filename: "2024-10-26.2.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.2.JPG", alt: "有情 2024-10-26 2" },
      { id: 4, filename: "2024-10-26.3.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.3.JPG", alt: "有情 2024-10-26 3" },
      { id: 5, filename: "2024-10-26.4.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.4.JPG", alt: "有情 2024-10-26 4" },
      { id: 6, filename: "2024-10-26.5.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.5.JPG", alt: "有情 2024-10-26 5" },
      { id: 7, filename: "2024-10-26.6.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.6.JPG", alt: "有情 2024-10-26 6" },
      { id: 8, filename: "2024-10-26.7.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.7.JPG", alt: "有情 2024-10-26 7" },
      { id: 9, filename: "2024-10-26.8.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.8.JPG", alt: "有情 2024-10-26 8" },
      { id: 10, filename: "2024-10-26.9.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.9.JPG", alt: "有情 2024-10-26 9" },
      { id: 11, filename: "2024-10-26.10.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.10.JPG", alt: "有情 2024-10-26 10" },
      { id: 12, filename: "2024-10-26.11.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.11.JPG", alt: "有情 2024-10-26 11" },
      { id: 13, filename: "2024-10-26.12.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.12.JPG", alt: "有情 2024-10-26 12" },
      { id: 14, filename: "2024-10-26.13.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.13.JPG", alt: "有情 2024-10-26 13" },
      { id: 15, filename: "2024-10-26.14.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.14.JPG", alt: "有情 2024-10-26 14" },
      { id: 16, filename: "2024-10-26.15.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20241026/2024-10-26.15.JPG", alt: "有情 2024-10-26 15" }
    ]
  },
  {
    albumId: 3,
    images: [
      { id: 1, filename: "2025-10-07.0.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.0.JPG", alt: "有情 2025-10-07 0" },
      { id: 2, filename: "2025-10-07.1.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.1.JPG", alt: "有情 2025-10-07 1" },
      { id: 3, filename: "2025-10-07.2.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.2.JPG", alt: "有情 2025-10-07 2" },
      { id: 4, filename: "2025-10-07.3.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.3.JPG", alt: "有情 2025-10-07 3" },
      { id: 5, filename: "2025-10-07.4.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.4.JPG", alt: "有情 2025-10-07 4" },
      { id: 6, filename: "2025-10-07.5.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.5.JPG", alt: "有情 2025-10-07 5" },
      { id: 7, filename: "2025-10-07.6.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.6.JPG", alt: "有情 2025-10-07 6" },
      { id: 8, filename: "2025-10-07.7.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.7.JPG", alt: "有情 2025-10-07 7" },
      { id: 9, filename: "2025-10-07.8.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251007/2025-10-07.8.JPG", alt: "有情 2025-10-07 8" }
    ]
  },
  {
    albumId: 4,
    images: [
      { id: 1, filename: "2025-11-08.0.PNG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.0.PNG", alt: "有情 2025-11-08 0" },
      { id: 2, filename: "2025-11-08.1.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.1.JPG", alt: "有情 2025-11-08 1" },
      { id: 3, filename: "2025-11-08.2.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.2.JPG", alt: "有情 2025-11-08 2" },
      { id: 4, filename: "2025-11-08.3.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.3.JPG", alt: "有情 2025-11-08 3" },
      { id: 5, filename: "2025-11-08.4.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.4.JPG", alt: "有情 2025-11-08 4" },
      { id: 6, filename: "2025-11-08.5.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.5.JPG", alt: "有情 2025-11-08 5" },
      { id: 7, filename: "2025-11-08.6.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.6.JPG", alt: "有情 2025-11-08 6" },
      { id: 8, filename: "2025-11-08.7.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.7.JPG", alt: "有情 2025-11-08 7" },
      { id: 9, filename: "2025-11-08.8.JPG", url: "https://cdn.djybrs.cn/uploads/youqing/20251108/2025-11-08.8.JPG", alt: "有情 2025-11-08 8" }
    ]
  }
];
