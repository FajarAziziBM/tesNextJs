// components/PostCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex gap-6">
      <div className="w-52 shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          width={208}
          height={144}
          unoptimized
          className="h-36 w-full rounded-lg object-cover shadow-md"
        />

      </div>

      <div className="flex-1">
        <Link
          href={`/blog/${post.slug}`}
          className="text-2xl font-bold hover:text-blue-600"
        >
          {post.title}
        </Link>

        <p className="mt-1 text-sm text-gray-500">
          Published{" "}
          <span className="underline">
            {new Date(post.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>{" "}
          by {post.author}
        </p>

        <p className="mt-4 text-gray-700">
          {post.description}
        </p>
      </div>
    </article>
  );
}