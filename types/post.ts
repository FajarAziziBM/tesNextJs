// types/post.ts
// Deskripsi: Type utama untuk data blog post agar konsisten di seluruh aplikasi

export interface Post {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  body?: string;
}