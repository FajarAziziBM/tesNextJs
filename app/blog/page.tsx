// app/blog/page.tsx
// Deskripsi: Server Component untuk halaman list blog (fetch data + render list)

import Heading from "@/components/Heading";
import PostCard from "@/components/PostCart";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Heading>List of Posts</Heading>

      <h2 className="text-2xl mb-3">List of Post</h2>

      {/* Render list dari data API */}
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}