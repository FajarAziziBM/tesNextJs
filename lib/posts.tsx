import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export interface Post {
    title: string;
    image: string;
    date: string;
    author: string;
    body: string;
}

export async function getPost(slug: string): Promise<Post> {
  if (!slug) {
    throw new Error("Slug is required");
  }

  const text = await readFile(
    `./content/blog/${slug}.md`,
    "utf-8"
  );

  const { content, data } = matter(text);

  return {
    title: data.title,
    image: data.image,
    date: data.date,
    author: data.author,
    body: await marked.parse(content),
  };
}