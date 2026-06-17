// lib/posts.ts

import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import type { Post } from "@/types/post";

const POSTS_DIR = "./content/blog";

export async function getSlug(): Promise<string[]> {
  const files = await readdir(POSTS_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
}

export async function getPost(slug: string): Promise<Post> {
  if (!slug) {
    throw new Error("Slug is required");
  }

  const file = await readFile(`${POSTS_DIR}/${slug}.md`, "utf-8");
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

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getSlug();

  return Promise.all(slugs.map((slug) => getPost(slug)));
}