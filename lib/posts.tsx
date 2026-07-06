// lib/posts.tsx

import { marked } from "marked";
import qs from "qs";
import type { Post } from "@/types/post";

const STRAPI_URL = "http://127.0.0.1:1337";
const BASE_URL = `${STRAPI_URL}/api/posts`;

export const CACHE_TAG_POSTS = "posts";

type StrapiResponse<T> = {
  data: T[];
};

type StrapiPaginatedResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type PostsPagination = {
  posts: Post[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

async function fetchPosts(query?: string) {
  const url = query ? `${BASE_URL}?${query}` : BASE_URL;

  const res = await fetch(url, {
    next: {
      tags: [CACHE_TAG_POSTS],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

function buildQuery(params: object) {
  return qs.stringify(params, {
    encodeValuesOnly: true,
  });
}

export async function getPosts({
  page = 1,
  pageSize = 5,
}: {
  page?: number;
  pageSize?: number;
} = {}): Promise<PostsPagination> {
  const query = buildQuery({
    sort: ["publishedAt:desc"],
    pagination: {
      page,
      pageSize,
    },
    populate: {
      image: true,
    },
  });

  const json: StrapiPaginatedResponse<any> = await fetchPosts(query);

  return {
    posts: await Promise.all(json.data.map(normalizePost)),
    pagination: json.meta.pagination,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const { posts } = await getPosts({
    page: 1,
    pageSize: 1000,
  });

  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = buildQuery({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: true,
    },
  });

  const json: StrapiResponse<any> = await fetchPosts(query);

  const item = json.data[0];

  return item ? await normalizePost(item) : null;
}

export async function getSlugs(): Promise<string[]> {
  const query = buildQuery({
    fields: ["slug"],
  });

  const json: StrapiResponse<{ slug: string }> = await fetchPosts(query);

  return json.data.map((item) => item.slug);
}

async function normalizePost(item: any): Promise<Post> {
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    publishedAt: item.publishedAt,
    author: item.author,
    body: await marked.parse(item.body),
    image: item.image?.url
      ? `${STRAPI_URL}${item.image.url}`
      : "",
  };
}