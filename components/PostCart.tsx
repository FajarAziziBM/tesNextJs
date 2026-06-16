// components/PostCard.tsx
// Deskripsi: Komponen presentational untuk menampilkan 1 kartu blog post

import Link from "next/link";
import type { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex gap-6">
      {/* Thumbnail */}
      <div className="w-52 shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="h-36 w-full rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <Link
          href={`/blog/${post.slug}`}
          className="text-2xl font-bold hover:text-blue-600"
        >
          {post.title}
        </Link>

        <p className="mt-1 text-sm text-gray-500">
          Published <span className="underline">{post.date}</span> by{" "}
          {post.author}
        </p>

        <p className="mt-4 text-gray-700">{post.excerpt}</p>
      </div>
    </article>
  );
}