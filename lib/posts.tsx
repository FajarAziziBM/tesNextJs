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

export async function getPostBySlug(slug: string): Promise<Post> {
    const text = await readFile(
        `./content/blog/${slug}.md`,
        "utf-8"
    );

    const { content, data } = matter(text);

    const body = await marked.parse(content);

    return {
        title: data.title,
        image: data.image,
        date: data.date,
        author: data.author,
        body,
    };
}