// app/blog/page.tsx

import Heading from "@/components/Heading";
import PostCard from "@/components/PostCart";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Kumpulan artikel Next.js, React, SEO, dan web development modern",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Heading>Blog</Heading>

      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}

      </div>


    </>
  );
}