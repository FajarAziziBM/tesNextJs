// app/blog/page.tsx

import Heading from "@/components/Heading";
import PostCard from "@/components/PostCart";
import { getPosts } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Kumpulan artikel Next.js, React, SEO, dan web development modern",
});

const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  const currentPage = Math.max(Number(page) || 1, 1);

  const { posts, pagination } = await getPosts({
    page: currentPage,
    pageSize: POSTS_PER_PAGE,
  });

  return (
    <>
      <Heading>Blog</Heading>

      <div className="flex items-center gap-2 pb-6">
        {pagination.page > 1 ? (
          <Link href={`/blog?page=${pagination.page - 1}`}>
            &lt; Prev
          </Link>
        ) : (
          <span className="text-gray-400">&lt; Prev</span>
        )}

        {Array.from({ length: pagination.pageCount }, (_, index) => {
          const page = index + 1;

          return (
            <Link
              key={page}
              href={`/blog?page=${page}`}
              className={
                page === pagination.page
                  ? "rounded bg-black px-3 py-1 text-white"
                  : "rounded border px-3 py-1"
              }
            >
              {page}
            </Link>
          );
        })}

        {pagination.page < pagination.pageCount ? (
          <Link href={`/blog?page=${pagination.page + 1}`}>
            Next &gt;
          </Link>
        ) : (
          <span className="text-gray-400">Next &gt;</span>
        )}
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}