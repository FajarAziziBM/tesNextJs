// lib/posts.ts
// Deskripsi: Layer data access untuk membaca file markdown dari folder /content/blog

import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import type { Post } from "@/types/post";

// Ambil 1 post berdasarkan slug
export async function getPost(slug: string): Promise<Post> {
  if (!slug) throw new Error("Slug is required");

  const file = await readFile(`./content/blog/${slug}.md`, "utf-8");
  const { content, data } = matter(file);

  return {
    slug,
    title: data.title,
    image: data.image,
    date: data.date,
    author: data.author,
    description: data.description,
    body: await marked.parse(content),
  };
}

// Ambil semua post (untuk listing blog)
export async function getAllPosts(): Promise<Post[]> {
  const files = await readdir("./content/blog");

  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));

  const posts: Post[] = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }

  return posts;
}