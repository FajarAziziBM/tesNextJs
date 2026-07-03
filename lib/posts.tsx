import { marked } from "marked";
import qs from "qs";

const STRAPI_URL = "http://127.0.0.1:1337";
const BASE_URL = `${STRAPI_URL}/api/posts`;

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  body: string;
  image: string;
};

type StrapiResponse<T> = {
  data: T[];
};

async function fetchPosts(query?: string) {
  const url = query ? `${BASE_URL}?${query}` : BASE_URL;

  const res = await fetch(url, {
    cache: "no-store",
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

export async function getAllPosts(): Promise<Post[]> {
  const query = buildQuery({
    sort: ["publishedAt:desc"],
    pagination: {
      page: 1,
      pageSize: 25,
    },
    populate: {
      image: true,
    },
  });

  const json: StrapiResponse<any> = await fetchPosts(query);

  return json.data.map(normalizePost);
}

export async function getPost(
  slug: string
): Promise<Post | null> {
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

  return item ? normalizePost(item) : null;
}

export async function getSlugs(): Promise<string[]> {
  const query = buildQuery({
    fields: ["slug"],
  });

  const json: StrapiResponse<{ slug: string }> =
    await fetchPosts(query);

  return json.data.map((item) => item.slug);
}

function normalizePost(item: any): Post {
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    publishedAt: item.publishedAt,
    author: item.author,
    body: marked(item.body, {
      headerIds: false,
      mangle: false,
    }),
    image: item.image?.url
      ? `${STRAPI_URL}${item.image.url}`
      : "",
  };
}